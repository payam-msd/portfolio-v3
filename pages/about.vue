<template>
  <div>
    <about-hero />
    <about-focus />
    <about-quote />
    <about-principle />
    <about-work :contentComponent="AddForm" />
  </div>
</template>

<script>
import { TimelineMax } from "gsap";
import AboutHero from "~/components/about/AboutHero";
import AboutFocus from "~/components/about/AboutFocus";
import AboutQuote from "~/components/about/AboutQuote";
import AboutPrinciple from "~/components/about/AboutPrinciple";
import AboutWork from "~/components/about/AboutWork";
import AddForm from "~/components/navigation/addForm";

export default {
  transition: {
    name: "about",
    mode: "",
    css: false,
    enter(el, done) {
      const _vm = this,
        tl = new TimelineMax();
      TweenMax.delayedCall(1, () => {
        if (!!_vm.$store.state.sidebarOpen) _vm.$store.dispatch("toggle");
      });
      !!this.$store.state.sidebarOpen
        ? tl
            .add("socialOut")
            .to(".Social, .Social ul , .navbar__title", 1, {
              xPercent: -40,
              autoAlpha: 0,
              ease: Power2.easeOut,
              onComplete() {
                done();
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
                ease: Power2.easeInOut
              },
              0.1,
              "socialOut+=.2"
            )
        : new TimelineMax().from(el, 1, {
            autoAlpha: 0,
            y: 150,
            ease: Power1.easeInOut,
            onComplete() {
              done();
            }
          });
    }
  },
  mounted() {},
  data() {
    return {
      AddForm
    };
  },
  components: {
    AboutHero,
    AboutFocus,
    AboutQuote,
    AboutPrinciple,
    AboutWork
  },
  methods: {}
};
</script>

<style lang="scss" scoped></style>
