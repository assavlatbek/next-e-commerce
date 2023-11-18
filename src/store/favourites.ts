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

export const useFavouritesStore = create<Store>((set: SetState<Store>) => {
  const initialFavorites: Product[] =
    typeof window !== "undefined" && window?.localStorage.getItem("favorites")
      ? JSON.parse(window?.localStorage.getItem("favorites") || "[]")
      : [];

  return {
    favorites: initialFavorites,
    toggleFavorite: (product) =>
      set((state) => {
        const isFavorite = state.favorites.some((p) => p._id === product._id);

        if (typeof window !== "undefined" && isFavorite) {
          const updatedFavorites = state.favorites.filter(
            (p) => p._id !== product._id
          );
          typeof window !== "undefined"
            ? window.localStorage.setItem(
                "favorites",
                JSON.stringify(updatedFavorites)
              )
            : null;
          return { favorites: updatedFavorites };
        } else if (typeof window !== "undefined") {
          const updatedFavorites = [...state.favorites, product];
          typeof window !== "undefined"
            ? window.localStorage.setItem(
                "favorites",
                JSON.stringify(updatedFavorites)
              )
            : null;
          return { favorites: updatedFavorites };
        }

        return state;
      }),
  };
});
