<template>
  <div class="b-padding-medium">
    <div class="work" id="work">
      <h1 class="work__title heading-primary">Working For</h1>
      <br />
      <p class="work__text">
        I have worked on various amazing projects in a team or as a freelancer.
        These companies trusted in my expertise.
      </p>
      <div class="client-logos-holder">
        <ul>
          <li v-for="item in svgList1" :key="item.id">
            <div :style="{backgroundImage: `url(${item.svg})`}"></div>
          </li>
        </ul>
        <ul>
          <li v-for="item in svgList2" :key="item.id">
            <div :style="{backgroundImage: `url(${item.svg})`}"></div>
          </li>
        </ul>
      </div>

      <p class="work__text">
        I enjoyed every single working experience and I like to continue taking on
        new projects. Check out my previous projects or contact me to invite me
        for a next assignment.
      </p>
      <div class="btn-holder">
        <nuxt-link to="/contact">
          <a class="btn header__btn">contact information</a>
        </nuxt-link>
        <div class="btn header__btn" @click="handleNav">show some work</div>
      </div>
    </div>
  </div>
</template>

<script>
import { TimelineMax, Ease } from "gsap";
import AsanPardakht from "~/assets/svg/Asan_Pardakht.svg";
import Digipay from "~/assets/svg/Digipay.svg";
import IDpay from "~/assets/svg/IDpay.svg";
import PayIr from "~/assets/svg/Pay.ir.svg";
import Payping from "~/assets/svg/Payping.svg";
import Sedad from "~/assets/svg/Sedad.svg";
import Shaparak from "~/assets/svg/Shaparak.svg";
import Vandar from "~/assets/svg/Vandar.svg";
import Zarrinpal from "~/assets/svg/Zarrinpal.svg";

export default {
  name: "workingFor",
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
      AsanPardakht,
      Digipay,
      IDpay,
      PayIr,
      Payping,
      Sedad,
      Shaparak,
      Vandar,
      Zarrinpal,
      svgList1: [
        { id: 0, svg: AsanPardakht },
        { id: 1, svg: Digipay },
        { id: 2, svg: IDpay },
        { id: 3, svg: PayIr },
        { id: 4, svg: Payping }
      ],
      svgList2: [
        { id: 5, svg: Sedad },
        { id: 6, svg: Shaparak },
        { id: 7, svg: Vandar },
        { id: 8, svg: Zarrinpal }
      ]
    };
  },
  mounted() {
    this.$nextTick(this.workAnim);
    this.$nextTick(this.logoAnim);
  },
  props: ["contentComponent"],
  methods: {
    handleNav() {
      this.$store.dispatch("toggleSidebar", {
        component: this.contentComponent
      });
    },
    logoAnim() {
      const controller = new ScrollMagic.Controller(),
        tl = new TimelineMax({
          repeat: -1
        });
      tl.staggerFrom(
        ".client-logos-holder ul:first-child li",
        0.75,
        {
          y: -80,
          opacity: 0,
          ease: Power2.easeOut
        },
        0.1
      )
        .staggerTo(
          ".client-logos-holder ul:first-child li",
          0.75,
          {
            y: 80,
            opacity: 0,
            delay: 1.5,
            ease: Power2.easeIn
          },
          0.1
        )
        .staggerFrom(
          ".client-logos-holder ul:nth-child(2) li",
          0.75,
          {
            y: -80,
            opacity: 0,
            ease: Power2.easeOut
          },
          0.1
        )

        .staggerTo(
          ".client-logos-holder ul:nth-child(2) li",
          0.75,
          {
            y: 80,
            opacity: 0,
            delay: 1.5,
            ease: Power2.easeIn
          },
          0.1
        );

      new ScrollMagic.Scene({
        triggerElement: ".client-logos-holder",
        offset: -200,
        reverse: !1
      })
        .setTween(tl)
        .addTo(controller);
    },
    workAnim() {
      const tl = new TimelineMax(),
        controller = new ScrollMagic.Controller();
      TweenLite.defaultEase = Power2.easeOut;
      tl.staggerFrom(
        "#work h1, .work__text, .btn-holder ",
        0.75,
        {
          y: 80,
          autoAlpha: 0
        },
        0.2,
        "-=.7"
      );
      new ScrollMagic.Scene({
        triggerElement: "#work",
        reverse: !1
      })
        .setTween(tl)
        .addTo(controller);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/components/about/_work.scss";
</style>
