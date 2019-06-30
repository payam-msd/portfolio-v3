<template>
  <div>
    <index-header />
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
      this.$store.dispatch("toggle");
      let tl = new TimelineMax({ onComplete: done }),
        SVGburger = document.querySelector(".burger"),
        HP = document.querySelector(".heading-primary"),
        TW = document.querySelector(".text-wrapper"),
        BTN = document.querySelector(".btn-holder");

      SVGburger.classList.toggle("active");
      TweenMax.set(HP, { opacity: 0, x: 100 });
      TweenMax.set(TW, { opacity: 0, x: 100 });
      TweenMax.set(BTN, { opacity: 0, x: 100 });

      tl.to(HP, 0.45, { x: 0, opacity: 1, ease: Power1.easeOut }, "+=0.75")
        .to(TW, 0.45, { x: 0, opacity: 1, ease: Power1.easeOut }, "-=0.25")
        .to(
          BTN,
          0.45,
          {
            x: 0,
            opacity: 1,
            ease: Power1.easeOut
          },
          "-=0.15"
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
    return {};
  },
  computed: {
    open(open) {
      return this.$store.state.sidebarOpen;
    }
  },
  components: {
    IndexHeader
  },
  watch: {
    open(open) {
      setTimeout(() => {
        open
          ? (document.body.classList = "hide-scroll")
          : (document.body.classList = "show-scroll");
      }, 1000);
    }
  }
};
</script>

<style lang="scss" scoped>
.active {
  .top {
    stroke-dashoffset: -68px;
  }
  .bottom {
    stroke-dashoffset: -68px;
  }
  .middle {
    stroke-dashoffset: -68px;
  }
}
</style>
