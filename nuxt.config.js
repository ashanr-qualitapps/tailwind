export default {
  css: ['~/assets/css/main.css'],
  buildModules: [
    '@nuxtjs/tailwindcss',
  ],
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
}
