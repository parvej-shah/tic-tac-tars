/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E90FF", // Primary blue for buttons and highlights
        secondary: "#32CD32", // Secondary green for accents
        danger: "#FF4500", // For errors or warnings
        background: "#121212", // Main dark background
        surface: "#1E1E1E", // Card-like surfaces or panels
        border: "#333333", // Border color for components
        textPrimary: "#FFFFFF", // Main text color
        textSecondary: "#B0B0B0", // Subtle, secondary text
        accent: "#FFD700", // Gold color for special elements
      },
      fontFamily: {
        sans: ['"Orbitron"', "sans-serif"], // Default futuristic font
      },
      boxShadow: {
        glow: "0 0 15px rgba(30, 144, 255, 0.7)", // Glowing blue shadow
        subtle: "0 2px 4px rgba(0, 0, 0, 0.2)", // Subtle shadow for panels
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite", // Fun animations
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
    },
  },
  plugins: [require('daisyui'),],
};
