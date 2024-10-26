import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  colors: string[];
  setColors: (colors: string[]) => void;
};

const defaultColors = [
  "#e9f5ff",
  "#d8ebff",
  "#b8d9ff",
  "#8ebeff",
  "#6195ff",
  "#3d6dff",
  "#1c42ff",
  "#1132f1",
  "#1230ca",
  "#183097",
  "#0e1a58",
];

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
  colors: defaultColors,
  setColors: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "ui-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  );

  const [colors, setColors] = useState<string[]>(defaultColors);

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      root.classList.add(systemTheme);
      return;
    }
    root.classList.add(theme);

    root.style.setProperty("-background", colors[0]);
    root.style.setProperty("-foreground", colors[10]);

    root.style.setProperty("-card", colors[1]);
    root.style.setProperty("-card-foreground", colors[9]);

    root.style.setProperty("-popover", colors[2]);
    root.style.setProperty("-popover-foreground", colors[8]);

    root.style.setProperty("-primary", colors[3]);
    root.style.setProperty("-primary-foreground", colors[7]);

    root.style.setProperty("-secondary", colors[4]);
    root.style.setProperty("-secondary-foreground", colors[6]);

    root.style.setProperty("-muted", colors[5]);
    root.style.setProperty("-muted-foreground", colors[5]);

    root.style.setProperty("-accent", colors[6]);
    root.style.setProperty("-accent-foreground", colors[4]);

    root.style.setProperty("-destructive", colors[9]);
    root.style.setProperty("-destructive-foreground", colors[1]);

    root.style.setProperty("-border", colors[7]);
    root.style.setProperty("-input", colors[7]);

    root.style.setProperty("-ring", colors[10]);

    root.style.setProperty("-sidebar-background", colors[0]);
    root.style.setProperty("-sidebar-foreground", colors[10]);
    root.style.setProperty("-sidebar-primary", colors[3]);
    root.style.setProperty("-sidebar-primary-foreground", colors[9]);
    root.style.setProperty("-sidebar-accent", colors[2]);
    root.style.setProperty("-sidebar-accent-foreground", colors[8]);
    root.style.setProperty("-sidebar-border", colors[4]);
    root.style.setProperty("-sidebar-ring", colors[10]);
  }, [theme, colors]);

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
    colors,
    setColors: (colors: string[]) => setColors(colors),
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};
