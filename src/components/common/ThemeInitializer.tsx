"use client";

import { useEffect } from "react";
import { useThemeStore } from "@/context/styleContext";

export function ThemeInitializer() {
  const initializeTheme = useThemeStore((state) => state.initializeTheme);
  
  useEffect(() => {
    // Initialize theme on mount
    initializeTheme();
  }, [initializeTheme]);

  return null;
}
