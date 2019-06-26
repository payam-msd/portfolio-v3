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
    beforeEnter(el) {},
    enter(el, done) {
      const sidebarW = document.querySelector(".sidebar").offsetWidth,
        sidebar = document.querySelector(".sidebar"),
        toggleSVG = document.querySelector("svg"),
        tl = new TimelineMax({ onComplete: done });
      this.$store.dispatch("toggle");
      toggleSVG.classList.toggle("active");
      tl.to(sidebar, 1.75, {
        x: sidebarW,
        ease: Power4.easeInOut
      });
    }
  },
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
