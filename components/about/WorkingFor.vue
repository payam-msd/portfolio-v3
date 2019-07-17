<template>
  <div class="workingFor">
    <h1 ref="Wtitle" class="workingFor__title">Working For</h1>
    <br />
    <p ref="Wtext" class="workingFor__text">
      I have worked on various amazing projects in a team or as a freelancer.
      These companies trusted in my expertise.
    </p>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <p ref="Wtext" class="workingFor__text">
      I enjoyed every single working experience and I like to continue taking on
      new projects. Check out my previous projects or contact me to invite me
      for a next assignment.
    </p>
    <div ref="btns" class="btn-wrapper">
      <nuxt-link to="/contact">
        <a class="btn header__btn">contact information</a>
      </nuxt-link>
      <div class="btn header__btn" @click="handleNav">show some work</div>
    </div>
  </div>
</template>

<script>
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
    return {};
  },
  props: ["contentComponent"],
  methods: {
    handleNav() {
      this.$store.dispatch("toggleSidebar", {
        component: this.contentComponent
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/components/about/_working-for.scss";
</style>
