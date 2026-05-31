import { create } from "zustand";
import { persist } from "zustand/middleware";

type AuthState = {
  isLoggedIn: boolean;
  isLoginDone: boolean;
  username: string;
  login: (_username: string) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      isLoginDone: false,
      username: "",
      login: (_username) => {
        if (_username) {
          set({ isLoggedIn: true, username: _username });
        }
      },
      logout: () => {
        set({ isLoggedIn: false, username: "" });
      },
    }),
    {
      name: "auth-state",
      partialize: (state) => ({
        isLoggedIn: state.isLoggedIn,
        username: state.username,
      }),
      onRehydrateStorage: (state) => {
        return (state, error) => {
          if (error) {
            console.log("error", error);
          } else {
            if (state) {
              state.isLoginDone = true;
            }
          }
        };
      },
    },
  ),
);
