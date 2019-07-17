<template>
  <div>
    <section id="focus" class="focus b-padding-medium">
      <div class="u-mt-medium">
        <h1 ref="Hprimary" class="heading-primary">Focus</h1>
        <div ref="Twrapper" class="text-wrapper">
          <p class="focus__content u-mt-small">
            I create unique products by combining design and development, while
            keeping my focus. I specialize in these fields:
          </p>
        </div>
      </div>
      <div class="u-mt-large">
        <ul class="focus_ulList">
          <li class="focus_ulList__item" v-for="item in listData" :key="item.id">
            <h3 class="focus_ulList__title">
              <span class="focus_ulList__preTitle">—</span>
              {{item.title}}
            </h3>
            <p class="focus_ulList__text">{{item.content}}</p>
          </li>
        </ul>
        <div class="feather-holder" ref="feather_trigger">
          <div class="feather" ref="feather"></div>
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
    let tl = new TimelineMax(),
      controller = new ScrollMagic.Controller(),
      { feather, feather_trigger } = this.$refs;
    animationFeather();
    function animationFeather() {
      var tl = new TimelineMax(),
        e = new ScrollMagic.Controller();
      tl.from(feather, 1, {
        opacity: 0,
        ease: Power1.easeInout
      })
        .to(feather, 1.5, {
          x: 150,
          y: 80,
          rotation: -40,
          delay: -1.25,
          ease: Power1.easeInout
        })
        .to(feather, 2, {
          x: -100,
          y: 120,
          rotation: 30,
          delay: -1.25,
          ease: Power1.easeInout
        })
        .to(feather, 1.5, {
          x: 50,
          y: 140,
          rotation: -20,
          delay: -1,
          ease: Power1.easeInout
        })
        .to(feather, 1, {
          x: 0,
          y: 150,
          rotation: 0,
          delay: -0.5,
          ease: Power1.easeInout
        });
      new ScrollMagic.Scene({
        triggerElement: feather_trigger,
        offset: -300,
        reverse: !1
      })
        .setTween(tl)
        .addTo(e);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/components/about/_focus.scss";
</style>
