<template>
  <div>
    <Navigation />
    <div class="index index__container">
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
              <a class="btn index__btn">More about me</a>
            </nuxt-link>
            <nuxt-link to="/work">
              <div class="btn index__btn">show me some work</div>
            </nuxt-link>
          </div>
        </div>
        <div class="index__svg-holder">
          <mainSvg :class="'index-svg'" />
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import mainSvg from "~/layouts/mainSVG";
import textSVG from "~/layouts/textSVG";
import Navigation from "~/components/Navigation";
import Footer from "~/components/Footer";

export default {
  components: {
    mainSvg,
    textSVG,
    Navigation,
    Footer
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss"></style>
