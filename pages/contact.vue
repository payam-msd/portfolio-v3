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
                <h3>PDF downloads</h3>
                <li ref="C2_li" class="contact__list-item u-mt-small">
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
        SVGToggle = document.querySelector(".burger"),
        C = document.querySelectorAll(".navbar__list, .Social"),
        tl = new TimelineMax();
      tl.staggerTo(
        ".navbar__list, .Social",
        0.75,
        {
          xPercent: -40,
          autoAlpha: 0,
          ease: Power2.easeIn,
          onComplete() {
            _vm.$store.dispatch("toggle");
            SVGToggle.classList.toggle("active");
            tl.set(".navbar__list, .Social", {
              xPercent: -40,
              autoAlpha: 0,
              delay: -0.5
            });
            done;
          }
        },
        0.1
      );
    }
  },
  mounted() {
    const { Htitle, Htitle_pre, Twrapper, C_li, C2_li } = this.$refs;

    this.$nextTick(function() {
      const H = [Htitle, Htitle_pre, Twrapper, C_li],
        B = [C2_li],
        tl = new TimelineMax();
      tl.set(H, { autoAlpha: 0, x: 130 });
      tl.set(B, { autoAlpha: 0, y: 50 });

      const config = {
        threshold: 0.5
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
              { autoAlpha: 1, delay: 0.2, x: 0, ease: Power2.easeOut },
              overlap
            );
            self.unobserve(entry.target);
          }
        });
      }, config);
      H.forEach(H => {
        observer.observe(H);
      });

      const config2 = {
        threshold: 0.5
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
              { autoAlpha: 1, delay: 0.1, y: 0, ease: Power2.easeOut },
              overlap
            );
            self.unobserve(entry.target);
          }
        });
      }, config2);
      B.forEach(B => {
        observer2.observe(B);
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
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/pages/_contact.scss";
@import "~assets/scss/pages/_about.scss";
</style>
