<template>
  <div>
    <header id="index" class="index index__container">
      <div class="index__wrapper">
        <div class="text-box">
          <h1 class="heading-primary">
            <span>{{ title}}</span>
            <br />
            <span>{{titleSuf}}</span>
          </h1>
          <div class="text-wrapper u-mt-large">
            <p>{{content}}</p>
            <p>{{contentSuf}}</p>
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
      title: "better design",
      titleSuf: "better results",
      content:
        "Combining the fields of design and development, I understand thepossibilities of the web. That’s how I create valuable marketingfocused websites and shops with a strong user experience, aimingto get more online results.",
      contentSuf:
        "I strive to make unique websites that look good and work evenbetter."
    };
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
