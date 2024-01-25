/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**/*.{jsx,js}"],
  theme: {
    extend: {
      keyframes: {
        "border-blink": {
          "0%, 20%": {
            "border-color": "#87CEEB",
          },
          "40%": {
            "border-color": "#00ff00",
          },
          "60%": {
            "border-color": "#0000ff",
          },
          "80%": {
            "border-color": "#ffff00",
          },
          "100%": {
            "border-color": "#ff00ff",
          },
        },
      },
      animation: {
        "border-blink": "border-blink 2.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
