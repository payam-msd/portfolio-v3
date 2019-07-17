<template>
  <div>
    <header id="contact " class="contact">
      <div class="header__container">
        <div class="header__wrapper">
          <div class="text-box u-mt-large">
            <div ref="Htitle" class="contact__title">
              <h1>
                Contact
                <br />
              </h1>
              <p ref="Htitle_pre" class="contact__pre-title">
                <span class="header__pre-title">—</span>
                let’s talk
              </p>
            </div>
            <div ref="Twrapper" class="text-wrapper u-mt-small">
              <p>
                I am currently available for selective opportunities. If you
                want to discuss a project or want to find out more about me or
                my work, get in touch!
              </p>
              <ul class="contact__ul-list">
                <li ref="C_li" class="contact-ul-list__item">
                  <span>
                    <b>Location</b>
                  </span>
                  <br />
                  <a href>Mashhad,Iran</a>
                </li>
                <li ref="C_li" class="contact-ul-list__item">
                  <span>
                    <b>Email</b>
                  </span>
                  <br />
                  <a href="mailto:payammgh17@gmail.com">contact@payam.com</a>
                </li>
                <li ref="C_li" class="contact-ul-list__item">
                  <span>
                    <b>Telephone</b>
                  </span>
                  <br />
                  <a href="tel:00989031901841">+(98) 903 190 1841</a>
                </li>
              </ul>
              <ul class="contact__ul-list">
                <h3 ref="Hprimary">PDF downloads</h3>
                <li ref="C2_li_2" class="contact__list-item u-mt-small">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
                    <path d="M33,14.1,16.44,30.52,0,14.1H9.39V0H23.5V14.1ZM0,35.26H33V40H0Z" />
                  </svg>
                  <a href>Resume</a>
                </li>
                <li ref="C2_li" class="contact__list-item">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
                    <path d="M33,14.1,16.44,30.52,0,14.1H9.39V0H23.5V14.1ZM0,35.26H33V40H0Z" />
                  </svg>
                  <a href>Terms & Conditions</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="header__img-holder"></div>
        </div>
      </div>
    </header>
  </div>
</template>
<script>
import { TimelineMax } from "gsap";
export default {
  transition: {
    name: "contact",
    mode: "out-in",
    css: false,
    enter(el, done) {
      const _vm = this,
        C = document.querySelectorAll(".navbar__list, .Social"),
        tl = new TimelineMax();
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
    this.$nextTick(function() {
      const {
          Htitle,
          Htitle_pre,
          Twrapper,
          C_li,
          C2_li,
          C2_li_2,
          Hprimary
        } = this.$refs,
        A = [Htitle, Htitle_pre, Twrapper, C_li],
        B = [C2_li, C2_li_2, Hprimary],
        time = !!this.$store.state.sidebarOpen ? 1200 : 500,
        tl = new TimelineMax();

      tl.set(A, { autoAlpha: 0, x: 130 }).set(B, { autoAlpha: 0, y: 80 });

      setTimeout(() => {
        const config = {
          threshold: 0.5
        };
        const observer = new IntersectionObserver(function(entries, self) {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              let overlap = "-=0.7";
              if (!tl.isActive()) overlap = "+=0";

              tl.to(
                entry.target,
                1,
                { autoAlpha: 1, x: 0, ease: Power2.easeOut },
                overlap
              );
              self.unobserve(entry.target);
            }
          });
        }, config);
        A.forEach(A => {
          observer.observe(A);
        });
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
        B.forEach(B => {
          observer2.observe(B);
        });
      }, time);
    });
  },
  computed: {},
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
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/pages/_contact.scss";
@import "~assets/scss/pages/_about.scss";
</style>
