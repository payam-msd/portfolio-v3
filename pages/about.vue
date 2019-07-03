<template>
  <div>
    <about-header />
    <about-focus />
    <about-quote />
    <about-principle />
    <working-for />
  </div>
</template>

<script>
import { TimelineMax, TweenMax } from "gsap";
import { AboutAnim } from "~/mixins/AboutAnim";
import AboutHeader from "~/components/about/AboutHeader";
import AboutFocus from "~/components/about/AboutFocus";
import AboutQuote from "~/components/about/AboutQuote";
import AboutPrinciple from "~/components/about/AboutPrinciple";
import WorkingFor from "~/components/about/WorkingFor";

export default {
  transition: {
    name: "about",
    mode: "out-in",
    css: false,
    enter(el, done) {
      let tl = new TimelineMax({ onComplete: done });

      let SVGburger = document.querySelector(".burger");
      SVGburger.classList.toggle("active");
      this.$store.dispatch("toggle");
    },
    leave(el, done) {
      let tl = new TimelineMax({ onComplete: done });
    }
  },
  mixins: [AboutAnim],
  head() {
    return {
      title: "",
      meta: [
        {
          hid: "",
          name: "",
          content: ""
        }
      ]
    };
  },
  components: {
    AboutHeader,
    AboutFocus,
    AboutQuote,
    AboutPrinciple,
    WorkingFor
  }
};
</script>

<style lang="scss" scoped></style>
