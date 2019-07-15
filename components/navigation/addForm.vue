<template>
  <div class="container">
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
              <div class="imgWidth"></div>
              <div class="img" :style="{backgroundImage:`url(${data.image})`}"></div>
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
          image: "/img/img4.jpg",
          hover: false
        },
        {
          id: "1",
          route: "/sickfit",
          desc: "A shoping React base web app",
          title: "SickFit",
          image: "/img/img2.jpg",
          hover: false
        },
        {
          id: "2",
          route: "/glozzom",
          desc: "A Bootstrap base UI app",
          title: "Glozzom",
          image: "/img/img3.jpg",
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
    SocialMedia
  },
  methods: {},
  watch: {
    mouseHover: mouseHover => {
      const tl = new TimelineLite();

      mouseHover
        ? tl
            .set(".case-holder__group", { xPercent: 15, autoAlpha: 0 })
            .set(".case-holder__img", {
              autoAlpha: 0
            })
            .to(".case-holder__group", 0.75, {
              xPercent: 0,
              autoAlpha: 1,
              ease: Power1.easeInOut
            })
            .fromTo(
              ".case-holder__img",
              0.6,
              { left: "2%" },
              { left: "25%", autoAlpha: 1, ease: Linear.easeInOut },
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
