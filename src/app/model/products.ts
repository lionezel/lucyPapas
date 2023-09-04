export interface Products {
  id?: string;
  name: string;
  image: string;
  price: number;
  category: Category;
  description: string;
}

export interface Category {
  name: string
}
