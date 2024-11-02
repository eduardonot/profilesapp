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
          50: "rgb(var(--color-50))",
          100: "rgb(var(--color-100))",
          200: "rgb(var(--color-200))",
          300: "rgb(var(--color-300))",
          400: "rgb(var(--color-400))",
          500: "rgb(var(--color-500))",
          600: "rgb(var(--color-600))",
          700: "rgb(var(--color-700))",
          800: "rgb(var(--color-800))",
          900: "rgb(var(--color-900))",
          950: "rgb(var(--color-950))",
        },
        background: "rgb(var(--background))",
        foreground: "rgb(var(--foreground))",
        card: {
          DEFAULT: "rgb(var(--card))",
          foreground: "rgb(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "rgb(var(--popover))",
          foreground: "rgb(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "rgb(var(--primary))",
          foreground: "rgb(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "rgb(var(--secondary))",
          foreground: "rgb(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "rgb(var(--muted))",
          foreground: "rgb(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "rgb(var(--accent))",
          foreground: "rgb(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "rgb(var(--destructive))",
          foreground: "rgb(var(--destructive-foreground))",
        },
        border: "rgb(var(--border))",
        input: "rgb(var(--input))",
        ring: "rgb(var(--ring))",
        chart: {
          1: "rgb(var(--chart-1))",
          2: "rgb(var(--chart-2))",
          3: "rgb(var(--chart-3))",
          4: "rgb(var(--chart-4))",
          5: "rgb(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "rgb(var(--sidebar-background))",
          foreground: "rgb(var(--sidebar-foreground))",
          primary: "rgb(var(--sidebar-primary))",
          "primary-foreground": "rgb(var(--sidebar-primary-foreground))",
          accent: "rgb(var(--sidebar-accent))",
          "accent-foreground": "rgb(var(--sidebar-accent-foreground))",
          border: "rgb(var(--sidebar-border))",
          ring: "rgb(var(--sidebar-ring))",
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
      border: "rgb(var(--border))",
      input: "rgb(var(--input))",
      ring: "rgb(var(--ring))",
      background: "rgb(var(--background))",
      foreground: "rgb(var(--foreground))",
      primary: {
        DEFAULT: "rgb(var(--primary))",
        foreground: "rgb(var(--primary-foreground))",
      },
      secondary: {
        DEFAULT: "rgb(var(--secondary))",
        foreground: "rgb(var(--secondary-foreground))",
      },
      destructive: {
        DEFAULT: "rgb(var(--destructive))",
        foreground: "rgb(var(--destructive-foreground))",
      },
      muted: {
        DEFAULT: "rgb(var(--muted))",
        foreground: "rgb(var(--muted-foreground))",
      },
      accent: {
        DEFAULT: "rgb(var(--accent))",
        foreground: "rgb(var(--accent-foreground))",
      },
      popover: {
        DEFAULT: "rgb(var(--popover))",
        foreground: "rgb(var(--popover-foreground))",
      },
      card: {
        DEFAULT: "rgb(var(--card))",
        foreground: "rgb(var(--card-foreground))",
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
