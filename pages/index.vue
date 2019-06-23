<template>
  <div>
    <index-header :mainText="text" />
  </div>
</template>

<script>
import { TweenMax, TimelineMax, Power4 } from "gsap";
import IndexHeader from "~/components/index/IndexHeader";

export default {
  transition: {
    name: "index",
    mode: "out-in",
    css: false,
    enter(el, done) {
      console.log("we are in");
      let tl = new TimelineMax();

      tl.to(el, 0.3, {
        ease: Power4.easeInOut,
        y: 100
      });
    },
    leave(el, done) {
      console.log("the leave log");
      let tl = new TimelineMax({ onComplete: done });
      tl.to(el, 0.75, {
        y: 0,
        opacity: 0.8
      });
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
    return {
      text:
        " Combining the fields of design and development, I understand the possibilities of the web. That’s how I create valuable marketing focused websites and shops with a strong user experience, aiming to get more online results."
    };
  },
  components: {
    IndexHeader
  }
};
</script>

<style lang="scss" scoped></style>
