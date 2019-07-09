<template>
  <div class="over-container">
    <div class="content-container">
      <nav class="navbar">
        <ul ref="nav_ul" class="navbar__list">
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
        <ul ref="nav_ul" class="navbar__list">
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
          <div class="case-holder__banner">
            <div ref="hGroup" class="case-holder__group">
              <span class="h1">{{ data.title }}</span>
              <span class="case-holder__group--pre">
                —
                {{ data.desc }}
              </span>
            </div>
          </div>
          <div ref="bar" class="case-holder__bar"></div>
          <div class="case-holder__item">
            <div class="case-holder__figure">
              <nuxt-link tag="A" :to="`${data.route}`">
                <img ref="caseImg" class="case-holder__img" :src="`img/${data.image}`" />
              </nuxt-link>
            </div>
          </div>
        </div>

        <social-media ref="social" class="Social" />
      </nav>
    </div>
  </div>
</template>

<script>
import { TimelineLite } from "gsap";
import SocialMedia from "~/components/SocialMedia";
export default {
  name: "add-form",
  data() {
    return {
      mouseHover: false,
      hoverCases: [
        {
          id: "0",
          route: "/dastaniran",
          desc: "A Tourism Agency Specilized in IRAN ",
          title: "DastanIran",
          image: "Workspace 1_030.png",
          hover: false
        },
        {
          id: "1",
          route: "/sickfit",
          desc: "A shoping React base web app",
          title: "SickFit",
          image: "img2.jpg",
          hover: false
        },
        {
          id: "2",
          route: "/glozzom",
          desc: "A Bootstrap base UI app",
          title: "Glozzom",
          image: "img3.jpg",
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

  computed: {
    open(open) {
      return this.$store.state.sidebarOpen;
    }
  },
  components: {
    SocialMedia
  },
  methods: {}
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
