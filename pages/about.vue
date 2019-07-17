<template>
  <div>
    <about-header />
    <about-focus />
    <about-quote />
    <about-principle />
    <working-for :contentComponent="AddForm" />
  </div>
</template>

<script>
import { TimelineMax } from "gsap";
import AboutHeader from "~/components/about/AboutHeader";
import AboutFocus from "~/components/about/AboutFocus";
import AboutQuote from "~/components/about/AboutQuote";
import AboutPrinciple from "~/components/about/AboutPrinciple";
import WorkingFor from "~/components/about/WorkingFor";
import AddForm from "~/components/navigation/addForm";

export default {
  transition: {
    name: "about",
    mode: "out-in",
    css: false,

    enter(el, done) {
      const tl = new TimelineMax();
      setTimeout(() => {
        if (!!this.$store.state.sidebarOpen) this.$store.dispatch("toggle");
      }, 750);

      tl.staggerTo(
        ".navbar__list, .Social",
        1,
        {
          xPercent: -40,
          autoAlpha: 0,
          ease: Power2.easeIn,

          onComplete() {
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
    this.$nextTick(() => {
      const tl = new TimelineMax(),
        A = this.$el.querySelectorAll(
          ".heading-primary, .text-wrapper, .principle__title, .principle__content, .header__title"
        ),
        C = this.$el.querySelectorAll(".focus_ulList__item, .principle-list__item"),
        B = this.$el.querySelectorAll(
          ".btn-holder, .workingFor__title, .workingFor__text, .btn-wrapper"
        ),
        time = !!this.$store.state.sidebarOpen ? 1200 : 500;
      tl.set(A, { autoAlpha: 0, x: 100 })
        .set(C, { autoAlpha: 0, x: 50 })
        .set(B, { autoAlpha: 0, y: 85 });
      setTimeout(() => {
        const config = {
          threshold: 0.8
        };
        const observer = new IntersectionObserver(function(entries, self) {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              let overlap = "-=0.8";
              if (!tl.isActive()) overlap = "+=0";

              tl.to(
                entry.target,
                1,
                { autoAlpha: 1, x: 0, delay: 0.1, ease: Power2.easeOut },
                overlap
              );
              self.unobserve(entry.target);
            }
          });
        }, config);
        const config2 = {
          threshold: 1.0
        };
        const observer2 = new IntersectionObserver(function(entries, self) {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              let overlap = "-=0.5";
              if (!tl.isActive()) overlap = "+=0";

              tl.to(
                entry.target,
                1,
                { autoAlpha: 1, y: 0, ease: Power2.easeOut },
                overlap
              );
              self.unobserve(entry.target);
            }
          });
        }, config2);
        A.forEach(A => {
          observer.observe(A);
        });
        B.forEach(B => {
          observer2.observe(B);
        });
        C.forEach(C => {
          observer.observe(C);
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
    AboutHeader,
    AboutFocus,
    AboutQuote,
    AboutPrinciple,
    WorkingFor
  }
};
</script>

<style lang="scss" scoped></style>
