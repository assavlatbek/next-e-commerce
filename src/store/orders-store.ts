// orders-store.ts
import create from "zustand";

interface Product {
  name: string;
  price: number;
  quantity: number;
}

interface OrdersStore {
  data: Record<string, Product>;
  addToCart: (productId: string) => void;
  removeFromCart: (productId: string) => void;
}

const isClient = typeof window !== "undefined";

const getClientStorage = () => {
  return isClient
    ? JSON.parse(window?.localStorage.getItem("cart") || "{}")
    : {};
};

const setStorage = (data: Record<string, Product>) => {
  if (isClient) {
    window?.localStorage.setItem("cart", JSON.stringify(data));
  }
};

const useOrdersStore = create<OrdersStore>((set) => ({
  data: getClientStorage(),
  addToCart: (productId) =>
    set((state) => {
      const newData = {
        ...state.data,
        [productId]: {
          ...state.data[productId],
          quantity: (state.data[productId]?.quantity || 0) + 1,
        },
      };
      setStorage(newData);
      return { data: newData };
    }),
  removeFromCart: (productId) =>
    set((state) => {
      const newQuantity = Math.max(
        (state.data[productId]?.quantity || 0) - 1,
        0
      );
      const newData = {
        ...state.data,
        [productId]: {
          ...state.data[productId],
          quantity: newQuantity,
        },
      };

      if (newQuantity === 0) {
        delete newData[productId];
      }

      setStorage(newData);
      return { data: newData };
    }),
}));

export default useOrdersStore;
