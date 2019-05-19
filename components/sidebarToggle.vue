<template>
  <button :class="[open ? $style.active : '', $style.button]" @click="handleClick">
    <component :is="icon"/>
  </button>
</template>

<script>
export default {
  name: "sidebar-toggle",
  props: ["sidebarComponent", "icon"],
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

<style  lang="scss" module>
.button {
  padding: 0;
  height: 50px;
  width: 50px;
  border: 3px solid transparent;
  border-radius: 50%;
  background-color: transparent;
  color: $blue-900;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
  transition: transform 300ms ease-out, border-color 300ms ease-out;
}

.button:focus {
  outline: none;
  border-color: $blue-grey-500;
}
</style>
