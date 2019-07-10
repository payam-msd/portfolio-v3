<template>
  <div>
    <about-header />
    <about-focus />
    <about-quote />
    <about-principle />
    <working-for />
  </div>
</template>

<script>
import { TimelineMax } from "gsap";
import AboutHeader from "~/components/about/AboutHeader";
import AboutFocus from "~/components/about/AboutFocus";
import AboutQuote from "~/components/about/AboutQuote";
import AboutPrinciple from "~/components/about/AboutPrinciple";
import WorkingFor from "~/components/about/WorkingFor";

export default {
  transition: {
    name: "about",
    mode: "out-in",
    css: false,
    enter(el, done) {
      const _vm = this,
        SVGToggle = document.querySelector(".burger"),
        C = document.querySelectorAll(".navbar__list, .Social"),
        tl = new TimelineMax();
      tl.staggerTo(".navbar__list, .Social", 0.75, {
        xPercent: -40,
        autoAlpha: 0,
        ease: Power2.easeIn,
        onComplete() {
          _vm.$store.dispatch("toggle");
          SVGToggle.classList.toggle("active");
          tl.set(
            ".navbar__list, .Social",
            {
              xPercent: -40,
              autoAlpha: 0,
              delay: -0.5
            },
            0.1
          );
          done;
        }
      });
    }
  },
  mounted() {
    this.$nextTick(() => {
      const tl = new TimelineMax(),
        A = this.$el.querySelectorAll(
          ".heading-primary, .text-wrapper, .principle__title, .principle__content, .header__title"
        ),
        H = this.$el.querySelectorAll(".ul-list__item, .principle-list__item"),
        B = this.$el.querySelectorAll(
          ".btn-holder, .workingFor__title, .workingFor__text, .btn-wrapper"
        );
      tl.set(A, { autoAlpha: 0, x: 100 });
      tl.set(H, { autoAlpha: 0, x: 50 });
      tl.set(B, { autoAlpha: 0, y: 85 });

      const config = {
        threshold: 0
      };
      let observer = new IntersectionObserver(function(entries, self) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            let overlap = "-=0.7";
            if (!tl.isActive()) {
              overlap = "+=0";
            }
            tl.to(
              entry.target,
              0.75,
              { autoAlpha: 1, x: 0, delay: 0.1, ease: Power2.easeOut },
              overlap
            );
            self.unobserve(entry.target);
          }
        });
      }, config);

      const config2 = {
        threshold: 0.8
      };
      let observer2 = new IntersectionObserver(function(entries, self) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            let overlap = "-=0.7";
            if (!tl.isActive()) {
              overlap = "+=0";
            }
            tl.to(
              entry.target,
              0.75,
              { autoAlpha: 1, y: 0, ease: Power2.easeOut },
              overlap
            );
            self.unobserve(entry.target);
          }
        });
      }, config2);

      B.forEach(B => {
        observer2.observe(B);
      });

      H.forEach(H => {
        observer.observe(H);
      });

      A.forEach(A => {
        observer.observe(A);
      });
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
  components: {
    AboutHeader,
    AboutFocus,
    AboutQuote,
    AboutPrinciple,
    WorkingFor
  }
};
</script>

<style lang="scss" scoped></style>
