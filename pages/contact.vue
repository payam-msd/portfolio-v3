<template>
  <div>
    <contact-hero />
  </div>
</template>
<script>
import contactHero from "~/components/contact/contactHero";
import { TimelineMax } from "gsap";
export default {
  transition: {
    name: "contact",
    mode: "out-in",
    css: false,
    enter(el, done) {
      const _vm = this,
        tl = new TimelineMax({ delay: 0.3 });
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
            )
        : new TimelineMax().from(el, 1, {
            autoAlpha: 0,
            y: 150,
            ease: Power1.easeInOut
          });
    }
  },
  mounted() {
    this.$nextTick();
  },
  computed: {},
  components: {
    contactHero
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
  }
};
</script>

<style lang="scss" scoped>
</style>
