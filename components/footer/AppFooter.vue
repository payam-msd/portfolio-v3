<template>
  <div class="footer">
    <div class="footer__svg-holder">
      <TextSVG :class="'footer__svg'" />
    </div>
    <social-media class="footerMedia" />
  </div>
</template>

<script>
import { FooterAnim } from "~/mixins/Footer";
import { TimelineMax } from "gsap";
import TextSVG from "~/components/footer/TextSVG";
import socialMedia from "~/components/socialMedia/socialMedia";
export default {
  mixins: [FooterAnim],
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
    socialMedia,
    TextSVG
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/layouts/_footer.scss";
</style>
