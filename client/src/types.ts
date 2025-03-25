export interface UserInterface {
  _id: string;
  uid?: string;
  name: string;
  email: string;
  img: string;
  role: "buyer" | "farmer";
  farmName?: string;
  cart: {
    user: string;
    items: CartItem[];
  };
  verified: boolean;
}

type ProductCategory =
  | "Fruits"
  | "Vegetables"
  | "Herbs and Spices"
  | "Grains and Pulses"
  | "Nuts and Dry Fruits"
  | "Dairy and Animal Products"
  | "Organic and Specialty Products"
  | "Handmade Pickles"
  | "Farming Inputs and Supplies"
  | "Handmade Snacks";

export interface ProductInterface {
  _id: string;
  name: string;
  desc: string;
  price: number;
  images: string[];
  category: ProductCategory;
  stock: number;
  seller: string;
  farmName: string;
  location: {
    country: string;
    state: string;
    city: string;
  };
  createdAt?: Date | string;
}

export interface CartItem {
  _id: string;
  productId: string;
  name: string;
  category: string;
  price: number;
  quantity: number;
  image: string;
}
