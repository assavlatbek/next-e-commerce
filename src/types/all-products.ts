export interface AllProductsType {
  sold: number;
  _id: string;
  title: string;
  price: number;
  description: string;
  image: {
    url: string;
  };
  quantity: number;
}
