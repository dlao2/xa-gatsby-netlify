module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  plugins: [],
  important: false,
  separator: ':',
  theme: {
    extend: {
      height: {
        '128': '32rem',
      }
    },
  },
  variants: {
    appearance: ['responsive'],
    zIndex: ['responsive'],
  },
}
