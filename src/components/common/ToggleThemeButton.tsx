"use client";
import { FiMoon, FiSun } from "react-icons/fi";
import { useThemeStore } from "@/context/styleContext";

export const ThemeToggleButton = () => {
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  return (
    <button
      onClick={toggleTheme}
      className="bg-primary text-primary-foreground border-2 sm:border-3 border-border rounded-lg p-3 min-h-[44px] min-w-[44px] flex items-center justify-center"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <FiMoon className="w-5 h-5" />
      ) : (
        <FiSun className="w-5 h-5" />
      )}
    </button>
  );
};
