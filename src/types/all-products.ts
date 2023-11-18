export interface AllProductsType {
  checked: boolean;
  sold: number;
  _id: string;
  title: string;
  price: number;
  description: string;
  image: {
    public_id?: string;
    url: string;
  };
  quantity: number;
  category: {
    _id: string;
    name: string;
    image: {
      public_id: string;
      url: string;
    };
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
  createdAt: string;
  updatedAt: string;
  __v: number;
}
