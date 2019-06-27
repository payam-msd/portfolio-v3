<template>
  <div>
    <header id="contact " class="contact">
      <div class="header__container">
        <div class="header__wrapper">
          <div class="text-box u-mt-large">
            <h1 class="contact__title">Contact <br /></h1>
            <div class="contact__pre-title">
              <span class="header__pre-title">—</span>
              let’s talk
            </div>
            <div class="text-wrapper u-mt-small">
              <p>
                I am currently available for selective opportunities. If you
                want to discuss a project or want to find out more about me or
                my work, get in touch!
              </p>
              <ul class="contact__ul-list">
                <li>
                  <span><b>Location</b></span
                  ><br />
                  <a href="">Mashhad,Iran</a>
                </li>
                <li>
                  <span><b>Email</b></span
                  ><br />
                  <a href="mailto:payammgh17@gmail.com"> contact@payam.com</a>
                </li>
                <li>
                  <span><b>Telephone</b></span
                  ><br />
                  <a href="tel:00989031901841"> +(98) 903 190 1841</a>
                </li>
              </ul>
              <ul class="contact__ul-list ">
                <h3>PDF downloads</h3>
                <li class="contact__list-item u-mt-small">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
                    <path
                      d="M33,14.1,16.44,30.52,0,14.1H9.39V0H23.5V14.1ZM0,35.26H33V40H0Z"
                    ></path></svg
                  ><a href="">Resume</a>
                </li>
                <li class="contact__list-item">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
                    <path
                      d="M33,14.1,16.44,30.52,0,14.1H9.39V0H23.5V14.1ZM0,35.26H33V40H0Z"
                    ></path></svg
                  ><a href="">Terms & Conditions</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="header__img-holder">
            <img src="" alt="" />
          </div>
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
    beforeEnter(el) {},
    enter(el, done) {
      this.$store.dispatch("toggle");
      const sidebar = document.querySelector(".sidebar"),
        SVGburger = document.querySelector(".burger"),
        tl = new TimelineMax({ onComplete: done });
      SVGburger.classList.toggle("active");
      tl.to(sidebar, 1.75, {
        x: el.offsetWidth,
        ease: Power4.easeInOut
      });
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
    return {};
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/pages/_contact.scss";
@import "~assets/scss/pages/_about.scss";
</style>
