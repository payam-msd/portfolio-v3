<template>
  <div class="root-container">
    <app-navigation />
    <nuxt />
    <app-footer />
  </div>
</template>

<script>
import AppNavigation from "~/components/AppNavigation";
import AppFooter from "~/components/AppFooter";

export default {
  components: {
    AppNavigation,
    AppFooter
  }
};
</script>

<style lang="scss">
@import "~assets/scss/base/_base.scss";
</style>
