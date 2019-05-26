<template>
  <div>
    <Navigation />
    <div class="about about__container">
      <div class="about__wrapper">
        <div class="text-box u-mt-large">
          <span class="about__pre-title">—</span>
          <span class="about__title">
            I’m Payam Maghsodi
          </span>
          <h1 class="heading-primary u-mt-medium">
            Visual design &
            <br />
            Front-end professional
          </h1>
          <div class="text-wrapper u-mt-large">
            <p>
              I’m a creative professional from the Netherlands, working in
              Eindhoven as a freelance designer and as creative director for
              Tallest. I work directly for clients or by partnering up with
              agencies.
            </p>
            <br />
            <span>
              Find out more about my focus and experience.
            </span>
          </div>
        </div>
        <div class="about__img-holder">
          <img src="~static/img/img2.jpg" alt="" />
        </div>
      </div>
    </div>

    <section class="focus b-padding-large">
      <div class="u-mt-medium">
        <h1 class="heading-primary">Focus</h1>
        <div class="text-wrapper">
          <p class="focus__content u-mt-small">
            I create unique products by combining design and development, while
            keeping my focus. I specialize in these fields:
          </p>
        </div>
      </div>
      <div class="focus__list u-mt-large">
        <ul class="ul-list">
          <li class="ul-list__item">
            <h3 class="ul-list__title">
              <span class="about__pre-title">—</span>
              User experience
            </h3>
            <p class="focus__text">
              I integrate design, usability and function to deliver results that
              provide a relevant and meaningful experience to users.
            </p>
          </li>
          <li class="ul-list__item">
            <h3 class="ul-list__title">
              <span class="about__pre-title">—</span>
              Visual design
            </h3>
            <p class="focus__text">
              It’s all about the perfect first impression. Designing the
              ultimate user experience is what will make your website stand out.
            </p>
          </li>
          <li class="ul-list__item">
            <h3 class="ul-list__title">
              <span class="about__pre-title">—</span>
              Development
            </h3>
            <p class="focus__text">
              The design comes to life through interaction and animation in an
              exceptional front-end development for every device.
            </p>
          </li>
          <li class="ul-list__item">
            <h3 class="ul-list__title">
              <span class="about__pre-title">—</span>
              Visual identity
            </h3>
            <p class="focus__text">
              I give brands their very own visual identity with a unique and
              modern branding. It’s all about communication.
            </p>
          </li>
          <li class="ul-list__item">
            <h3 class="ul-list__title">
              <span class="about__pre-title">—</span>
              Interaction
            </h3>
            <p class="focus__text">
              By utilizing the possibilities of the web, I design interactive
              websites that help users achieve their online goals.
            </p>
          </li>
          <li class="ul-list__item">
            <h3 class="ul-list__title">
              <span class="about__pre-title">—</span>
              E-commerce
            </h3>
            <p class="focus__text">
              My web shop designs offer users a flawless online shopping
              experience, giving companies the best business results.
            </p>
          </li>
        </ul>
        <div class="svg-holder">
          <div class="feather-svg"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Navigation from "~/components/Navigation";
export default {
  head() {
    return {
      meta: [{}]
    };
  },
  components: {
    Navigation
  }
};
</script>

<style lang="scss" scoped>
.heading-primary {
  max-width: initial;
}
</style>
