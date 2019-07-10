<template>
  <div>
    <index-header ref="indexH" />
  </div>
</template>

<script>
import { TimelineMax } from "gsap";
import IndexHeader from "~/components/index/IndexHeader";

export default {
  transition: {
    name: "index",
    mode: "out-in",
    css: false,
    enter(el, done) {
      const _vm = this,
        SVGToggle = document.querySelector(".burger"),
        tl = new TimelineMax();
      tl.staggerTo(
        ".navbar__list, .Social",
        0.75,
        {
          xPercent: -40,
          autoAlpha: 0,
          ease: Power2.easeIn,
          onComplete() {
            _vm.$store.dispatch("toggle");
            SVGToggle.classList.toggle("active");
            tl.set(".navbar__list, .Social", {
              xPercent: -40,
              autoAlpha: 0,
              delay: -0.5
            });
            done;
          }
        },
        0.1
      );
    }
  },
  mounted() {
    this.$nextTick(function() {
      const { HP, Twrapper, btns } = this.$refs.indexH.$refs,
        tl = new TimelineMax(),
        H = [HP, Twrapper, btns];
      tl.set(H, { autoAlpha: 0, x: 130 });

      const config = {
        threshold: 1
      };
      let observer = new IntersectionObserver((entries, self) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            let overlap = "in-=.7";
            if (!tl.isActive()) {
              overlap = "in+=0";
            }
            tl.add("in").to(
              entry.target,
              0.75,
              {
                autoAlpha: 1,
                delay: 0.2,
                x: 0,
                ease: Power2.easeOut
              },
              overlap
            );
            self.unobserve(entry.target);
          }
        });
      }, config);
      H.forEach(H => {
        observer.observe(H);
      });
    });
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
    return {};
  },
  computed: {},
  components: {
    IndexHeader
  },
  watch: {}
};
</script>

<style lang="scss" scoped>
</style>
