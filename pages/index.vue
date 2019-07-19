<template>
  <div>
    <no-ssr>
      <index-header :contentComponent="AddForm" ref="indexH" />
    </no-ssr>
  </div>
</template>

<script>
import { TimelineMax } from "gsap";
import AddForm from "~/components/navigation/addForm";
import IndexHeader from "~/components/index/IndexHeader";

export default {
  transition: {
    name: "index",
    mode: "out-in",
    css: false,
    enter(el, done) {
      const _vm = this,
        tl = new TimelineMax({ delay: 0.3 });

      tl.staggerTo(
        ".navbar__list, .Social",
        1,
        {
          xPercent: -50,
          autoAlpha: 0,
          ease: Power2.easeInOut,

          onComplete() {
            const tl2 = new TimelineMax({ delay: 1.25 }),
              controller = new ScrollMagic.Controller();

            tl2.staggerFrom(
              ".heading-primary, .text-wrapper, .btn-holder",
              0.75,
              { x: 85, autoAlpha: 0, ease: Power2.easeOut },
              0.2,
              "-="
            );

            new ScrollMagic.Scene({
              triggerElement: ".heading-primary"
            })
              .setTween(tl)
              .addTo(controller);

            _vm.$store.dispatch("toggle");
            done;

            tl.set(".navbar__list, .Social", {
              xPercent: -40,
              autoAlpha: 0,
              delay: -0.5
            });
          }
        },
        0.2,
        "-="
      );
    }
  },

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
      AddForm
    };
  },
  methods: {},
  components: {
    IndexHeader
  }
};
</script>

<style lang="scss" scoped>
</style>
