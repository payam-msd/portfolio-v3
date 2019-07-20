<template>
  <div ref="sidebar" class="sidebar hideToggle">
    <component :is="component" />
    <slot />
  </div>
</template>

<script>
import { TimelineMax } from "gsap";
export default {
  name: "sidebar",
  mounted() {
    this.$nextTick(() => {
      const tl = new TimelineMax();
      tl.set(this.$el, {
        autoAlpha: 1,
        x: this.$el.offsetWidth
      });
    });
  },
  computed: {
    open() {
      return this.$store.state.sidebarOpen;
    },
    component() {
      return this.$store.state.contentComponent;
    }
  },
  methods: {
    blendEases(startEase, endEase, blender) {
      blender = blender || Power4.easeInOut;
      return new Ease(v => {
        var b = blender.getRatio(v);
        return startEase.getRatio(v) * (1 - b) + endEase.getRatio(v) * b;
      });
    },
    afterToggle_anim() {
      const tl = new TimelineMax();
      tl.add("navIn")
        .staggerTo(
          ".navbar__list",
          0.75,
          {
            xPercent: 0,
            autoAlpha: 1,
            ease: Power1.easeOut
          },
          0.1
        )
        .staggerTo(
          ".Social, .socialMedia ul  , .navbar__title",
          0.75,
          {
            xPercent: 0,
            autoAlpha: 1,
            ease: Power2.easeOut
          },
          0.2,
          "navIn+=.1"
        )
        .staggerTo(
          ".case-holder__img , .case-holder div , .case-holder span",
          1.25,
          {
            xPercent: 0,
            autoAlpha: 1,
            delay: -0.1,
            ease: Power2.easeOut
          },
          0.1,
          "navIn-=.1"
        );

      return tl;
    }
  },
  watch: {
    open(open) {
      const tl = new TimelineMax(),
        _vm = this,
        dX = open ? 0 : this.$el.offsetWidth;

      if (!!open) {
        tl.set(".navbar__list  , .Social ul ", {
          xPercent: -40,
          autoAlpha: 0
        }).set(".case-holder__img  , .case-holder div , .case-holder span", {
          xPercent: 40,
          autoAlpha: 0
        });
      }

      tl.to(this.$el, 1.25, {
        x: dX,
        ease: this.blendEases(Power1.easeIn, Power3.easeOut, false),
        onComplete() {
          if (!!open) {
            _vm.afterToggle_anim();
          }
        }
      });
      TweenMax.delayedCall(0.8, () => {
        open
          ? document.documentElement.classList.add("hide-scroll")
          : document.documentElement.classList.remove("hide-scroll");
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
