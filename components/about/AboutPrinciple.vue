<template>
  <div class="principle" id="principle">
    <div class="b-padding-large">
      <h1 class="principle__title">{{title}}</h1>
      <p class="principle__content">{{content}}</p>
      <ul class="principle-list u-mt-xlarge">
        <li v-for="item in principles" :key="item.id">
          <div
            :style="{backgroundImage: `url(${item.svg })`,
            height: '64px',
            width: '64px',
            margin: '0  0 2rem .5rem'
        }"
          ></div>
          <h3>{{item.title}}</h3>
          <br />
          <h4>
            <span class="parinciple-list__pre-title">—</span>
            {{item.subtitle}}
          </h4>
          <p>{{item.content}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import focus from "~/assets/svg/focus.svg";
import quality from "~/assets/svg/quality.svg";
import knowledge from "~/assets/svg/knowledge.svg";
import { TimelineMax, Ease } from "gsap";

export default {
  data() {
    return {
      focus,
      quality,
      knowledge,
      title: "Principles",
      content:
        "The foundation of all the work I deliver can be found in three main principles.",
      principles: [
        {
          id: 1,
          title: "Combined knowledge",
          subtitle: "mutual trust",
          content:
            "I trust in my clients’ knowledge about their branch. In return, I ask them to trust in my experience.",
          svg: knowledge
        },
        {
          id: 2,
          title: "High quality ",
          subtitle: "reasonable costs",
          content:
            "Every little detail matters when you create a high-end website. Taking everything into account takes time.",
          svg: quality
        },
        {
          id: 3,
          title: "Keeping focus ",
          subtitle: "sharing expertise",
          content:
            "I prefer to do what I do best. That’s why I work with a network of professionals for anything outside my focus.",
          svg: focus
        }
      ]
    };
  },
  mounted() {
    this.$nextTick(this.pricipleAnim);
  },
  methods: {
    pricipleAnim() {
      const tl = new TimelineMax(),
        controller = new ScrollMagic.Controller();
      TweenLite.defaultEase = Power2.easeOut;

      tl.add("titleIn")
        .staggerFrom(
          ".principle__title, .principle__content",
          0.75,
          {
            x: 85,
            autoAlpha: 0
          },
          0.1
        )
        .add("headerIn")
        .staggerFrom(
          ".principel-list div , .principle-list h3, .principle-list h4",
          0.75,
          { x: 85, autoAlpha: 0 },
          0.1,
          "titleIn-=.7"
        )
        .staggerFrom(
          "#principle ul , .principle-list li , .principle-list p",
          0.75,
          { x: 80, autoAlpha: 0 },
          0.1,
          "headerIn+="
        );

      new ScrollMagic.Scene({
        triggerElement: "#principle",
        offset: -200,
        reverse: !1
      })
        .setTween(tl)
        .addTo(controller);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/components/about/_principle.scss";
</style>
