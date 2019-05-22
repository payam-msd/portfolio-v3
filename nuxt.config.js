import pkg from "./package";

export default {
  mode: "universal",

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["~plugins/directives.js"],

  /*
   ** Nuxt.js modules
   */
  modules: [
    "@nuxtjs/pwa",
    "@nuxtjs/style-resources",
    [
      "@nuxtjs/google-analytics",
      {
        id: "UA-139424150-1"
      }
    ]
  ],

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  styleResources: {
    // your settings here
    scss: [
      "~assets/scss/main.scss"
      // "~assets/scss/base/*.scss",
      //  "~assets/scss/abstracts/*.scss",
      //  "~assets/scss/layout/_mediaQuery.scss",

      //   "~assets/scss/components/*.scss",
      //   "~assets/scss/layout/*.scss",
      //   "~assets/scss/pages/*.scss"
    ]
  }
};
