/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      primary: "var(--colors-primary)",
    },
    borderRadius: {
      sm: "var(--border-radius-sm)",
      lg: "var(--border-radius-lg)",
      xl: "var(--border-radius-xl)",
    },
  },
};
