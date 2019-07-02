<template>
  <div>
    <header id="contact " class="contact">
      <div class="header__container">
        <div class="header__wrapper">
          <div class="text-box u-mt-large">
            <h1 class="contact__title">
              Contact
              <br />
            </h1>
            <p class="contact__pre-title">
              <span class="header__pre-title">—</span>
              let’s talk
            </p>
            <div class="text-wrapper u-mt-small">
              <p>
                I am currently available for selective opportunities. If you
                want to discuss a project or want to find out more about me or
                my work, get in touch!
              </p>
              <ul class="contact__ul-list">
                <li>
                  <span>
                    <b>Location</b>
                  </span>
                  <br />
                  <a href>Mashhad,Iran</a>
                </li>
                <li>
                  <span>
                    <b>Email</b>
                  </span>
                  <br />
                  <a href="mailto:payammgh17@gmail.com">contact@payam.com</a>
                </li>
                <li>
                  <span>
                    <b>Telephone</b>
                  </span>
                  <br />
                  <a href="tel:00989031901841">+(98) 903 190 1841</a>
                </li>
              </ul>
              <ul class="contact__ul-list">
                <h3>PDF downloads</h3>
                <li class="contact__list-item u-mt-small">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
                    <path d="M33,14.1,16.44,30.52,0,14.1H9.39V0H23.5V14.1ZM0,35.26H33V40H0Z" />
                  </svg>
                  <a href>Resume</a>
                </li>
                <li class="contact__list-item">
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
import { animation } from "~/mixins/PagesAnim";
export default {
  transition: {
    name: "contact",
    mode: "out-in",
    css: false,
    enter(el, done) {
      this.$store.dispatch("toggle");
      const SVGburger = document.querySelector(".burger"),
        tl = new TimelineMax({ onComplete: done });
      SVGburger.classList.toggle("active");
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
  mixins: [animation]
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/pages/_contact.scss";
@import "~assets/scss/pages/_about.scss";
</style>
