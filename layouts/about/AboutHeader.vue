<template>
  <div>
    <nuxt />
    <header id="about" class="about">
      <div class="header__container">
        <div class="header__wrapper">
          <div class="text-box u-mt-large">
            <span class="header__pre-title">—</span>
            <span class="header__title">
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
          <div class="header__img-holder">
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "AboutHeader",
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

<style lang="scss" scoped></style>
