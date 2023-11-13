import User from "@/types/user";
import { create } from "zustand";

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  setIsAuthenticated: (user: User) => void;
}

const userJson =
  typeof window !== "undefined" ? window?.localStorage.getItem("user") : null;

const user = userJson ? JSON.parse(userJson) : null;

const useAuth = create<AuthState>()((set, get) => ({
  isAuthenticated: Boolean(
    typeof window !== "undefined"
      ? window?.localStorage?.getItem("token")
      : null
  ),
  user,
  setIsAuthenticated: (user) => {
    const { isAuthenticated } = get();
    set({ isAuthenticated: !isAuthenticated, user });
  },
}));

export default useAuth;
