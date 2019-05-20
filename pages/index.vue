<template>
  <div>
    <app-header/>
    <div class="container">
      <div class="wrapper">
        <div class="text-box">
          <div class="heading-primary">
            <h1>
              better design
              <span class="heading-primary__sub">better results</span>
            </h1>
          </div>
          <div class="text-wrapper u-mt-large">
            <p>Combining the fields of design and development, I understand the possibilities of the web. That’s how I create valuable marketing focused websites and shops with a strong user experience, aiming to get more online results.</p>
            <p>I strive to make unique websites that look good and work even better.</p>
          </div>
          <div class="btn-holder u-mt-large">
            <a href="#" class="btn">More about me</a>
            <div class="btn">show me some work</div>
          </div>
        </div>
        <div class="wrapper_second">
          <mainSvg :class="'svg-holder'"/>
          <!-- <div class="text-box">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo eaque recusandae harum porro, voluptas saepe nostrum repellendus ex dolor, aliquid rem modi beatae velit animi pariatur, numquam cupiditate non aut.</p>
          </div>-->
        </div>
      </div>
      <AppFooter/>
    </div>
  </div>
</template>

<script>
import mainSvg from "~/layouts/mainSVG";
import textSVG from "~/layouts/textSVG";
import AppHeader from "~/components/AppHeader";
import AppFooter from "~/components/AppFooter";

export default {
  components: {
    mainSvg,
    textSVG,
    AppHeader,
    AppFooter
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
</style>
