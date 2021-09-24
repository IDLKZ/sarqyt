export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'sarqyt',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {src: '/assets/js/jquery-2.1.0.min.js', async:true},
      {src: '/assets/js/popper.js', async:true},
      {src: '/assets/js/bootstrap.min.js', async:true},
      {src: '/assets/js/owl-carousel.js', async:true},
      {src: '/assets/js/scrollreveal.min.js', async:true},
      {src: '/assets/js/waypoints.min.js', async:true},
      {src: '/assets/js/jquery.counterup.min.js', async:true},
      {src: '/assets/js/imgfix.min.js', async:true},
      {src: '/assets/js/custom.js', async:true},
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "static/assets/css/bootstrap.min.css",
    "static/assets/css/font-awesome.css",
    "static/assets/css/templatemo-lava.css",
    "static/assets/css/owl-carousel.css"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
