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
            v-data-case="cases.title"
          >
            <a>{{ cases.title }}</a>
          </nuxt-link>
        </ul>

        <div class="case-holder" v-for="data in hoverCases" :key="data.id" v-show="data.hover">
          <nuxt-link tag="a" :to="`${data.route}`">
            <div ref="bar" class="case-holder__bar"></div>

            <div class="case-holder__banner">
              <div ref="hGroup" class="case-holder__group">
                <span class="h1">{{ data.title }}</span>
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
import { TimelineLite } from "gsap";
import socialMedia from "~/components/socialMedia/socialMedia";
import img2 from "~/assets/img/img2.jpg";
import img3 from "~/assets/img/img3.jpg";
import img4 from "~/assets/img/img4.jpg";

export default {
  name: "add-form",
  data() {
    return {
      img2,
      img3,
      img4,
      mouseHover: false,
      hoverCases: [
        {
          id: "0",
          route: "/dastaniran",
          desc: "A Tourism Agency Specilized in IRAN ",
          title: "DastanIran",
          image: img2,
          hover: false
        },
        {
          id: "1",
          route: "/sickfit",
          desc: "A shoping React base web app",
          title: "SickFit",
          image: img3,
          hover: false
        },
        {
          id: "2",
          route: "/glozzom",
          desc: "A Bootstrap base UI app",
          title: "Glozzom",
          image: img4,
          hover: false
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
      mouseHover
        ? tl
            .set(".case-holder__group span ", {
              x: 80,
              autoAlpha: 0,
              force3D: false
            })
            .to(
              ".case-holder__group span ",
              0.75,
              {
                x: 0,
                autoAlpha: 1,
                ease: Power2.easeInout
              },
              "+="
            )
            .fromTo(
              ".case-holder__img div",
              1,
              { x: "2%", autoAlpha: 0 },
              { x: "20%", autoAlpha: 1, ease: Power2.easeInout },
              "-=.6"
            )
        : "";
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
