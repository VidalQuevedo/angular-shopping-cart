export interface ShoppingCart {
  id: string;
  items: Item[];
  subTotal: number;
}

export interface Item {
  id: string;
  quantity: number;
  sku: Sku;
}

export interface Sku {
  id: string;
  title: string;
  price: number;
}