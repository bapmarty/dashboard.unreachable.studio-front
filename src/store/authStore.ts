import { create } from "zustand";

type AuthState = {
    isAuthenticated: boolean;
    login: () => void;
    logout: () => void;
}

export const useAuthState = create<AuthState>((set) => ({
    isAuthenticated: false,
    login: () => set({isAuthenticated: true}),
    logout: () => set({isAuthenticated: false})
}))