import type { Config } from "tailwindcss"
/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme"
const colors = require('tailwindcss/colors')


const config = {
  darkMode: ["class"],
  content: [
    "./node_modules/flowbite-react/lib/**/*.js",
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",
  ],
  prefix: "",
  theme: {
    fontFamily: {
      sans: ["var(--font-sans)", ...fontFamily.sans],
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },

    colors: {
      ...colors,
      neutral: {
        DEFAULT: '',
        orange: '#F38332',
        green: '#55BDC3'
      }
    },
    
    extend: {
      
      backgroundImage: theme => ({
        "categoryBgImage1": "url('/public/homecatbg.png')",
        "categoryBgImage2": "url('/public/homecatbg.png')",
      }),
      
      screens: {
        'xs': "480px",
        "2xl": "1400px",
        "3xl": "1600px",
        "4xl": "1800px",
        "5xl": "2000px",
        "6xl": "2200px",
        "7xl": "2400px",
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
  },
  plugins: [require("tailwindcss-animate"), require("flowbite/plugin")({
    charts: true,
  })],
} satisfies Config

export default config