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
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    link: [
      {
        href:
          "https://fonts.googleapis.com/css?family=Expletus+Sans:500&display=swap",
        rel: "stylesheet"
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: false,

  /*
   ** Global CSS
   */
  css: ["normalize.css"],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["~plugins/HoverEffect.js"],

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
    extend(config, {isClient, dev}) {
      if (isClient) {
      }
    }
  },
  styleResources: {
    // your settings here
    scss: [
      "~assets/scss/main.scss",
    ]
  }
};
