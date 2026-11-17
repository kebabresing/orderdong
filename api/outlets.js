import https from 'https';

function proxyJasdor(path) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'jasdorkopi.id',
      port: 443,
      path,
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
        'X-Live-Search': '1',
        'X-Requested-With': 'XMLHttpRequest',
        'Accept': '*/*'
      }
    };
    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', chunk => (data += chunk));
      res.on('end', () => resolve(data));
    });
    req.on('error', reject);
    req.setTimeout(12000, () => { req.destroy(); reject(new Error('timeout')); });
    req.end();
  });
}

function parseOutlets(html) {
  const labelRegex = /<label[^>]*class=["'][^"']*outlet-item[^"']*["'][\s\S]*?<\/label>/g;
  const outlets = [];
  let m;

  while ((m = labelRegex.exec(html)) !== null) {
    const block = m[0];
    const nameMatch  = block.match(/data-outlet-name=["']([^"']*)["']/);
    const addrMatch  = block.match(/data-outlet-address=["']([^"']*)["']/);
    const distMatch  = block.match(/data-outlet-distance=["']([^"']*)["']/);
    const radioMatch = block.match(/<input[^>]*value=["']([^"']*)["'][^>]*class=["'][^"']*outlet-radio/);
    const hoursMatch = block.match(/(\d{2}:\d{2}\s*-\s*\d{2}:\d{2}\s*WIB)/);
    const isDriveThru = block.includes('Drive Thru');
    const isOpen      = !block.includes('Tutup') && !block.includes('Closed');

    // Extract real lat/lng from Google Maps URL in block
    const mapsMatch = block.match(/maps\.google\.com\/maps\/search[^"']*query=([-\d.]+),([-\d.]+)/);
    const mapsMatch2 = block.match(/google\.com\/maps\/search[^\s"']*query=([-\d.]+),([-\d.]+)/);
    const mapHref = block.match(/href=["']([^"']*google\.com\/maps[^"']*)["']/);

    let lat = null, lng = null;
    if (mapsMatch) {
      lat = parseFloat(mapsMatch[1]);
      lng = parseFloat(mapsMatch[2]);
    } else if (mapsMatch2) {
      lat = parseFloat(mapsMatch2[1]);
      lng = parseFloat(mapsMatch2[2]);
    }

    const name = nameMatch ? nameMatch[1].trim() : '';
    if (!name) continue;

    const id = radioMatch ? radioMatch[1] : String(outlets.length + 1);
    const address = addrMatch ? addrMatch[1].trim() : '';
    const distance = distMatch ? distMatch[1].trim() : '';
    const hours = hoursMatch ? hoursMatch[1].trim() : '07:00 - 23:00 WIB';

    // Build maps URL — prefer real coords from block, else search by name
    const mapsUrl = (lat && lng)
      ? `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`
      : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(name)}`;

    outlets.push({
      id,
      name,
      address,
      distance,
      hours,
      is_open: isOpen,
      is_drive_thru: isDriveThru,
      phone: '08128888400',
      maps_url: mapsUrl,
      lat_hint: lat,
      lng_hint: lng
    });
  }

  return outlets;
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Cache-Control', 's-maxage=30, stale-while-revalidate=120');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const { lat, lng, q } = req.query;

  try {
    const params = [];
    if (lat && lng) params.push(`lat=${lat}&lng=${lng}`);
    if (q) params.push(`q=${encodeURIComponent(q)}`);
    const qs = params.length > 0 ? `?${params.join('&')}` : '';

    const html = await proxyJasdor(`/pilih-outlet${qs}`);
    const outlets = parseOutlets(html);

    res.status(200).json({
      success: true,
      outlets,
      count: outlets.length,
      source: 'live'
    });
  } catch (err) {
    res.status(502).json({
      success: false,
      error: err.message,
      outlets: []
    });
  }
}

