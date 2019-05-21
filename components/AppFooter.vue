<template>
  <div>
    <div class="footer">
      <div class="text-svg-holder">
        <textSVG :class="'text-svg'"/>
      </div>
      <ul class="social-media">
        <li class="twitter">
          <a href="https://twitter.com/payam_m_" rel="noopener" target="_blank">
            <img src="~assets/svgs/twitter.svg">
          </a>
        </li>
        <li class="linkedin">
          <a href="https://www.linkedin.com/in/payam-m" rel="noopener" target="_blank">
            <img src="~assets/svgs/linkedin.svg">
          </a>
        </li>
        <li class="dribbble">
          <a href="https://dribbble.com/payam_m" rel="noopener" target="_blank">
            <img src="~assets/svgs/dribbble.svg">
          </a>
        </li>
        <li class="telegram">
          <a href="https://t.me/payam_msd" rel="noopener" target="_blank">
            <img src="~assets/svgs/telegram.svg">
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import textSVG from "~/layouts/textSVG";
export default {
  name: "AppFooter",
  components: {
    textSVG
  },
  head() {
    return {
      title: "toggler",
      meta: [
        {
          hid: "desc",
          name: "desc",
          content: "this is a desc"
        }
      ]
    };
  }
};
</script>

<style  lang="scss">
</style>
