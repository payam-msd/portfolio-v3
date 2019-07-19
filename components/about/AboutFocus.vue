<template>
  <div class="b-padding-medium">
    <section id="focus" class="focus">
      <div class="u-mt-medium">
        <h2 class="heading-primary">{{header.title}}</h2>
        <div class="text-wrapper u-mt-small">
          <p class="focus__content">{{header.content}}</p>
        </div>
      </div>
      <ul class="ul-list u-mt-large">
        <li class="ul-list__item" v-for="item in listData" :key="item.id">
          <h3 class="ul-list__title">
            <span class="ul-list__title--pre">—</span>
            {{item.title}}
          </h3>
          <p class="ul-list__text">{{item.content}}</p>
        </li>
      </ul>
      <div class="feather-holder" id="feather-trigger">
        <div class="feather" id="feather">
          <div class="feather-reflection" id="feather-reflection"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { TimelineMax } from "gsap";

export default {
  name: "AboutFocus",
  data() {
    return {
      header: {
        title: "Focus",
        content:
          "I create unique products by combining design and development, whilekeeping my focus. I specialize in these fields"
      },
      listData: [
        {
          id: 1,
          title: "User experience",
          content:
            "I integrate design, usability and function to deliver results that provide a relevant and meaningful experience to users."
        },
        {
          id: 2,
          title: "Visual design",
          content:
            "It’s all about the perfect first impression. Designing the ultimate user experience is what will make your website stand out."
        },
        {
          id: 3,
          title: "Development",
          content:
            "The design comes to life through interaction and animation in an exceptional front-end development for every device."
        },
        {
          id: 4,
          title: "Visual identity",
          content:
            "I give brands their very own visual identity with a unique and modern branding. It’s all about communication."
        },
        {
          id: 5,
          title: "Interaction",
          content:
            "By utilizing the possibilities of the web, I design interactive websites that help users achieve their online goals."
        },
        {
          id: 6,
          title: "E-commerce",
          content:
            "My web shop designs offer users a flawless online shopping experience, giving companies the best business results."
        }
      ]
    };
  },
  mounted() {
    this.$nextTick(this.animation);
    this.$nextTick(this.animationList);
    this.$nextTick(this.animationFeather);
  },
  methods: {
    animation() {
      var tl = new TimelineMax(),
        controller = new ScrollMagic.Controller(),
        t = document.querySelector("#focus");
      tl.from(["#focus .focus__content .heading-primary"], 0.75, {
        x: 75,
        autoAlpha: 0,
        delay: -0.5,
        ease: Power2.easeOut
      }).staggerFrom(
        "#focus .focus__content p",
        0.75,
        {
          x: 75,
          autoAlpha: 0,
          ease: Power2.easeOut
        },
        0.1,
        "-=0.7"
      );
      new ScrollMagic.Scene({
        triggerElement: t,
        reverse: !1
      })
        .setTween(tl)
        .addTo(controller);
    },
    animationList() {
      var tl = new TimelineMax(),
        controller = new ScrollMagic.Controller(),
        t = document.querySelector("#focus .ul-list");
      tl.staggerFrom(
        "#focus .ul-list li h3",
        0.75,
        {
          x: 75,
          autoAlpha: 0,
          ease: Power2.easeOut
        },
        0.1
      ).staggerFrom(
        "#focus .ul-list li p",
        0.75,
        {
          x: 75,
          autoAlpha: 0,
          ease: Power2.easeOut
        },
        0.1,
        "-=1.2"
      );
      new ScrollMagic.Scene({
        triggerElement: t,
        offset: -200,
        reverse: !1
      })
        .setTween(tl)
        .addTo(controller);
    },
    animationFeather() {
      var tl = new TimelineMax(),
        controller = new ScrollMagic.Controller(),
        t = document.querySelector("#feather-trigger");
      tl.from("#feather", 1, {
        autoAlpha: 0,
        ease: Power1.easeInout
      })
        .to("#feather", 1.5, {
          x: 150,
          y: 80,
          rotation: -40,
          delay: -1.25,
          ease: Power1.easeInout
        })
        .to("#feather", 2, {
          x: -100,
          y: 120,
          rotation: 30,
          delay: -1.25,
          ease: Power1.easeInout
        })
        .to("#feather", 1.5, {
          x: 50,
          y: 140,
          rotation: -20,
          delay: -1,
          ease: Power1.easeInout
        })
        .to("#feather", 1, {
          x: 0,
          y: 150,
          rotation: 0,
          delay: -0.5,
          ease: Power1.easeInout
        })
        .from("#feather .feather-reflection", 1, {
          autoAlpha: 0,
          y: 25,
          delay: -1,
          ease: Power1.easeInout
        });
      new ScrollMagic.Scene({
        triggerElement: t,
        offset: -150,
        reverse: !1
      })
        .setTween(tl)
        .addTo(controller);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/components/about/_focus.scss";
</style>
