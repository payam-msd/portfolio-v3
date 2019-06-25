<template>
  <div>
    <about-header />
    <about-focus />
    <about-quote />
    <about-principle />
    <working-for />
  </div>
</template>

<script>
import { TimelineMax } from "gsap";
import AboutHeader from "~/components/about/AboutHeader";
import AboutFocus from "~/components/about/AboutFocus";
import AboutQuote from "~/components/about/AboutQuote";
import AboutPrinciple from "~/components/about/AboutPrinciple";
import WorkingFor from "~/components/about/WorkingFor";

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
  components: {
    AboutHeader,
    AboutFocus,
    AboutQuote,
    AboutPrinciple,
    WorkingFor
  }
};
</script>

<style lang="scss" scoped></style>
