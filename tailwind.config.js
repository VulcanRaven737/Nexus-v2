/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        michroma: ['Michroma', 'sans-serif'],
        spacemono: ['Space Mono', 'sans-serif'],
      },
      keyframes: {
        typing: {
          "0%": { width: "0%" },
          "100%": { width: "27%" }, // full text width for the typing effect
        },
        blink: {
          "50%": { borderColor: "transparent" },
        },
      },
      animation: {
        typing: "typing 3s infinite alternate, blink .7s infinite",
      },
    },
  },
  plugins: [],
};
