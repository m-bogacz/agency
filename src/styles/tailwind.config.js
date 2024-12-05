/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      dimension: {
        scale: "var(--dimension-scale)",
        xs: "var(--dimension-xs)",
        sm: "var(--dimension-sm)",
        md: "var(--dimension-md)",
        lg: "var(--dimension-lg)",
        xl: "var(--dimension-xl)"
      },
      spacing: {
        xs: "var(--spacing-xs)",
        sm: "var(--spacing-sm)",
        md: "var(--spacing-md)",
        lg: "var(--spacing-lg)",
        xl: "var(--spacing-xl)",
        multiValue: "var(--spacing-multi-value)"
      },
      borderRadius: {
        sm: "var(--border-radius-sm)",
        lg: "var(--border-radius-lg)",
        xl: "var(--border-radius-xl)",
        multiValue: "var(--border-radius-multi-value)"
      },
      colors: {
        black: "var(--colors-black)",
        white: "var(--colors-white)",
        gray: {
          100: "var(--colors-gray-100)",
          200: "var(--colors-gray-200)",
          300: "var(--colors-gray-300)",
          400: "var(--colors-gray-400)",
          500: "var(--colors-gray-500)",
          600: "var(--colors-gray-600)",
          700: "var(--colors-gray-700)",
          800: "var(--colors-gray-800)",
          900: "var(--colors-gray-900)"
        },
        red: {
          100: "var(--colors-red-100)",
          200: "var(--colors-red-200)",
          300: "var(--colors-red-300)",
          400: "var(--colors-red-400)",
          500: "var(--colors-red-500)",
          600: "var(--colors-red-600)",
          700: "var(--colors-red-700)",
          800: "var(--colors-red-800)",
          900: "var(--colors-red-900)"
        },
        orange: {
          100: "var(--colors-orange-100)",
          200: "var(--colors-orange-200)",
          300: "var(--colors-orange-300)",
          400: "var(--colors-orange-400)",
          500: "var(--colors-orange-500)",
          600: "var(--colors-orange-600)",
          700: "var(--colors-orange-700)",
          800: "var(--colors-orange-800)",
          900: "var(--colors-orange-900)"
        },
        yellow: {
          100: "var(--colors-yellow-100)",
          200: "var(--colors-yellow-200)",
          300: "var(--colors-yellow-300)",
          400: "var(--colors-yellow-400)",
          500: "var(--colors-yellow-500)",
          600: "var(--colors-yellow-600)",
          700: "var(--colors-yellow-700)",
          800: "var(--colors-yellow-800)",
          900: "var(--colors-yellow-900)"
        },
        green: {
          100: "var(--colors-green-100)",
          200: "var(--colors-green-200)",
          300: "var(--colors-green-300)",
          400: "var(--colors-green-400)",
          500: "var(--colors-green-500)",
          600: "var(--colors-green-600)",
          700: "var(--colors-green-700)",
          800: "var(--colors-green-800)",
          900: "var(--colors-green-900)"
        },
        teal: {
          100: "var(--colors-teal-100)",
          200: "var(--colors-teal-200)",
          300: "var(--colors-teal-300)",
          400: "var(--colors-teal-400)",
          500: "var(--colors-teal-500)",
          600: "var(--colors-teal-600)",
          700: "var(--colors-teal-700)",
          800: "var(--colors-teal-800)",
          900: "var(--colors-teal-900)"
        },
        blue: {
          100: "var(--colors-blue-100)",
          200: "var(--colors-blue-200)",
          300: "var(--colors-blue-300)",
          400: "var(--colors-blue-400)",
          500: "var(--colors-blue-500)",
          600: "var(--colors-blue-600)",
          700: "var(--colors-blue-700)",
          800: "var(--colors-blue-800)",
          900: "var(--colors-blue-900)"
        },
        indigo: {
          100: "var(--colors-indigo-100)",
          200: "var(--colors-indigo-200)",
          300: "var(--colors-indigo-300)",
          400: "var(--colors-indigo-400)",
          500: "var(--colors-indigo-500)",
          600: "var(--colors-indigo-600)",
          700: "var(--colors-indigo-700)",
          800: "var(--colors-indigo-800)",
          900: "var(--colors-indigo-900)"
        },
        purple: {
          100: "var(--colors-purple-100)",
          200: "var(--colors-purple-200)",
          300: "var(--colors-purple-300)",
          400: "var(--colors-purple-400)",
          500: "var(--colors-purple-500)",
          600: "var(--colors-purple-600)",
          700: "var(--colors-purple-700)",
          800: "var(--colors-purple-800)",
          900: "var(--colors-purple-900)"
        },
        pink: {
          100: "var(--colors-pink-100)",
          200: "var(--colors-pink-200)",
          300: "var(--colors-pink-300)",
          400: "var(--colors-pink-400)",
          500: "var(--colors-pink-500)",
          600: "var(--colors-pink-600)",
          700: "var(--colors-pink-700)",
          800: "var(--colors-pink-800)",
          900: "var(--colors-pink-900)"
        }
      },
      opacity: {
        low: "var(--opacity-low)",
        md: "var(--opacity-md)",
        high: "var(--opacity-high)"
      },
      fontFamilies: {
        heading: "var(--font-families-heading)",
        body: "var(--font-families-body)"
      },
      lineHeights: {
        heading: "var(--line-heights-heading)",
        body: "var(--line-heights-body)"
      },
      letterSpacing: {
        default: "var(--letter-spacing-default)",
        increased: "var(--letter-spacing-increased)",
        decreased: "var(--letter-spacing-decreased)"
      },
      paragraphSpacing: {
    "h1": "var(--paragraph-spacing-h1)",
    "h2": "var(--paragraph-spacing-h2)"
      },
      fontWeights: {
        headingRegular: "var(--font-weights-heading-regular)",
        headingBold: "var(--font-weights-heading-bold)",
        bodyRegular: "var(--font-weights-body-regular)",
        bodyBold: "var(--font-weights-body-bold)"
      },
      fontSizes: {
    "h1": "var(--font-sizes-h1)",
    "h2": "var(--font-sizes-h2)",
    "h3": "var(--font-sizes-h3)",
    "h4": "var(--font-sizes-h4)",
    "h5": "var(--font-sizes-h5)",
    "h6": "var(--font-sizes-h6)",
        body: "var(--font-sizes-body)",
        sm: "var(--font-sizes-sm)",
        xs: "var(--font-sizes-xs)"
      }
    },
  },
}