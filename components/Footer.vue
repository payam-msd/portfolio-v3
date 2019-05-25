<template>
  <div>
    <div class="footer">
      <div class="footer__svg-holder">
        <textSVG :class="'footer__svg'" />
      </div>
      <SocialMedia />
    </div>
  </div>
</template>

<script>
import textSVG from "~/layouts/textSVG";
import SocialMedia from "~/components/SocialMedia";
export default {
  name: "AppFooter",
  components: {
    textSVG,
    SocialMedia
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

<style lang="scss"></style>
