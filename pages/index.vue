<template>
  <div>
    <app-navigation />
    <index-header>
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
    return {};
  },
  components: {
    IndexHeader,
    AppNavigation,
    AppFooter
  }
};
</script>

<style lang="scss" scoped></style>
