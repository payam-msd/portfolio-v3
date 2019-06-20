<template>
  <div class="over-container">
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
            @mouseover.native="hover1 = true"
          >
            <a>Dastan Iran</a>
          </nuxt-link>
          <nuxt-link
            class="navbar__item"
            to="/"
            tag="li"
            @mouseover.native="(hover2 = true), (hover1 = false)"
          >
            <a>Sick Fit</a>
          </nuxt-link>
          <nuxt-link
            class="navbar__item"
            to="/"
            tag="li"
            @mouseover.native="(hover3 = true), (hover2 = false)"
          >
            <a>Glozzom</a>
          </nuxt-link>
        </ul>
      </nav>

      <div class="case-holder" v-if="showImages">
        <div class="case-holder__hover">
          <nuxt-link to="/">
            <a>
              <img :src="`img/${img}`" />
            </a>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "add-form",
  data() {
    return {
      hover1: true,
      hover2: false,
      hover3: false,
      img: "",
      images: {
        img1: "Workspace 1_030.png",
        img2: "",
        img3: ""
      }
    };
  },
  computed: {
    showImages() {
      if (this.hover1 === true) {
        return (this.img = this.images.img1);
      } else if (this.hover2 === true) {
        return (this.img = this.images.img2);
      } else if (this.hover3 === true) {
        return (this.img = this.images.img3);
      }
    }
  },
  components: {}
};
</script>

<style lang="scss" scoped></style>
