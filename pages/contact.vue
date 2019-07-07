<template>
  <div>
    <header id="contact " class="contact">
      <div class="header__container">
        <div class="header__wrapper">
          <div class="text-box u-mt-large">
            <div class="contact__title">
              <h1>
                Contact
                <br />
              </h1>
              <p class="contact__pre-title">
                <span class="header__pre-title">—</span>
                let’s talk
              </p>
            </div>
            <div class="text-wrapper u-mt-small">
              <p>
                I am currently available for selective opportunities. If you
                want to discuss a project or want to find out more about me or
                my work, get in touch!
              </p>
              <ul class="contact__ul-list">
                <li class="contact-ul-list__item">
                  <span>
                    <b>Location</b>
                  </span>
                  <br />
                  <a href>Mashhad,Iran</a>
                </li>
                <li class="contact-ul-list__item">
                  <span>
                    <b>Email</b>
                  </span>
                  <br />
                  <a href="mailto:payammgh17@gmail.com">contact@payam.com</a>
                </li>
                <li class="contact-ul-list__item">
                  <span>
                    <b>Telephone</b>
                  </span>
                  <br />
                  <a href="tel:00989031901841">+(98) 903 190 1841</a>
                </li>
              </ul>
              <ul class="contact__ul-list contact__ul-list2">
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
import { ContactAnim } from "~/mixins/ContactAnim";
export default {
  transition: {
    name: "contact",
    mode: "out-in",
    css: false,
    enter(el, done) {
      this.$store.dispatch("toggle");
      const SVGToggle = document.querySelector(".burger");
      SVGToggle.classList.toggle("active");
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
  mixins: [ContactAnim]
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/pages/_contact.scss";
@import "~assets/scss/pages/_about.scss";
</style>
