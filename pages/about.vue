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
              <br />
              <br />
              Find out more about my focus and experience.
            </p>
          </div>
        </div>
      </div>
    </div>
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
