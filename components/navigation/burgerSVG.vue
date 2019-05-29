<template>
  <svg
    class="burger burger__rotate burger__props"
    viewBox="0 0 100 100"
    width="90%"
    onclick="this.classList.toggle('active')"
  >
    <path
      class="burger__line top"
      d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"
    ></path>
    <path class="burger__line middle" d="m 70,50 h -40"></path>
    <path
      class="burger__line bottom"
      d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"
    ></path>
  </svg>
</template>

<script>
export default {
  name: "add-icon"
};
</script>
<style lang="scss">
.burger {
  position: absolute;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition: transform 800ms;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  &__line {
    fill: none;
    transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
    stroke: hsl(0, 35%, 8%);
    stroke-width: 6;
    stroke-linecap: round;
  }
  &__rotate {
    &.active {
      transform: rotate(45deg);

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
  }
  &__props {
    .top {
      stroke-dasharray: 40 121;
    }
    .bottom {
      stroke-dasharray: 40 121;
    }
    .middle {
      stroke-dasharray: 40 121;
    }
  }
}
</style>

