<template>
  <div>
    <index-header :mainText="text">
      <app-navigation />
      <app-footer />
    </index-header>
  </div>
</template>

<script>
import IndexHeader from "~/layouts/index/IndexHeader";
import AppNavigation from "~/layouts/AppNavigation";
import AppFooter from "~/layouts/AppFooter";

export default {
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
    return {
      text:
        " Combining the fields of design and development, I understand the possibilities of the web. That’s how I create valuable marketing focused websites and shops with a strong user experience, aiming to get more online results."
    };
  },
  components: {
    IndexHeader,
    AppNavigation,
    AppFooter
  }
};
</script>

<style lang="scss" scoped></style>
