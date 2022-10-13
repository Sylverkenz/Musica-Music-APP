/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1200px",
    },

    extend: {
      fontFamily: {
        sans: ["Quicksand", 'sans-serif'],
      },
      colors: {
        "black-opaque": "rgba(0, 0, 0, 0.5)",
        "white-opaque": "rgba(255, 255, 255, 0.2)",
        "bg-primary": "#5bb5a2",
        "bg-secondary": "#e8f2ee",
        "clr-text-default": "#1a191e",
        "clr-text-grey": "#e8e8e8",
        "bg-label": "#f8f8f8",
      },
    },
  },
  plugins: [],
};
