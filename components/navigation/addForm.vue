<template>
  <div class="container">
    <div class="content-container">
      <nav class="navbar">
        <ul class="navbar__list">
          <li class="navbar__title">Menu</li>
          <nuxt-link
            class="navbar__item"
            v-for="page in pages"
            :key="page.id"
            :to="`${page.route}`"
            tag="li"
          >
            <a>{{ page.text }}</a>
          </nuxt-link>
        </ul>
        <ul class="navbar__list">
          <li class="navbar__title">Cases</li>
          <nuxt-link
            class="navbar__item navbar__cases"
            v-for="cases in hoverCases"
            :key="cases.id"
            :to="`${cases.route}`"
            tag="li"
          >
            <a v-data-case="cases.title">{{ cases.title }}</a>
          </nuxt-link>
        </ul>

        <div class="case-holder" v-for="data in hoverCases" :key="data.id" v-show="data.hover">
          <nuxt-link tag="a" :to="`${data.route}`">
            <div ref="bar" class="case-holder__bar"></div>

            <div class="case-holder__banner">
              <div ref="hGroup" class="case-holder__group">
                <h1 class="h1">{{ data.title }}</h1>
                <span class="case-holder__group--pre">
                  —
                  {{ data.desc }}
                </span>
              </div>
            </div>
            <div class="case-holder__img">
              <div ref="image" class="img" :style="{backgroundImage:`url(${data.image})`}"></div>
            </div>
          </nuxt-link>
        </div>

        <social-media ref="social" class="Social" />
      </nav>
    </div>
  </div>
</template>

<script>
import { TimelineMax } from "gsap";
import socialMedia from "~/components/socialMedia/socialMedia";
import dastanIran from "~/assets/img/Dastan-iran.webp";
import digiMobile from "~/assets/img/Digii-mobile.webp";

export default {
  name: "add-form",
  data() {
    return {
      digiMobile,
      dastanIran,
      mouseHover: false,
      hoverCases: [
        {
          id: "1",
          route: "/dastaniran",
          desc: "a tourism agency specilized in iran",
          title: "DastanIran",
          image: dastanIran,
          hover: 0
        },
        {
          id: "2",
          route: "/digimobile",
          desc: "a bootstrap UI base app",
          title: "DigiMobile",
          image: digiMobile,
          hover: 0
        },
        {
          id: "3",
          route: "/sickfit",
          desc: "a bootstrap UI base app",
          title: "SickFit",
          image: digiMobile,
          hover: 0
        }
      ],
      pages: [
        {
          id: "0",
          text: "Home",
          route: "/"
        },
        {
          id: "1",
          text: "About",
          route: "/about"
        },
        {
          id: "2",
          text: "Contact",
          route: "/contact"
        }
      ]
    };
  },

  components: {
    socialMedia
  },
  methods: {},
  mounted() {
    this.$nextTick(() => {
      const tl = new TimelineMax(),
        { hGroup, image, bar } = this.$refs;
      tl.set([hGroup, image, bar], { autoAlpha: 0 }).staggerFrom(
        [hGroup, image, bar],
        1,
        { autoAlpha: 1, x: 150, lazy: true }
      );
    });
  },
  computed: {
    open(open) {
      return this.$store.state.sidebarOpen;
    }
  },

  watch: {
    mouseHover: mouseHover => {
      const tl = new TimelineLite();
      if (mouseHover)
        tl.set(".case-holder__group span, .case-holder__group h1 ", {
          x: 80,
          autoAlpha: 0
        })
          .staggerTo(
            ".case-holder__group span, .case-holder__group h1 ",
            1,
            {
              x: 0,
              autoAlpha: 1,
              ease: Power2.easeNone,
              force3D: true
            },
            0.1
          )
          .fromTo(
            ".case-holder__img div",
            0.75,
            { x: "5.3%", autoAlpha: 0 },
            {
              x: "25.3%",
              force3D: false,
              autoAlpha: 1,
              delay: -0.6,
              ease: Power2.easeNone
            },
            "-=.9"
          );
    }
  }
};
</script>

<style lang="scss" scoped>
.socialMedia {
  position: absolute;
  left: 4rem;
  bottom: 5rem;
  fill: #fff !important;
  fill-rule: inherit;
}
</style>
