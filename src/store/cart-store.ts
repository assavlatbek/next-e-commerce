// store.ts
import create from "zustand";

interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

interface CartState {
  cart: Record<string, CartItem>;
  addToCart: (id: string, name: string, price: number) => void;
  removeFromCart: (id: string) => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
}

// Helper function to check if we are on the client side
const isClient = typeof window !== "undefined";

// Helper function to get data from localStorage on the client side
const getClientStorage = () => {
  return isClient ? JSON.parse(localStorage.getItem("cart") || "{}") : {};
};

// Helper function to set data to localStorage on the client side
const setStorage = (data: Record<string, CartItem>) => {
  if (isClient) {
    localStorage.setItem("cart", JSON.stringify(data));
  }
};

export const useStore = create<CartState>((set) => ({
  cart: getClientStorage(),
  addToCart: (id, name, price) => {
    set((state) => {
      const currentQuantity = state.cart[id]?.quantity || 0;
      const newCart = {
        ...state.cart,
        [id]: { name, price, quantity: currentQuantity + 1 },
      };
      setStorage(newCart);
      return { cart: newCart };
    });
  },
  removeFromCart: (id) => {
    set((state) => {
      const newCart = { ...state.cart };
      delete newCart[id];
      setStorage(newCart);
      return { cart: newCart };
    });
  },
  increaseQuantity: (id) => {
    set((state) => {
      const newCart = { ...state.cart };
      newCart[id].quantity += 1;
      setStorage(newCart);
      return { cart: newCart };
    });
  },
  decreaseQuantity: (id) => {
    set((state) => {
      const newCart = { ...state.cart };
      newCart[id].quantity -= 1;
      if (newCart[id].quantity <= 0) {
        delete newCart[id];
      }
      setStorage(newCart);
      return { cart: newCart };
    });
  },
}));
