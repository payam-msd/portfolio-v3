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
            @click="handleSidebar"
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
            @click="handleSidebar"
          >
            <a>{{ cases.title }}</a>
          </nuxt-link>
        </ul>
      </nav>
      <div class="case-holder">
        <div
          class="case-holder__hover"
          v-for="data in hoverCases"
          :key="data.id"
          v-show="data.hover"
        >
          <nuxt-link nuxt-link-exact-active :to="`${data.route}`">
            <a>
              {{ data.title }},
              {{ data.desc }}
              <img :src="`img/${data.image}`" />
            </a>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { TimelineMax } from "gsap";
export default {
  name: "add-form",

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
  components: {},
  computed: {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.active {
  font-style: bold;
  font-size: 2rem;
}
</style>
