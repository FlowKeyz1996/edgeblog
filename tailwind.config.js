/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
              primary: {
                DEFAULT: '#FF5480'
              },
              secondary: {
                DEFAULT: '#808080',
                light: '#F2FEFC'
              },
            },
            fontFamily: {
                    raleway: ['Raleway', 'sans-serif'],
                    inter: ['Inter', 'sans-serif'],
                    manrope:['Manrope', 'sans-serif'],
                  
                  },
    },
  },
  plugins: [],
};
