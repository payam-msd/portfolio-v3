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
