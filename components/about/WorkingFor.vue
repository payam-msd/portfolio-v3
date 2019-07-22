<template>
  <div id="work" class="work">
    <h1 class="work__title">Working For</h1>
    <br />
    <p class="work__text">
      I have worked on various amazing projects in a team or as a freelancer.
      These companies trusted in my expertise.
    </p>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <p class="work__text">
      I enjoyed every single working experience and I like to continue taking on
      new projects. Check out my previous projects or contact me to invite me
      for a next assignment.
    </p>
    <div class="btn-holder">
      <nuxt-link to="/contact">
        <a class="btn header__btn">contact information</a>
      </nuxt-link>
      <div class="btn header__btn" @click="handleNav">show some work</div>
    </div>
  </div>
</template>

<script>
import { TimelineMax, Ease } from "gsap";
export default {
  name: "workingFor",
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
    this.$nextTick(this.workAnim);
  },
  props: ["contentComponent"],
  methods: {
    handleNav() {
      this.$store.dispatch("toggleSidebar", {
        component: this.contentComponent
      });
    },
    workAnim() {
      const tl = new TimelineMax(),
        controller = new ScrollMagic.Controller();
      TweenLite.defaultEase = Power2.easeOut;
      tl.staggerFrom(
        "#work h1, .work__text,  .btn-holder",
        0.75,
        {
          y: 80,
          autoAlpha: 0
        },
        0.2,
        "-=.7"
      );
      new ScrollMagic.Scene({
        triggerElement: "#work",
        reverse: !1
      })
        .setTween(tl)
        .addTo(controller);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/components/about/_work.scss";
</style>
