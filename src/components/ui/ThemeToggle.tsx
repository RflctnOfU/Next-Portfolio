"use client";

import { useTheme } from "next-themes";

import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <div className="relative">
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="inline-flex items-center justify-center"
      >
        <Sun
          className="rotate-0 scale-100 transition-all dark:-rotate90 dark:scale-0"
          size={17}
        />
        <Moon
          className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
          size={17}
        />
        <span className="sr-only">Toggle Theme</span>
      </button>
    </div>
  );
}
