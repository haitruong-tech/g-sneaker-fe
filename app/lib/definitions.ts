export type Shoes = {
  id: number;
  image?: string;
  name?: string;
  description?: string;
  price?: string;
  color?: string;
};

export type CartItem = Shoes & { quantity?: number };

export type Cart = CartItem[];
