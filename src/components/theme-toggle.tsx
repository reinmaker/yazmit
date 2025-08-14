"use client";

import * as React from "react";
import { Moon, Sun, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";

type Theme = "light" | "dark" | "system";

export function ThemeToggle() {
  const [theme, setTheme] = React.useState<Theme>("system");

  React.useEffect(() => {
    // Check for saved theme preference or default to system
    const savedTheme = localStorage.getItem("theme") as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    } else {
      // Apply system theme by default
      applyTheme("system");
    }

    // Listen for system theme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      if (theme === "system") {
        applyTheme("system");
      }
    };
    
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme]);

  const applyTheme = (newTheme: Theme) => {
    const root = document.documentElement;
    
    if (newTheme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      root.setAttribute("data-theme", systemTheme);
      root.classList.toggle("dark", systemTheme === "dark");
      console.log(`Applied system theme: ${systemTheme}`);
    } else {
      root.setAttribute("data-theme", newTheme);
      root.classList.toggle("dark", newTheme === "dark");
      console.log(`Applied manual theme: ${newTheme}`);
    }
    
    localStorage.setItem("theme", newTheme);
  };

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
    applyTheme(newTheme);
  };

  return (
    <div className="flex items-center gap-1 rounded-md border border-card-border bg-card-bg p-1">
      <Button
        variant={theme === "light" ? "default" : "ghost"}
        size="sm"
        onClick={() => handleThemeChange("light")}
        className="h-8 w-8 p-0"
        aria-label="Light mode"
        title="Light mode"
      >
        <Sun className="h-4 w-4" />
      </Button>
      <Button
        variant={theme === "system" ? "default" : "ghost"}
        size="sm"
        onClick={() => handleThemeChange("system")}
        className="h-8 w-8 p-0"
        aria-label="System preference"
        title="System preference"
      >
        <Monitor className="h-4 w-4" />
      </Button>
      <Button
        variant={theme === "dark" ? "default" : "ghost"}
        size="sm"
        onClick={() => handleThemeChange("dark")}
        className="h-8 w-8 p-0"
        aria-label="Dark mode"
        title="Dark mode"
      >
        <Moon className="h-4 w-4" />
      </Button>
    </div>
  );
}
