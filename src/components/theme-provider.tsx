import { hexToRgb } from "@/helpers/hexToRgb";
import { rgbToHsl } from "@/helpers/rgbToHsl";
import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";

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
  theme: "light",
  setTheme: () => null,
  colors: defaultColors,
  setColors: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "dark",
  storageKey = "ui-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    (localStorage.getItem(storageKey) as Theme) ?? defaultTheme
  );

  const [colors, setColors] = useState<string[]>(defaultColors);

  useEffect(() => {
    const root = window.document.documentElement;

    const hslConverter = (rbg: string, colorShiftAmount?: number): string => {
      const selectedRgb = hexToRgb(rbg)
        .replaceAll(" ", "")
        .split(",")
        .map((i) => parseInt(i));

      return rgbToHsl(
        selectedRgb[0],
        selectedRgb[1],
        selectedRgb[2],
        colorShiftAmount
      );
    };

    const firstColor = `hsl(${hslConverter(colors[0], 500)})`;
    const secondColor = `hsl(${hslConverter(colors[0], 400)})`;

    console.log({ firstColor, secondColor });

    const gradient = `radial-gradient(${firstColor}, ${secondColor})`;

    root.classList.remove("light", "dark");
    root.classList.add(theme);

    root.style.setProperty("--color-50", hexToRgb(colors[0]));
    root.style.setProperty("--color-100", hexToRgb(colors[1]));
    root.style.setProperty("--color-200", hexToRgb(colors[2]));
    root.style.setProperty("--color-300", hexToRgb(colors[3]));
    root.style.setProperty("--color-400", hexToRgb(colors[4]));
    root.style.setProperty("--color-500", hexToRgb(colors[5]));
    root.style.setProperty("--color-600", hexToRgb(colors[6]));
    root.style.setProperty("--color-700", hexToRgb(colors[7]));
    root.style.setProperty("--color-800", hexToRgb(colors[8]));
    root.style.setProperty("--color-900", hexToRgb(colors[9]));
    root.style.setProperty("--color-950", hexToRgb(colors[10]));

    // root.style.setProperty(
    //   "--background",
    //   theme === "dark" ? "0, 0, 0" : "255, 255, 255"
    // );
    // root.style.setProperty("--background", hexToRgb(colors[0]));
    // root.style.setProperty("--background", gradient);
    document.body.style.background = gradient;

    root.style.setProperty("--foreground", hexToRgb(colors[10]));

    root.style.setProperty("--card", hexToRgb(colors[0]));
    root.style.setProperty("--card-foreground", hexToRgb(colors[10]));

    root.style.setProperty("--popover", hexToRgb(colors[1]));
    root.style.setProperty("--popover-foreground", hexToRgb(colors[10]));

    root.style.setProperty("--primary", hexToRgb(colors[10]));
    root.style.setProperty("--primary-foreground", hexToRgb(colors[1])); // APLICAR TONALIDADE BRANCA / PRETA DE ACORDO COM COR

    root.style.setProperty("--secondary", hexToRgb(colors[4]));
    root.style.setProperty("--secondary-foreground", hexToRgb(colors[6]));

    root.style.setProperty("--muted", hexToRgb(colors[0]));
    root.style.setProperty("--muted-foreground", hexToRgb(colors[10]));

    root.style.setProperty("--accent", hexToRgb(colors[6]));
    root.style.setProperty("--accent-foreground", hexToRgb(colors[4]));

    root.style.setProperty("--destructive", hexToRgb(colors[9]));
    root.style.setProperty("--destructive-foreground", hexToRgb(colors[1]));

    root.style.setProperty("--border", hexToRgb(colors[10]));
    root.style.setProperty("--input", hexToRgb(colors[10]));

    root.style.setProperty("--ring", hexToRgb(colors[10]));

    root.style.setProperty("--sidebar-background", hexToRgb(colors[0]));
    root.style.setProperty("--sidebar-foreground", hexToRgb(colors[10]));
    root.style.setProperty("--sidebar-primary", hexToRgb(colors[3]));
    root.style.setProperty("--sidebar-primary-foreground", hexToRgb(colors[9]));
    root.style.setProperty("--sidebar-accent", hexToRgb(colors[2]));
    root.style.setProperty("--sidebar-accent-foreground", hexToRgb(colors[8]));
    root.style.setProperty("--sidebar-border", hexToRgb(colors[4]));
    root.style.setProperty("--sidebar-ring", hexToRgb(colors[10]));
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
