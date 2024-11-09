// tailwind.config.js

module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: "#f60d37",    // Rojo brillante
          secondary: "#ffe223",  // Amarillo brillante
          tertiary: "#ffc321",   // Naranja
          dark: "#212121",       // Gris oscuro
          light: "#fcf5e4",      // Crema
          warning: "#ae1b32",    // Rojo oscuro
          muted: "#6c757d",      // Gris para texto secundario
        },
      },
    },
    plugins: [],
  };
  