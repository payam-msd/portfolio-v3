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
      const tl = new TimelineMax(),
        _vm = this;
      TweenMax.delayedCall(0.75, () => {
        if (!!_vm.$store.state.sidebarOpen) _vm.$store.dispatch("toggle");
      });
      //   tl.staggerTo(
      //     ".navbar__list, .Social",
      //     1,
      //     {
      //       xPercent: -50,
      //       autoAlpha: 0,
      //       ease: Power2.easeInOut,

      //       onComplete() {
      //         tl.set(".navbar__list, .Social", {
      //           xPercent: -40,
      //           autoAlpha: 0,
      //           delay: -0.5
      //         });
      //       }
      //     },
      //     0.2,
      //     "-="
      //   );
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
