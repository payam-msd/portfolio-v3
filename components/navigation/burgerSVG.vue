<template>
  <div>
    <svg
      class="burger burger__rotate burger__props"
      viewBox="0 0 100 100"
      onClick="this.classList.toggle('active')"
    >
      <path
        class="burger__line top"
        d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"
      />
      <path class="burger__line middle" d="m 70,50 h -40" />
      <path
        class="burger__line bottom"
        d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"
      />
    </svg>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="scss">
.burger {
  @include accelerate();
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition: transform 450ms ease-in-out;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  stroke: #212121;

  &:hover {
    stroke: #fff;
  }

  &__line {
    fill: none;
    transition: stroke-dasharray 750ms 1s, stroke-dashoffset 750ms 1s;
    stroke-width: 7px;
    stroke-linecap: round !important;
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
.active {
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
</style>
