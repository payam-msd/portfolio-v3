<template>
  <div class="footer">
    <div class="svg-holder">
      <TextSVG class="footer__svg" />
    </div>
    <social-media class="footer__media" />
  </div>
</template>

<script>
import TextSVG from "~/components/footer/TextSVG";
import socialMedia from "~/components/socialMedia/socialMedia";
export default {
  name: "AppFooter",
  mounted() {},
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
    socialMedia,
    TextSVG
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/layouts/_footer.scss";
</style>
