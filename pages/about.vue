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
import { TimelineMax } from "gsap";
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
      const SVGToggle = document.querySelector(".burger"),
        _vm = this,
        tl = new TimelineMax(),
        sidebar = document.querySelector(".sidebar"),
        A = document.querySelectorAll(".navbar__list, .Social");
      tl.staggerTo(
        A,
        0.75,
        {
          x: -100,
          autoAlpha: 0,
          ease: Power2.easeIn,
          onComplete() {
            _vm.$store.dispatch("toggle");
            SVGToggle.classList.toggle("active");
            done;
          }
        },
        0.1
      );
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
