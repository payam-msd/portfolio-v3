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
    duration: "500",
    css: false,
    beforeEnter(el) {
      const tl = new TimelineMax();
      tl.set(el, { opacity: 0.8 });
    },
    enter(el, done) {
      this.$store.dispatch("toggle");
      let sidebarW = document.querySelector(".sidebar").offsetWidth,
        sidebar = document.querySelector(".sidebar"),
        //   toggle = document.querySelector(".toggle"),
        tl = new TimelineMax();
      //     setTimeout(() => {
      //       document.body.classList = "show-scroll";
      //     }, 500);
      tl.to(el, 1.75, { opacity: 1 });
      tl.to(sidebar, 1.75, {
        x: sidebarW,
        ease: Power4.easeInOut
      });
      //   tl.to(toggle, 0.5, { rotation: 0, delay: 0.75 });
      //   tl.to(el, 0.75, { x: 50, autoAlpha: 1, opacity: 1 });
    },
    leave(el, done) {
      //   this.$store.dispatch("toggle");
      //   console.log("index leaved");
      let sidebarW = document.querySelector(".sidebar").offsetWidth,
        sidebar = document.querySelector(".sidebar"),
        //     toggle = document.querySelector(".toggle"),
        tl = new TimelineMax({ onComplete: done });
      tl.to(sidebar, 1.75, {
        x: sidebarW,
        ease: Power4.easeInOut
      });
      //   tl.to(toggle, 0.05, { rotation: 45, delay: 0.75 });
      // }
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
    open: function(open) {
      setTimeout(() => {
        open
          ? (document.body.classList = "hide-scroll")
          : (document.body.classList = "show-scroll");
      }, 1000);
    }
  }
};
</script>

<style lang="scss" scoped></style>
