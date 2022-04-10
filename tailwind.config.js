module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
    fontSize: {
      'title': ['64px',{ letterSpacing: '-0.01em',}]
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
