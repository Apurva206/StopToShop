module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Poppins',
    },
    container: {
      padding: {
        DEFAULT: '30px',
        lg: '0',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    extend: {
      colors: {
        primary: '#222222',
        secondary: '#F5E6E0',
        grey: 'rgb(190, 182, 183)',
        SlateGrey: '#2F4F4F',
        black: 'rgb(0 0 0)',
        Green: '#75CE9F',
        white: 'rgb(255, 255, 255)',
        Dgrey: 'rgb(112,128,144)',
        ForestGreen:'#228B22',
        SkyBlue:'hsl(0,0%,90%)'
      },
      backgroundImage: {
        hero: "url('./img/bghero.jpg')",
      },
    },
  },
  plugins: [],
};
