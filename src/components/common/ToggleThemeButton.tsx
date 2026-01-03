"use client";
import { FiMoon, FiSun } from "react-icons/fi";
import { useThemeStore } from "@/context/styleContext";

export const ThemeToggleButton = () => {
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  return (
    <button 
      onClick={toggleTheme} 
      className="btn-ghost p-2 rounded-full"
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