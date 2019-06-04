<template>
  <div class="content-container">
    <nav class="navbar">
      <ul class="navbar__list">
        <li class="navbar__title">Menu</li>
        <nuxt-link
          class="navbar__item"
          tag="li"
          to="/"
          nuxt-link-exact-active
          nuxt-link-active
        >
          <a>Home</a>
        </nuxt-link>
        <nuxt-link class="navbar__item" tag="li" to="/about">
          <a nuxt-link-active>About</a>
        </nuxt-link>
        <nuxt-link class="navbar__item" tag="li" to="/contact">
          <a nuxt-link-active>Contact</a>
        </nuxt-link>
      </ul>
      <ul class="navbar__list">
        <li class="navbar__title">Cases</li>
        <nuxt-link
          class="navbar__item"
          to="/"
          tag="li"
          @mouseover.native="(img = img1), (hover = true)"
          @mouseout.native="(img = img1), (hover = true)"
        >
          <a>Dastan Iran</a>
        </nuxt-link>
        <nuxt-link
          class="navbar__item"
          to="/"
          tag="li"
          @mouseover.native="(img = img2), (hover = true)"
          @mouseout.native="(img = img2), (hover = true)"
        >
          <a>Sick Fit</a>
        </nuxt-link>
        <nuxt-link
          class="navbar__item"
          to="/"
          tag="li"
          @mouseover.native="(img = img3), (hover = true)"
          @mouseout.native="(img = img3), (hover = true)"
        >
          <a>Glozzom</a>
        </nuxt-link>
      </ul>
    </nav>

    <div class="case-holder">
      <div class="case-holder__hover">
        <nuxt-link to="/">
          <a>
            <img
              v-if="hover === false ? (img = img1) : (img = img)"
              :src="`img/${img}`"
            />
          </a>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "add-form",
  data() {
    return {
      hover: false,
      img: "",
      img1: "img1.jpg",
      img2: "img2.jpg",
      img3: "img3.jpg"
    };
  },
  components: {}
};
</script>

<style lang="scss" scoped></style>
