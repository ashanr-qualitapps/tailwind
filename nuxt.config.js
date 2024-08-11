// nuxt.config.js
export default defineNuxtConfig({
    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ['~/assets/css/main.css'],
  
    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,
  
    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
      // https://tailwindcss.com/docs/guides/nuxtjs
    ],
  
    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
      postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  
    // other configurations...
  })
  