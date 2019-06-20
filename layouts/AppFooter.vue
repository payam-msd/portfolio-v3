<template>
  <div>
    <nuxt />
    <div class="footer">
      <div class="footer__svg-holder">
        <TextSVG :class="'footer__svg'" />
      </div>
      <SocialMedia :class="'footer-social-media'" />
    </div>
  </div>
</template>

<script>
import TextSVG from "~/components/TextSVG";
import SocialMedia from "~/components/SocialMedia";
export default {
  name: "AppFooter",
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
  },
  components: {
    SocialMedia,
    TextSVG
  }
};
</script>

<style lang="scss" scoped>
.footer-social-media svg {
  fill: black !important;
}
</style>
