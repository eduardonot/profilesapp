/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class", "class"],
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./components/**/*.{html,js,jsx,ts,tsx}",
    "./app/**/*.{html,js,jsx,ts,tsx}",
    "./pages/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: "true",
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        user: {
          50: "rgb(var(--color-50),<alpha-value> )",
          100: "rgb(var(--color-100),<alpha-value> )",
          200: "rgb(var(--color-200),<alpha-value> )",
          300: "rgb(var(--color-300),<alpha-value> )",
          400: "rgb(var(--color-400),<alpha-value> )",
          500: "rgb(var(--color-500),<alpha-value> )",
          600: "rgb(var(--color-600),<alpha-value> )",
          700: "rgb(var(--color-700),<alpha-value> )",
          800: "rgb(var(--color-800),<alpha-value> )",
          900: "rgb(var(--color-900),<alpha-value> )",
          950: "rgb(var(--color-950),<alpha-value> )",
        },
        background: "rgb(var(--background),<alpha-value>)",
        foreground: "rgb(var(--foreground),<alpha-value>)",
        card: {
          DEFAULT: "rgb(var(--card),<alpha-value>)",
          foreground: "rgb(var(--card-foreground),<alpha-value>)",
        },
        popover: {
          DEFAULT: "rgb(var(--popover),<alpha-value>)",
          foreground: "rgb(var(--popover-foreground),<alpha-value>)",
        },
        primary: {
          DEFAULT: "rgb(var(--primary),<alpha-value>)",
          foreground: "rgb(var(--primary-foreground),<alpha-value>)",
        },
        secondary: {
          DEFAULT: "rgb(var(--secondary),<alpha-value>)",
          foreground: "rgb(var(--secondary-foreground),<alpha-value>)",
        },
        muted: {
          DEFAULT: "rgb(var(--muted),<alpha-value>)",
          foreground: "rgb(var(--muted-foreground),<alpha-value>)",
        },
        accent: {
          DEFAULT: "rgb(var(--accent),<alpha-value>)",
          foreground: "rgb(var(--accent-foreground),<alpha-value>)",
        },
        destructive: {
          DEFAULT: "rgb(var(--destructive),<alpha-value>)",
          foreground: "rgb(var(--destructive-foreground),<alpha-value>)",
        },
        border: "rgb(var(--border),<alpha-value>)",
        input: "rgb(var(--input),<alpha-value>)",
        ring: "rgb(var(--ring),<alpha-value>)",
        chart: {
          1: "rgb(var(--chart-1),<alpha-value>)",
          2: "rgb(var(--chart-2),<alpha-value>)",
          3: "rgb(var(--chart-3),<alpha-value>)",
          4: "rgb(var(--chart-4),<alpha-value>)",
          5: "rgb(var(--chart-5),<alpha-value>)",
        },
        sidebar: {
          DEFAULT: "rgb(var(--sidebar-background),<alpha-value>)",
          foreground: "rgb(var(--sidebar-foreground),<alpha-value>)",
          primary: "rgb(var(--sidebar-primary),<alpha-value>)",
          "primary-foreground":
            "rgb(var(--sidebar-primary-foreground),<alpha-value>)",
          accent: "rgb(var(--sidebar-accent),<alpha-value>)",
          "accent-foreground":
            "rgb(var(--sidebar-accent-foreground),<alpha-value>)",
          border: "rgb(var(--sidebar-border),<alpha-value>)",
          ring: "rgb(var(--sidebar-ring),<alpha-value>)",
        },
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  extend: {
    colors: {
      border: "rgb(var(--border),<alpha-value>)",
      input: "rgb(var(--input),<alpha-value>)",
      ring: "rgb(var(--ring),<alpha-value>)",
      background: "rgb(var(--background),<alpha-value>)",
      foreground: "rgb(var(--foreground),<alpha-value>)",
      primary: {
        DEFAULT: "rgb(var(--primary),<alpha-value>)",
        foreground: "rgb(var(--primary-foreground),<alpha-value>)",
      },
      secondary: {
        DEFAULT: "rgb(var(--secondary),<alpha-value>)",
        foreground: "rgb(var(--secondary-foreground),<alpha-value>)",
      },
      destructive: {
        DEFAULT: "rgb(var(--destructive),<alpha-value>)",
        foreground: "rgb(var(--destructive-foreground),<alpha-value>)",
      },
      muted: {
        DEFAULT: "rgb(var(--muted),<alpha-value>)",
        foreground: "rgb(var(--muted-foreground),<alpha-value>)",
      },
      accent: {
        DEFAULT: "rgb(var(--accent),<alpha-value>)",
        foreground: "rgb(var(--accent-foreground),<alpha-value>)",
      },
      popover: {
        DEFAULT: "rgb(var(--popover),<alpha-value>)",
        foreground: "rgb(var(--popover-foreground),<alpha-value>)",
      },
      card: {
        DEFAULT: "rgb(var(--card),<alpha-value>)",
        foreground: "rgb(var(--card-foreground),<alpha-value>)",
      },
    },
    borderRadius: {
      lg: `var(--radius)`,
      md: `calc(var(--radius) - 2px)`,
      sm: "calc(var(--radius) - 4px)",
    },
    keyframes: {
      "accordion-down": {
        from: { height: "0" },
        to: { height: "var(--radix-accordion-content-height)" },
      },
      "accordion-up": {
        from: { height: "var(--radix-accordion-content-height)" },
        to: { height: "0" },
      },
    },
    animation: {
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out",
    },
  },
  plugins: [require("tailwindcss-animate")],
};
