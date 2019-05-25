<template>
  <a :class="[open ? $style.butt : '', $style.butt]" @click="handleClick">
    <component :is="icon" />
  </a>
</template>

<script>
export default {
  name: "sidebar-toggle",
  props: ["sidebarComponent", "icon"],
  head() {
    return {
      title: "toggler",
      meta: [
        {
          hid: "desc",
          name: "desc",
          content: "this is a desc"
        }
      ]
    };
  },
  computed: {
    open() {
      return (
        this.$store.state.sidebarOpen &&
        this.$store.state.sidebarComponent === this.sidebarComponent
      );
    }
  },
  methods: {
    handleClick() {
      this.$store.dispatch("toggleSidebar", {
        component: this.sidebarComponent
      });
    }
  }
};
</script>

<style lang="scss" module>
.butt {
  cursor: pointer;
  display: flex;
  height: 5.2rem;
  width: 5.2rem;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  transition: transform 300ms ease-out;
  background-color: $blue-050;

  &::before {
    content: "";
    position: absolute;
    top: 0rem;
    right: 0rem;
    width: 100%;
    height: 100%;
    border: 1.5px solid $blue-800;
    border-radius: 50%;
    @include animation(
      "pulse-ring 1.25s cubic-bezier(0.455, 0.03, 0.515, 0.955) -20s infinite"
    );
    visibility: visible;
  }
}
@include keyframes(pulse-ring) {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  40% {
    opacity: 0;
  }
  60% {
    opacity: 0.8;
  }
  100% {
    opacity: 0;
    transform: scale(1.4);
  }
}
</style>
