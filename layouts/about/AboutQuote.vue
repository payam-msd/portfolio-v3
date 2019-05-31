<template>
  <div>
    <nuxt />

    <!-- quote section -->
    <section id="quote" class="quote">
      <div class="quote-holder b-padding-medium">
        <div class="quote-holder__content">
          <div class="quote-holder__content--text"></div>
        </div>
        <div class="quote-holder__bg u-mt-xlarge">
          <img class="quote-bg" src="~static/img/img3.jpg" alt="" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "AboutQoute",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped></style>
