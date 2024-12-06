/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      color: {
        primary: "var(--color-primary)",
        black: "var(--color-black)",
    "grey_800": "var(--color-grey-800)",
    "grey_700": "var(--color-grey-700)"
      },
      fontsizes: {
        sm: "var(--fontsizes-sm)",
        xs: "var(--fontsizes-xs)",
        lg: "var(--fontsizes-lg)",
        body: "var(--fontsizes-body)"
      }
    },
  },
}