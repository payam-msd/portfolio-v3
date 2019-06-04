<template>
  <div>
    <nuxt />
    <div class="nav-container">
      <sidebar>
        <div :class="'nav-toggler'">
          <sidebar-toggle :sidebarComponent="AddForm" :icon="AddIcon" />
        </div>
        <social-media :class="'social-media'" />
      </sidebar>
    </div>
  </div>
</template>

<script>
import Sidebar from "~/components/navigation/sidebar";
import SidebarToggle from "~/components/navigation/sidebarToggle";
import AddIcon from "~/components/navigation/burgerSVG";
import AddForm from "~/components/navigation/addForm";
import SocialMedia from "~/components/SocialMedia";

export default {
  name: "Navigation",
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
      AddForm,
      AddIcon
    };
  },
  components: {
    Sidebar,
    SidebarToggle,
    SocialMedia
  }
};
</script>

<style lang="scss" scoped>
.nav-container {
  position: relative;
}
.social-media {
  position: absolute;
  left: 9rem;
  bottom: 10rem;
  fill: $blue-300 !important;
}
</style>
