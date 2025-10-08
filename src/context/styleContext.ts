import { create } from "zustand";

type ThemeStore = {
  theme: "dark" | "light";
  toggleTheme: () => void;
  sideBar: boolean;
  toggleSideBar: () => void;
};

export const useThemeStore = create<ThemeStore>((set) => ({
  theme: "light",
  toggleTheme: () =>
    set((state) => {
      const newTheme = state.theme === "light" ? "dark" : "light";
      document.documentElement.classList.toggle("dark", newTheme === "dark");
      return { theme: newTheme };
    }),
  sideBar: false,
  toggleSideBar: () =>
    set((state) => {
      return { sideBar: !state.sideBar };
    }),
}));

