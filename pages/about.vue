<template>
  <div class="root-container">
    <app-navigation />
    <about-header />
    <about-focus />
    <about-quote />
    <about-principle />
    <working-for />
    <app-footer />
  </div>
</template>

<script>
import AppNavigation from "~/layouts/AppNavigation";
import AboutHeader from "~/layouts/about/AboutHeader";
import AboutFocus from "~/layouts/about/AboutFocus";
import AboutQuote from "~/layouts/about/AboutQuote";
import AboutPrinciple from "~/layouts/about/AboutPrinciple";
import WorkingFor from "~/components/WorkingFor";
import AppFooter from "~/layouts/AppFooter";
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
    AboutQuote,
    AboutPrinciple,
    WorkingFor,
    AppFooter
  }
};
</script>

<style lang="scss" scoped></style>
