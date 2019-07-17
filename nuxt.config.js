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
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/ScrollMagic.min.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/debug.addIndicators.min.js' },
      {src: "https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/animation.gsap.min.js"}
    ],
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
  plugins: ["~plugins/HoverEffect.js",
{src: "~plugins/intersectionObserver.js"}],

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
 extend(config, ctx) {
      if (ctx.isDev) {
        config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map'
      }
    }
  },
  vue: {
  config: {
    productionTip: false,
    devtools: true
  }
},

  styleResources: {
    // your settings here
    scss: [
      "~assets/scss/main.scss",
    ]
  }
};
