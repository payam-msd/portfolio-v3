<template>
  <div class="footer">
    <div class="footer__svg-holder">
      <TextSVG :class="'footer__svg'" />
    </div>
    <social-media />
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
@import "~assets/scss/layouts/_footer.scss";
</style>
