<template>
  <div>
    <header id="contact " class="contact">
      <div class="header__container">
        <div class="text-box u-mt-large">
          <div class="heading-primary">{{title}}</div>
          <br />
          <p class="contact__title--pre">
            <span>—</span>
            {{titleSuf}}
          </p>
          <div class="text-wrapper u-mt-small">
            <p>{{content}}</p>
          </div>
          <ul class="ul-list">
            <li class="ul-list__item" v-for="item in listData" :key="item.id">
              <span>
                <b>{{item.title}}</b>
                <br />
                <a :href="`${item.link}`">{{item.detail}}</a>
              </span>
            </li>
          </ul>

          <ul class="ul-list">
            <h3 class="title u-mb-small">{{title2}}</h3>
            <li class="contact__list-item" v-for="item in dlList" :key="item.id">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
                <path d="M33,14.1,16.44,30.52,0,14.1H9.39V0H23.5V14.1ZM0,35.26H33V40H0Z" />
              </svg>
              <a :href="`${item.link}`">{{item.detail}}</a>
            </li>
          </ul>
          <div class="header__img-holder"></div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import { TimelineMax, Ease } from "gsap";
export default {
  name: "contactHero",
  data() {
    return {
      title: "Contact",
      titleSuf: "let’s talk",
      content:
        "  I am currently available for selective opportunities. If you want to discuss a project or want to find out more about me or my work, get in touch!",
      title2: "PDF downloads",
      listData: [
        {
          id: 0,
          title: "Location",
          detail: "Mashhad,Iran"
        },
        {
          id: 1,
          title: "Email",
          detail: "contact@payam.com",
          link: "mailto:payammgh17@gmail.com"
        },
        {
          id: 2,
          title: "Telephone",
          detail: "+(98) 903 190 1841",
          link: "tel:00989031901841"
        }
      ],
      dlList: [
        {
          id: 0,
          detail: "Resume",
          link: "https://dlLink"
        },
        {
          id: 1,
          detail: "Terms & Conditions",
          link: "https://dlLink"
        }
      ]
    };
  },
  mounted() {
    if (!!this.$store.state.sidebarOpen) {
      this.$nextTick(this.contactAnim);
      this.$nextTick(this.downsideAnim);
    }
  },
  methods: {
    contactAnim() {
      const tl = new TimelineMax(),
        time = !!this.$store.state.sidebarOpen ? 1.25 : 0;
      TweenLite.delayedCall(time, () => {
        tl.staggerFrom(
          ".contact,  .contact__title h1, .contact__title--pre",
          1,
          {
            x: 100,
            autoAlpha: 0,
            delay: -0.1,
            ease: Power2.easeOut
          },
          0.2
        )
          .from(
            ".contact .text-wrapper p",
            0.75,
            { x: 85, autoAlpha: 0, ease: Power2.easeOut },
            "-=.7"
          )
          .add("titileIn")
          .staggerFrom(
            ".contact ul li span",
            1,
            { x: 85, autoAlpha: 0, ease: Power2.easeOut },
            0.25,
            "-=.7"
          );
      });
    },
    downsideAnim() {
      const tl = new TimelineMax(),
        controller = new ScrollMagic.Controller(),
        t = document.querySelector("h3");

      tl.staggerFrom(
        ".ul-list h3, .ul-list .contact__list-item",
        0.75,
        {
          y: 100,
          autoAlpha: 0,
          ease: Power2.easeOut
        },
        0.2
      );
      new ScrollMagic.Scene({
        triggerElement: t,
        reverse: !1,
        offset: -300
      })
        .setTween(tl)
        .addTo(controller);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/pages/_contact.scss";
@import "~assets/scss/pages/_about.scss";
</style>
