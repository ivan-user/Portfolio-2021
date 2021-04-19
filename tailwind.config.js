module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
        'primary': '#333533',
        'secondary': '#FFE5D4',
        'tertiary': '#61E8E1',
        'danger': '#e3342f',
    }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
