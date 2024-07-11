/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: ["./src/**/*.{html,ts}"],
  theme: {
    colors: {
      primaryColor: "#4a3333",
      secondaryColor: "#e1473f",
      tertiaryColor: "#9a9088",
      quaternaryColor: "#80b0ab",
      quinaryColor: "#dbd1b3",
      shadow: '#6f6f7629',
      transparent: "rgba(0, 0, 0, 0)",
      white: "#fff",
      black: '#000',
      gray: '#333',
      lightGray: '#6f6f76',

    },
    fontFamily: {
      default: "Poppins, normal",
      pretty: 'Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif'
    },
    extend: {
      backgroundImage: {
        'home-img': "url('/assets/media/photo/me.png'"
      },
      boxShadow: {
        'boxShadow': '0 0 2px 0px',
        'shiny': '0 0 10px 0px'
      }
    },
  },
  plugins: [],
};
