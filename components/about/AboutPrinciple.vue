<template>
  <div class="principle b-padding-large">
    <h1 ref="Ptitle" class="principle__title">{{title}}</h1>
    <p ref="Pcontent" class="principle__content">{{content}}</p>
    <ul class="principle__list">
      <li ref="P_li" class="principle-list__item" v-for="item in principles" :key="item.id">
        <div
          :style="{backgroundImage: `url(${item.svg })`,
            height: '74px',
            width: '74px',
            margin: '0  0 2rem 1rem'
        }"
        ></div>
        <h3>{{item.title}}</h3>
        <br />
        <span>{{item.sustitle}}</span>
        <p>{{item.content}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import focus from "~/assets/svg/focus.svg";
import quality from "~/assets/svg/quality.svg";
import knowledge from "~/assets/svg/knowledge.svg";

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
          subtitle: "— mutual trust",
          content:
            "I trust in my clients’ knowledge about their branch. In return, I ask them to trust in my experience.",
          svg: knowledge
        },
        {
          id: 2,
          title: "High quality ",
          subtitle: "— reasonable costs",
          content:
            "Every little detail matters when you create a high-end website. Taking everything into account takes time.",
          svg: quality
        },
        {
          id: 3,
          title: "Keeping focus ",
          subtitle: "— sharing expertise",
          content:
            "I prefer to do what I do best. That’s why I work with a network of professionals for anything outside my focus.",
          svg: focus
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/components/about/_principle.scss";
</style>
