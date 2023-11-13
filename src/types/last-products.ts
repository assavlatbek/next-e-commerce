export default interface LastProductsType {
  _id: string;
  title: string;
  price: number;
  sold: number;
  quantity: number;
  description: string;
  image: {
    url: string;
  };
}
