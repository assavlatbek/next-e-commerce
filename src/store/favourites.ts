// store.ts
import create, { SetState } from "zustand";

export interface Product {
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

interface Store {
  favorites: Product[];
  toggleFavorite: (product: Product) => void;
}

export const useFavouritesStore = create<Store>((set: SetState<Store>) => ({
  favorites: JSON.parse(localStorage.getItem("favorites") || "[]"),
  toggleFavorite: (product) =>
    set((state) => {
      const isFavorite = state.favorites.some((p) => p._id === product._id);

      if (isFavorite) {
        const updatedFavorites = state.favorites.filter(
          (p) => p._id !== product._id
        );
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
        return { favorites: updatedFavorites };
      } else {
        const updatedFavorites = [...state.favorites, product];
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
        return { favorites: updatedFavorites };
      }
    }),
}));
