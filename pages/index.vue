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
      this.$store.dispatch("toggle");
      let SVGburger = document.querySelector(".burger"),
        sidebar = document.querySelector(".sidebar");
      SVGburger.classList.toggle("active");
      let tl = new TimelineMax();
      tl.to(sidebar, 1.75, {
        x: el.offsetWidth,
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
