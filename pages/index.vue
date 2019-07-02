<template>
  <div>
    <index-header />
  </div>
</template>

<script>
import { TimelineMax } from "gsap";
import { animation } from "~/mixins/PagesAnim";
import IndexHeader from "~/components/index/IndexHeader";

export default {
  mixins: [animation],
  transition: {
    name: "index",
    mode: "out-in",
    css: false,

    enter(el, done) {
      this.$store.dispatch("toggle");
      let tl = new TimelineMax({ onComplete: done }),
        SVGburger = document.querySelector(".burger");
      // elemets = document.querySelectorAll(
      //   ".heading-primary ,.text-wrapper ,.btn-holder"
      // );
      SVGburger.classList.toggle("active");
      //   tl.set(elemets, { opacity: 0, x: 150 });

      //   tl.staggerTo(elemets, 1, { x: 0, opacity: 1, ease: Power2.easeOut }, 0.2);
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
