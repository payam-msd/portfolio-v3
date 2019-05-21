<template>
  <div class="content-container">
    <nav class="navbar">
      <ul class="navbar__list">
        <li class="navbar__title">Menu</li>
        <nuxt-link class="navbar__item" tag="li" to="/">
          <a nuxt-link-exact-active nuxt-link-active>Home</a>
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
        <nuxt-link class="navbar__item" to="/" tag="li">
          <a>Dastan Iran</a>
        </nuxt-link>
        <nuxt-link class="navbar__item" to="/" tag="li">
          <a>Sick Fit</a>
        </nuxt-link>
        <nuxt-link class="navbar__item" to="/" tag="li">
          <a>Glozzom</a>
        </nuxt-link>
      </ul>
      <ul class="social-media">
        <li class="twitter">
          <a href="https://twitter.com/payam_m_" rel="noopener" target="_blank">
            <img src="~assets/svgs/twitter.svg" />
          </a>
        </li>
        <li class="linkedin">
          <a
            href="https://www.linkedin.com/in/payam-m"
            rel="noopener"
            target="_blank"
          >
            <img src="~assets/svgs/linkedin.svg" />
          </a>
        </li>
        <li class="dribbble">
          <a href="https://dribbble.com/payam_m" rel="noopener" target="_blank">
            <img src="~assets/svgs/dribbble.svg" />
          </a>
        </li>
        <li class="telegram">
          <a href="https://t.me/payam_msd" rel="noopener" target="_blank">
            <img src="~assets/svgs/telegram.svg" />
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "add-form"
};
</script>

<style lang="scss" scoped>
.content-container {
  @include center(vertical);
  background: $blue-grey-900;
  left: 5.4rem;
  height: 86%;
  width: 110%;
  padding: 5rem;
}
.social-media {
  position: absolute;
  display: flex;
  top: 150%;
  justify-content: flex-start;
  list-style: none;
  transform: translateY(-150%);
  li {
    @include margin(4rem, 1.3rem, 1rem, 1.3rem);
    opacity: 0.6;
    width: 20px;
    align-self: baseline;

    a {
      display: block;
    }

    &:hover {
      opacity: 1;
    }
  }
}

.linkedin,
.telegram,
.instagram,
.dribbble {
  display: inline-block;
}
</style>
