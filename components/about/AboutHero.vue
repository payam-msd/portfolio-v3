<template>
  <div>
    <header id="about" class="about">
      <div class="header__container">
        <div class="text-box u-mt-large">
          <p class="header__title">
            <span class="header__title--pre">—</span>
            <span>{{headerData.name}}</span>
          </p>
          <div class="heading-primary">
            {{headerData.preTitle}}
            <br />
            {{headerData.title}}
          </div>
          <div class="text-wrapper u-mt-medium u-mb-medium">
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
          "I’m a creative professional from the iran, working inEindhoven as a freelance designer and as creative director forTallest. I work directly for clients or by partnering up with agencies.",
        suffix: "Find out more about my focus and experience."
      }
    };
  },
  mounted() {
    if (!!this.$store.state.sidebarOpen) this.$nextTick(this.heroAnimation);
  },
  methods: {
    heroAnimation() {
      const tl = new TimelineMax(),
        time = !!this.$store.state.sidebarOpen ? 1.25 : 0;
      TweenMax.delayedCall(time, () => {
        tl.staggerFrom(
          "#about .header__title, .text-box h1",
          1,
          {
            x: 85,
            autoAlpha: 0,
            ease: Power2.easeOut
          },
          0.2
        ).from(
          "#about .text-wrapper",
          1,
          {
            x: 80,
            autoAlpha: 0,
            ease: Power2.easeOut
          },
          "-=.7"
        );
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/pages/_about.scss";
</style>
