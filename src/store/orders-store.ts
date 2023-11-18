// store.ts
import create, { SetState, State } from "zustand";

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

interface Store extends State {
  favorites: Product[];
  toggleFavorite: (product: Product) => void;
  persistFavorites: () => void;
}

export const useFavouritesStore = create<Store>((set: SetState<Store>) => ({
  favorites: [],
  toggleFavorite: (product) =>
    set((state) => {
      const isFavorite = state.favorites.some((p) => p._id === product._id);

      if (isFavorite) {
        const updatedFavorites = state.favorites.filter(
          (p) => p._id !== product._id
        );
        set({ favorites: updatedFavorites });
      } else {
        const updatedFavorites = [...state.favorites, product];
        set({ favorites: updatedFavorites });
      }
    }),
  persistFavorites: () => {
    try {
      const favorites = get().favorites;
      localStorage.setItem("favorites", JSON.stringify(favorites));
    } catch (error) {
      console.error("Error persisting favorites to localStorage:", error);
    }
  },
}));

useFavouritesStore.subscribe(
  (state) => state.persistFavorites,
  (persistFavorites) => persistFavorites()
);
