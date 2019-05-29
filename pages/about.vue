<template>
  <div>
    <app-navigation />
    <about-header />
    <about-focus />
    <about-quote />
  </div>
</template>

<script>
import AppNavigation from "~/layouts/AppNavigation";
import AboutHeader from "~/layouts/about/AboutHeader";
import AboutFocus from "~/layouts/about/AboutFocus";
import AboutQuote from "~/layouts/about/AboutQuote";
export default {
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
  components: {
    AppNavigation,
    AboutHeader,
    AboutFocus,
    AboutQuote
  }
};
</script>

<style lang="scss" scoped>
.heading-primary {
  max-width: initial;
}
</style>
