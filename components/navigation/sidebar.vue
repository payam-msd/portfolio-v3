<template>
  <div :class="'sidebar'">
    <component :is="component" />
    <slot />
  </div>
</template>

<script>
import { TweenMax, Power4 } from "gsap";

export default {
  name: "sidebar",
  mounted() {
    TweenMax.set(this.$el, {
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
      const dX = open ? 0 : this.$el.offsetWidth;
      TweenMax.to(this.$el, 1.3, {
        x: dX,
        ease: Power4.easeOut
      });
    }
  }
};
</script>

<style lang="scss"></style>
