export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Sarqyt App',
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
      {src: '/js/jquery-2.1.0.min.js', defer: true},
      {src: '/js/popper.js', defer: true},
      {src: '/js/bootstrap.min.js', defer: true},
      {src: '/js/owl-carousel.js', defer: true},
      {src: '/js/scrollreveal.min.js', defer: true},
      {src: '/js/waypoints.min.js', defer: true},
      {src: '/js/jquery.counterup.min.js', defer: true},
      {src: '/js/imgfix.min.js', defer: true},
      {src: '/js/custom.js', defer: true},
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "static/css/bootstrap.min.css",
    "static/css/font-awesome.css",
    "static/css/templatemo-lava.css",
    "static/css/owl-carousel.css"
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
