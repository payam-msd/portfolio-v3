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
            <p>{{ mainText }}</p>
            <p>
              I strive to make unique websites that look good and work even
              better.
            </p>
          </div>
          <div class="btn-holder u-mt-large">
            <nuxt-link to="/about">
              <a class="btn header__btn">More about me</a>
            </nuxt-link>
            <nuxt-link to="/work">
              <div class="btn header__btn">show me some work</div>
            </nuxt-link>
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
  props: ["mainText"],
  components: {
    MainSVG
  }
};
</script>

<style lang="scss" scoped></style>
