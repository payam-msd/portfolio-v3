<template>
  <div>
    <header id="index" class="index index__container">
      <div class="index__wrapper">
        <div class="text-box">
          <h1 class="heading-primary">
            <span>better design</span>
            <br />
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

            <div class="btn header__btn" @click="handleNav">show me some work</div>
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
  mounted() {
    const time = !!this.$store.state.sidebarOpen ? 1500 : 0;
    setTimeout(() => {
      this.$nextTick(this.heroAnimation);
    }, time);
  },
  components: {
    MainSVG
  },
  methods: {
    handleNav() {
      this.$store.dispatch("toggleSidebar", {
        component: this.contentComponent
      });
    },
    heroAnimation() {
      const tl = new TimelineMax();
      tl.from("#index .text-box h1", 0.75, {
        x: 85,
        autoAlpha: 0,
        ease: Power2.easeOut
      })
        .from(
          "#index .text-wrapper p",
          0.75,
          {
            x: 85,
            autoAlpha: 0,
            ease: Power2.easeOut
          },
          "-=.6"
        )
        .from(
          "#index .btn-holder",
          0.75,
          {
            x: 85,
            autoAlpha: 0,
            ease: Power2.easeOut
          },
          "-=.7"
        );
    }
  },
  props: ["contentComponent"]
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/pages/_index.scss";
</style>
