<template>
  <div ref="sidebar" class="sidebar hideToggle">
    <component :is="component" />
    <slot />
  </div>
</template>

<script>
import { starterNavAnim, afterToggle } from "~/mixins/Navbar";
import { TimelineMax } from "gsap";
export default {
  name: "sidebar",
  mixins: [starterNavAnim, afterToggle],
  computed: {
    open() {
      return this.$store.state.sidebarOpen;
    },
    component() {
      return this.$store.state.contentComponent;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
