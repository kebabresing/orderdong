import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import https from 'https';
import fs from 'fs';
import path from 'path';

function outletsApiPlugin() {
  return {
    name: 'outlets-api-plugin',
    configureServer(server: any) {
      server.middlewares.use((req: any, res: any, next: any) => {
        const urlObj = new URL(req.url, 'http://localhost');

        // 1. GET /api/outlets?lat=...&lng=...&q=...
        if (urlObj.pathname === '/api/outlets') {
          const lat = urlObj.searchParams.get('lat') || '';
          const lng = urlObj.searchParams.get('lng') || '';
          const q = urlObj.searchParams.get('q') || '';

          const params: string[] = [];
          if (lat && lng) params.push(`lat=${lat}&lng=${lng}`);
          if (q) params.push(`q=${encodeURIComponent(q)}`);
          const queryString = params.length > 0 ? `?${params.join('&')}` : '';

          const options = {
            hostname: 'jasdorkopi.id',
            port: 443,
            path: `/pilih-outlet${queryString}`,
            method: 'GET',
            headers: {
              'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
              'X-Live-Search': '1',
              'X-Requested-With': 'XMLHttpRequest',
              'Accept': '*/*'
            }
          };

          const request = https.request(options, (remoteRes) => {
            let data = '';
            remoteRes.on('data', (chunk) => (data += chunk));
            remoteRes.on('end', () => {
              const labelRegex = /<label[^>]*class=["'][^"']*outlet-item[^"']*["'][\s\S]*?<\/label>/g;
              const outlets: any[] = [];
              let labelMatch;

              while ((labelMatch = labelRegex.exec(data)) !== null) {
                const block = labelMatch[0];
                const nameMatch = block.match(/data-outlet-name=["']([^"']*)["']/);
                const addrMatch = block.match(/data-outlet-address=["']([^"']*)["']/);
                const distMatch = block.match(/data-outlet-distance=["']([^"']*)["']/);
                const radioMatch = block.match(/<input[^>]*value=["']([^"']*)["'][^>]*class=["'][^"']*outlet-radio/);
                const hoursMatch = block.match(/(\d{2}:\d{2}\s*-\s*\d{2}:\d{2}\s*WIB)/);
                const isDriveThru = block.includes('Drive Thru');

                const name = nameMatch ? nameMatch[1] : '';
                const id = radioMatch ? radioMatch[1] : (outlets.length + 1).toString();
                const address = addrMatch ? addrMatch[1] : '';
                const distance = distMatch ? distMatch[1] : '0 km';
                const hours = hoursMatch ? hoursMatch[1] : '07:00 - 23:00 WIB';

                if (name) {
                  outlets.push({
                    id,
                    name,
                    address,
                    distance,
                    hours,
                    is_open: true,
                    is_drive_thru: isDriveThru,
                    phone: '08128888400',
                    maps_url: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(name)}`
                  });
                }
              }

              res.setHeader('Content-Type', 'application/json');
              res.setHeader('Access-Control-Allow-Origin', '*');
              res.end(JSON.stringify({ success: true, outlets, count: outlets.length }));
            });
          });

          request.on('error', (err) => {
            console.error('Proxy error:', err);
            res.statusCode = 502;
            res.end(JSON.stringify({ success: false, error: err.message }));
          });

          request.end();
          return;
        }

        // 2. GET /api/outlet-detail/:id?lat=...&lng=...
        const detailMatch = urlObj.pathname.match(/^\/api\/outlet-detail\/([^/]+)$/);
        if (detailMatch) {
          const outletId = detailMatch[1];
          const lat = urlObj.searchParams.get('lat') || '';
          const lng = urlObj.searchParams.get('lng') || '';

          const params: string[] = [];
          if (lat) params.push(`lat=${lat}`);
          if (lng) params.push(`lng=${lng}`);
          const queryString = params.length > 0 ? `?${params.join('&')}` : '';

          const options = {
            hostname: 'jasdorkopi.id',
            port: 443,
            path: `/pilih-outlet/${outletId}/detail${queryString}`,
            method: 'GET',
            headers: {
              'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
              'Accept': 'application/json',
              'X-Requested-With': 'XMLHttpRequest'
            }
          };

          const request = https.request(options, (remoteRes) => {
            let data = '';
            remoteRes.on('data', (chunk) => (data += chunk));
            remoteRes.on('end', () => {
              res.setHeader('Content-Type', 'application/json');
              res.setHeader('Access-Control-Allow-Origin', '*');
              res.end(data);
            });
          });

          request.on('error', (err) => {
            res.statusCode = 502;
            res.end(JSON.stringify({ success: false, error: err.message }));
          });

          request.end();
          return;
        }

        next();
      });
    }
  };
}

export default defineConfig({
  plugins: [react(), outletsApiPlugin()],
  server: {
    port: 5173,
    host: true
  }
});
