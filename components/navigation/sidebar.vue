<template>
  <div :class="'sidebar  toggler'">
    <component :is="component" />
    <slot />
  </div>
</template>

<script>
import { TimelineMax, Power4 } from "gsap";
export default {
  name: "sidebar",
  mounted() {
    let tl = new TimelineMax();
    tl.set(this.$el, {
      autoAlpha: 1,
      opacity: 1,
      x: this.$el.offsetWidth
    });
  },
  computed: {
    open() {
      return this.$store.state.sidebarOpen;
    },
    component() {
      return this.$store.state.sidebarComponent;
    }
  },
  watch: {
    open: function(open) {
      setTimeout(() => {
        open
          ? (document.body.classList = "hide-scroll")
          : (document.body.classList = "show-scroll");
      }, 800);
      let tl = new TimelineMax();
      const dX = open ? 0 : this.$el.offsetWidth;
      tl.to(this.$el, 1.25, {
        x: dX,
        ease: Power4.easeInOut
      });
    }
  },
  props: [""]
};
</script>

<style lang="scss" scoped></style>
