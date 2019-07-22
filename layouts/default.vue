<template>
  <div class="root-container">
    <app-navigation />
    <nuxt />
    <app-footer />
  </div>
</template>

<script>
import AppNavigation from "~/components/navigation/AppNavigation";
import AppFooter from "~/components/footer/AppFooter";

export default {
  mounted() {},
  components: {
    AppNavigation,
    AppFooter
  }
};
</script>

<style lang="scss">
@import "~assets/scss/base/_base.scss";
</style>
