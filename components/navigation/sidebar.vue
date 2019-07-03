<template>
  <div ref="sidebar" class="sidebar toggler">
    <component :is="component" />
    <slot />
  </div>
</template>

<script>
import { TimelineMax } from "gsap";
export default {
  name: "sidebar",
  mounted() {
    TweenMax.set(this.$el, {
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
      return this.$store.state.contentComponent;
    }
  },
  watch: {
    open: function(open) {
      setTimeout(() => {
        open
          ? (document.documentElement.classList = "hide-scroll")
          : (document.documentElement.classList = "show-scroll");
      }, 800);
      let tl = new TimelineMax(),
        dX = open ? 0 : this.$el.offsetWidth;
      tl.to(this.$el, 1.25, {
        x: dX,
        ease: Power2.easeInOut
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
