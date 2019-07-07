<template>
  <div>
    <index-header />
  </div>
</template>

<script>
import { TimelineMax } from "gsap";
import { IndexAnim } from "~/mixins/IndexAnim";
import IndexHeader from "~/components/index/IndexHeader";

export default {
  mixins: [IndexAnim],
  transition: {
    name: "index",
    mode: "out-in",
    css: false,

    enter(el, done) {
      this.$store.dispatch("toggle");
      const SVGToggle = document.querySelector(".burger");
      SVGToggle.classList.toggle("active");
    }
  },
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
  computed: {},
  components: {
    IndexHeader
  },
  watch: {}
};
</script>

<style lang="scss" scoped>
.active {
  .top {
    stroke-dashoffset: -68px;
  }
  .bottom {
    stroke-dashoffset: -68px;
  }
  .middle {
    stroke-dashoffset: -68px;
  }
}
</style>
