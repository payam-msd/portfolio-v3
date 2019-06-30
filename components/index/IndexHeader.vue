<template>
  <div>
    <nuxt />
    <header id="index" class="index index__container">
      <div class="index__wrapper">
        <div class="text-box">
          <h1 class="heading-primary">
            <span>better design</span>
            <span>better results</span>
          </h1>
          <div class="text-wrapper u-mt-large">
            <p>
              Combining the fields of design and development, I understand the
              possibilities of the web. That’s how I create valuable marketing
              focused websites and shops with a strong user experience, aiming
              to get more online results.
            </p>
            <p>
              I strive to make unique websites that look good and work even
              better.
            </p>
          </div>
          <div class="btn-holder u-mt-large">
            <nuxt-link to="/about">
              <a class="btn header__btn">More about me</a>
            </nuxt-link>

            <div class="btn header__btn">show me some work</div>
          </div>
        </div>
        <div class="index__svg-holder">
          <MainSVG :class="'index__svg'" />
        </div>
      </div>
      <slot />
    </header>
  </div>
</template>

<script>
import MainSVG from "~/components/index/MainSVG";

export default {
  name: "IndexHeader",
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
    MainSVG
  },
  computed: {},
  methods: {}
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/pages/_index.scss";
</style>
