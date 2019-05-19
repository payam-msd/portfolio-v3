<template>
  <h3 :class="$style.title">
    <nav class="menu">
      <div class="menu-branding">
        <div class="portrait"></div>
      </div>
      <ul class="menu-nav">
        <li class="nav-item current">
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/work">Work</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/contact">resume</nuxt-link>
        </li>
      </ul>
    </nav>
  </h3>
</template>

<script>
export default {
  name: "add-form"
};
</script>

<style module>
.title {
  font-size: 3rem;
  color: white;
  font-family: "roboto";
}
</style>
<style>
.ham {
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition: transform 400ms;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.hamRotate.active {
  transform: rotate(45deg);
}
.line {
  fill: none;
  transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
  stroke: #000;
  stroke-width: 5;
  stroke-linecap: round;
}

.ham4 .top {
  stroke-dasharray: 40 121;
}
.ham4 .bottom {
  stroke-dasharray: 40 121;
}
.ham4.active .top {
  stroke-dashoffset: -68px;
}
.ham4.active .bottom {
  stroke-dashoffset: -68px;
}
.menu {
  display: flex;
}
.nav-item {
  list-style: none;
  padding: 1rem;
  text-transform: capitalize;
}
.nav-item:hover {
  color: aquamarine;
}

.nav-item::before {
  content: "--";
  padding-right: 1rem;
}
</style>

