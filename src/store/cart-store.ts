// store/cart-store.ts
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

export const useStore = create<CartState>((set) => ({
  cart: JSON.parse(localStorage.getItem("cart") || "[]"),
  addToCart: (id, name, price) => {
    set((state) => {
      const currentQuantity = state.cart[id]?.quantity || 0;
      const newCart = {
        ...state.cart,
        [id]: { name, price, quantity: currentQuantity + 1 },
      };
      localStorage.setItem("cart", JSON.stringify(newCart));
      return { cart: newCart };
    });
  },
  removeFromCart: (id) => {
    set((state) => {
      const newCart = { ...state.cart };
      delete newCart[id];
      localStorage.setItem("cart", JSON.stringify(newCart));
      return { cart: newCart };
    });
  },
  increaseQuantity: (id) => {
    set((state) => {
      const newCart = { ...state.cart };
      newCart[id].quantity += 1;
      localStorage.setItem("cart", JSON.stringify(newCart));
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
      localStorage.setItem("cart", JSON.stringify(newCart));
      return { cart: newCart };
    });
  },
}));
