"use client";
import { FiMoon, FiSun } from "react-icons/fi";
import { useThemeStore } from "@/context/styleContext";

export const ThemeToggleButton = () => {
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  return (
    <button 
      onClick={toggleTheme} 
      className="bg-primary text-primary-foreground border-3 border-border rounded-lg p-2 shadow-[4px_4px_0px_0px] shadow-border hover:shadow-[6px_6px_0px_0px] hover:shadow-border active:shadow-[0px_0px_0px_0px] active:translate-x-1 active:translate-y-1 transition-all duration-150"
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