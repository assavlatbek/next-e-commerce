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

// Helper function to check if we are on the client side
const isClient = typeof window !== "undefined";

// Helper function to get data from localStorage on the client side
const getClientStorage = () => {
  return isClient ? JSON.parse(localStorage.getItem("cart") || "{}") : {};
};

// Helper function to set data to localStorage on the client side
const setStorage = (data: Record<string, Product>) => {
  if (isClient) {
    localStorage.setItem("cart", JSON.stringify(data));
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
      const newData = {
        ...state.data,
        [productId]: {
          ...state.data[productId],
          quantity: Math.max((state.data[productId]?.quantity || 0) - 1, 0),
        },
      };
      setStorage(newData);
      return { data: newData };
    }),
}));

export default useOrdersStore;
