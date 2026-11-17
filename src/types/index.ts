export interface Outlet {
  id: string;
  name: string;
  code?: string;
  address: string;
  distance: string;
  distance_num?: number;
  is_open: boolean;
  hours: string;
  is_drive_thru: boolean;
  phone: string;
  maps_url?: string;
  [key: string]: any;
}

export interface ProductChoice {
  value: string;
  label: string;
  price: number;
  [key: string]: any;
}

export interface ProductOption {
  key: string;
  label: string;
  choices: ProductChoice[];
  [key: string]: any;
}

export interface ProductAddonChoice {
  value: string;
  name: string;
  label?: string;
  price: number;
  delta?: number;
  sku?: string;
  icon?: string;
  default?: boolean;
  available?: boolean;
  api_sold_out?: boolean;
  [key: string]: any;
}

export interface ProductAddonGroup {
  key: string;
  code?: string;
  label: string;
  name: string;
  group: string;
  type?: string;
  only_one?: boolean;
  mandatory?: boolean;
  required?: boolean;
  single?: boolean;
  choices: ProductAddonChoice[];
  [key: string]: any;
}

export interface Product {
  id: string;
  slug_id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  price_display: string;
  category_id: string;
  category_name: string;
  is_promo?: boolean;
  original_price?: number | null;
  modal_url?: string;
  options?: ProductOption[];
  addons?: ProductAddonGroup[];
  [key: string]: any;
}

export interface CartItem {
  cartItemId: string;
  productId: string;
  name: string;
  image: string;
  basePrice: number;
  unitPrice: number;
  quantity: number;
  selectedOptions: Record<string, { value: string; label: string; price: number }>;
  selectedAddons: { value: string; name: string; price: number }[];
  notes: string;
  totalItemPrice: number;
}

export interface BestSeller {
  rank: number;
  name: string;
  badge: string;
  pcs: string;
  total: string;
  image: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface WifiDay {
  day: number;
  day_str: string;
  password: string;
}

export interface FeeTier {
  title: string;
  subtitle: string;
  discount: string;
  fee: string;
  badge?: string;
}
