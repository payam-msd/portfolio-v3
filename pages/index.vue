<template>
  <div>
    <no-ssr>
      <index-header :contentComponent="AddForm" />
    </no-ssr>
  </div>
</template>

<script>
import { TimelineMax } from "gsap";
import AddForm from "~/components/navigation/addForm";
import IndexHeader from "~/components/index/IndexHero";

export default {
  transition: {
    name: "index",
    mode: "out-in",
    css: false,
    enter(el, done) {
      const _vm = this,
        tl = new TimelineMax({ delay: 0.3 });

      tl.add("socialOut")
        .to(".Social, .Social ul , .navbar__title", 1, {
          xPercent: -40,
          autoAlpha: 0,
          ease: Power2.easeOut,
          onComplete() {
            tl.delay(0.2);
            _vm.$store.dispatch("toggle");
            done;
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
  computed: {
    open(open) {
      return this.$store.state.sidebarOpen;
    }
  },
  components: {
    IndexHeader
  }
};
</script>

<style lang="scss" scoped>
</style>
