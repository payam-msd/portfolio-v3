<template>
  <div class="content-container">
    <nav class="navbar">
      <h5 class="navbar__brand">menu</h5>
      <ul class="navbar__list">
        <nuxt-link tag="li" to="/" active-class="active" exact>
          <a class="navbar__item">Home</a>
        </nuxt-link>

        <nuxt-link tag="li" to="/about" active-class="active" exact>
          <a class="navbar__item">About</a>
        </nuxt-link>

        <nuxt-link tag="li" to="/contact" active-class="active" exact>
          <a class="navbar__item">Contact</a>
        </nuxt-link>
      </ul>
      <h5 class="navbar__brand">casses</h5>
      <ul class="navbar__list">
        <nuxt-link to="/" tag="li" active-class="active" exact>
          <a class="navbar__item">text</a>
        </nuxt-link>
        <nuxt-link to="/" tag="li" active-class="active" exact>
          <a class="navbar__item">text</a>
        </nuxt-link>
        <nuxt-link to="/" tag="li" active-class="active" exact>
          <a class="navbar__item">text</a>
        </nuxt-link>
        <nuxt-link to="/" tag="li" active-class="active" exact>
          <a class="navbar__item">text</a>
        </nuxt-link>
        <nuxt-link to="/" tag="li" active-class="active" exact>
          <a class="navbar__item">text</a>
        </nuxt-link>
        <nuxt-link to="/" tag="li" active-class="active" exact>
          <a class="navbar__item">text</a>
        </nuxt-link>
        <nuxt-link to="/" tag="li" active-class="active" exact>
          <a class="navbar__item">text</a>
        </nuxt-link>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "add-form"
};
</script>

<style lang="scss" scoped >
.content-container {
  @include center(vertical);
  background: $blue-grey-800;
  left: 5.5rem;
  height: 86%;
  width: 110%;
  padding: 8rem;
}
</style>

