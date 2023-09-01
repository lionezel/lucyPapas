export interface Products {
  id?: string;
  name: string;
  image: string;
  price: number;
  category: Category;
  descripcion: string;
}

export interface Category {
  name: string
}
