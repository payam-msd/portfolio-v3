<template>
  <div>
    <about-header />
    <about-focus />
    <about-quote />
    <about-principle />
    <working-for :contentComponent="AddForm" />
  </div>
</template>

<script>
import { TimelineMax } from "gsap";
import AboutHeader from "~/components/about/AboutHeader";
import AboutFocus from "~/components/about/AboutFocus";
import AboutQuote from "~/components/about/AboutQuote";
import AboutPrinciple from "~/components/about/AboutPrinciple";
import WorkingFor from "~/components/about/WorkingFor";
import AddForm from "~/components/navigation/addForm";

export default {
  transition: {
    name: "about",
    mode: "out-in",
    css: false,
    enter(el, done) {
      const _vm = this,
        tl = new TimelineMax({ delay: 0.3 });
      //   if (!this.$store.state.sidebarOpen) {
      //     tl.from(el, 1.5, { y: 200, autoAlpha: 0, ease: Linear.easeNone });
      //   }
      TweenMax.delayedCall(1, () => {
        if (!!_vm.$store.state.sidebarOpen) _vm.$store.dispatch("toggle");
      });
      tl.add("socialOut")
        .to(".Social, .Social ul , .navbar__title", 1, {
          xPercent: -40,
          autoAlpha: 0,
          ease: Power2.easeOut,
          onComplete() {
            tl.delay(0.2);
            tl.set(".navbar__list, .Social ul", {
              xPercent: -40,
              autoAlpha: 0,
              delay: -0.6
            });
          }
        })
        .staggerTo(
          ".navbar__list ",
          0.75,
          {
            xPercent: -40,
            autoAlpha: 0,
            ease: Power2.easeInout
          },
          0.1,
          "socialOut+=.2"
        );
    }
  },
  mounted() {},
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
  data() {
    return {
      AddForm
    };
  },
  components: {
    AboutHeader,
    AboutFocus,
    AboutQuote,
    AboutPrinciple,
    WorkingFor
  },
  methods: {}
};
</script>

<style lang="scss" scoped></style>
