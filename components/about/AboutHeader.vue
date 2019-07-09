<template>
  <div>
    <nuxt />
    <header id="about" class="about">
      <div class="header__container">
        <div class="header__wrapper">
          <div class="text-box u-mt-large">
            <div ref="Htitle" class="header__title">
              <span class="header__pre-title">—</span>
              <span>I’m Payam Maghsodi</span>
            </div>
            <h1 ref="FHprimary" class="heading-primary u-mt-medium">
              Visual design &
              <br />Front-end professional
            </h1>
            <div ref="FTwrapper" class="text-wrapper u-mt-large">
              <p>
                I’m a creative professional from the iran, working in
                Eindhoven as a freelance designer and as creative director for
                Tallest. I work directly for clients or by partnering up with
                agencies.
              </p>
              <br />
              <span>Find out more about my focus and experience.</span>
            </div>
          </div>
          <div class="header__img-holder">
            <img src alt />
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

<style lang="scss" scoped>
@import "~assets/scss/pages/_about.scss";
</style>
