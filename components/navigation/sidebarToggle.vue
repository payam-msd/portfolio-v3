<template>
  <div>
    <a :class="'toggle'" ref="toggle" @click="handleClick">
      <component :is="icon" />
    </a>
  </div>
</template>

<script>
import { TimelineMax } from "gsap";
export default {
  name: "sidebar-toggle",
  data() {
    return {};
  },
  props: ["contentComponent", "icon"],

  computed: {
    open(open) {
      return this.$store.state.sidebarOpen;
    }
  },
  methods: {
    handleClick() {
      this.$store.dispatch("toggleSidebar", {
        component: this.contentComponent
      });
    }
  },
  watch: {
    open(open) {
      let tl = new TimelineMax(),
        { toggle } = this.$refs,
        _vm = this;
      open
        ? tl.to(toggle, 0.4, {
            rotation: 45,
            delay: 0.85,
            ease: Power4.easeInOut,
            onComplete() {
              _vm.$refs.toggle.classList.add("removePulse");
            }
          }) &&
          setTimeout(() => {
            document.querySelector(".burger").classList.add("active");
          }, 100)
        : tl.to(toggle, 0.25, {
            rotation: 0,
            delay: 0.85,
            ease: Power4.easeInOut
          }) &&
          setTimeout(() => {
            document.querySelector(".burger").classList.remove("active");
          }, 100);
    }
  }
};
</script>

<style lang="scss" scoped >
.toggle {
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4.8rem;
  width: 4.8rem;
  left: 0;
  top: 50%;
  border-radius: 50%;
  background-color: $blue-grey-050;
  z-index: 50;

  &:hover {
    background-color: #212121;
  }

  &::before {
    content: "";
    position: absolute;
    top: -1px;
    bottom: 0;
    left: -1px;
    height: 100%;
    visibility: visible;
    @include accelerate();
    width: 100%;
    border: 1px solid $blue-grey-900;
    border-radius: 50%;
    @include animation(
      "pulse-ring 1.25s cubic-bezier(.455,.03,.515,.955) -20s infinite"
    );
  }
}
@include keyframes(pulse-ring) {
  0% {
    opacity: 0;
    transform: scale(0.4);
  }
  40% {
    opacity: 0;
  }
  60% {
    opacity: 0.4;
  }
  100% {
    opacity: 0;
    transform: scale(1.4);
  }
}
.removePulse {
  &.toggle::before {
    visibility: hidden;
  }
}
</style>
