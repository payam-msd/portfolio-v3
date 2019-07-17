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
        tl = new TimelineMax();
      tl.delay(0.2);

      tl.staggerTo(
        ".navbar__list, .Social",
        1,
        {
          xPercent: -40,
          autoAlpha: 0,
          ease: Power2.easeInOut,
          onComplete() {
            done;
            _vm.$store.dispatch("toggle");
            tl.set(".navbar__list, .Social", {
              xPercent: -40,
              autoAlpha: 0,
              delay: -0.5
            });
          }
        },
        0.2
      );
    }
  },
  mounted() {
    this.$nextTick(function() {
      const { Hprimary, Twrapper, btns } = this.$refs.indexH.$refs,
        tl = new TimelineMax(),
        time = !!this.$store.state.sidebarOpen ? 1200 : 500;
      tl.set([Hprimary, Twrapper, btns], { autoAlpha: 0, xPercent: 30 });

      setTimeout(() => {
        const config = {
          threshold: 1.0
        };
        const observer = new IntersectionObserver((entries, self) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              let overlap = "in-=.7";
              if (!tl.isActive()) overlap = "in+=0";

              tl.add("in").to(
                entry.target,
                1,
                {
                  autoAlpha: 1,
                  delay: 0.1,
                  xPercent: 0,
                  ease: Power2.easeOut
                },
                overlap
              );
              self.unobserve(entry.target);
            }
          });
        }, config);
        [Hprimary, Twrapper, btns].forEach(A => {
          observer.observe(A);
        });
      }, time);
    });
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
  components: {
    IndexHeader
  }
};
</script>

<style lang="scss" scoped>
</style>
