<template>
  <div class="over-container">
    <div class="content-container">
      <nav class="navbar">
        <ul class="navbar__list">
          <li class="navbar__title">Menu</li>
          <nuxt-link
            class="navbar__item"
            v-for="page in pages"
            :key="page.id"
            tag="li"
            :to="`${page.route}`"
            exact
          >
            <a>{{ page.text }}</a>
          </nuxt-link>
        </ul>
        <ul class="navbar__list">
          <li class="navbar__title">Cases</li>
          <nuxt-link
            class="navbar__item"
            v-for="cases in hoverCases"
            :key="cases.id"
            :to="`${cases.route}`"
            v-data-case="`${cases.title}`"
            tag="li"
          >
            <a>{{ cases.title }}</a>
          </nuxt-link>
        </ul>

        <div class="case-holder">
          <div
            class="case-holder__hover"
            v-for="data in hoverCases"
            :key="data.id"
            v-show="data.hover"
          >
            <nuxt-link :to="`${data.route}`">
              <a>
                <div class="case-holder__banner">
                  <div class="case-holder__group">
                    <h1>
                      <span>{{ data.title }}</span>
                    </h1>
                    <p>
                      <span class="case-holder__group--pre">
                        —
                        {{ data.desc }}
                      </span>
                    </p>
                  </div>
                  <div class="case-holder__bar"></div>
                </div>
                <img class="case-holder___img" :src="`img/${data.image}`" />
              </a>
            </nuxt-link>
          </div>
        </div>
      </nav>
      <social-media class="Social" />
    </div>
  </div>
</template>

<script>
import { TimelineLite } from "gsap";
import { starterNavAnim, afterToggle } from "~/mixins/Navbar";
import SocialMedia from "~/components/SocialMedia";
export default {
  name: "add-form",
  mixins: [starterNavAnim, afterToggle],
  data() {
    return {
      hoverCases: [
        {
          id: "0",
          route: "/dastaniran",
          desc: "A Tourism Agency Specilized in IRAN ",
          title: "DastanIran",
          image: "Workspace 1_030.png",
          hover: true
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
          desc: "test",
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
