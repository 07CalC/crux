import { create } from "zustand";
import { persist } from "zustand/middleware";

type ThemeStore = {
  theme: "dark" | "light";
  toggleTheme: () => void;
  sideBar: boolean;
  toggleSideBar: () => void;
  initializeTheme: () => void;
};

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set, get) => ({
      theme: "light",
      toggleTheme: () =>
        set((state) => {
          const newTheme = state.theme === "light" ? "dark" : "light";
          if (typeof document !== "undefined") {
            document.documentElement.classList.toggle("dark", newTheme === "dark");
          }
          return { theme: newTheme };
        }),
      sideBar: false,
      toggleSideBar: () =>
        set((state) => {
          return { sideBar: !state.sideBar };
        }),
      initializeTheme: () => {
        const currentTheme = get().theme;
        if (typeof document !== "undefined") {
          document.documentElement.classList.toggle("dark", currentTheme === "dark");
        }
      },
    }),
    {
      name: "crux-theme-storage",
      skipHydration: true,
    }
  )
);

