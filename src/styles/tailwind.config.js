/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      tokens: {
        color: {
          primary: "var(--tokens-color-primary)",
          black: "var(--tokens-color-black)",
      "grey_800": "var(--tokens-color-grey-800)",
      "grey_700": "var(--tokens-color-grey-700)"
        }
      }
    },
  },
}