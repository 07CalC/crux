"use client";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { useThemeStore } from "@/context/styleContext";

export const ThemeToggleButton = () => {
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  return (
    <button onClick={toggleTheme} className="rounded-xl text-black border-2 border-black dark:text-white transition-all ease-in-out duration-200 shadow-[6px_6px_0px_0px] active:shadow-[0px_0px_0px_0px] active:translate-x-2 active:translate-y-2 active:duration-100  shadow-black bg-purple-500 p-2">
      {theme === "light" ? (
        <MdDarkMode  className="text-black text-2xl sm:text-3xl" />
      ) : (
        <MdLightMode className="text-white text-2xl sm:text-3xl" />
      )}
    </button>
  );
};