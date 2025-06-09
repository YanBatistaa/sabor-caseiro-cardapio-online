
export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price: string;
  category: string;
  available: boolean;
}

export interface MenuCategory {
  name: string;
  icon: string;
  items: MenuItem[];
}

export interface CartItem {
  id: string;
  name: string;
  price: string;
  quantity: number;
}
