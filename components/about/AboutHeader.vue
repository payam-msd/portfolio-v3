<template>
  <div>
    <header id="about" class="about">
      <div class="header__container">
        <div class="text-box u-mt-large">
          <div class="header__title">
            <span class="header__title--pre">—</span>
            <span>{{headerData.name}}</span>
          </div>
          <h1 class="heading-primary u-mt-small">
            {{headerData.preTitle}}
            <br />
            {{headerData.title}}
          </h1>
          <div class="text-wrapper u-mt-large">
            <p>{{headerData.content}}</p>
            <br />
            <span>{{headerData.suffix}}</span>
          </div>
        </div>
        <div class="header__img-holder"></div>
      </div>
    </header>
  </div>
</template>

<script>
import { TimelineMax } from "gsap";
export default {
  name: "AboutHeader",
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
    return {
      headerData: {
        name: "I’m Payam Maghsodi",
        preTitle: "Visual design &",
        title: "Front-end professional",
        content:
          "I’m a creative professional from the iran, working inEindhoven as a freelance designer and as creative director forTallest. I work directly for clients or by partnering up withagencies.",
        suffix: "Find out more about my focus and experience."
      }
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/pages/_about.scss";
</style>
