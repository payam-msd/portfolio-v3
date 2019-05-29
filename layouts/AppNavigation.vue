<template>
  <div>
    <nuxt />
    <div class="nav-container">
      <sidebar>
        <div :class="'nav-toggler'">
          <sidebar-toggle :sidebarComponent="addForm" :icon="addIcon" />
        </div>
      </sidebar>
    </div>
  </div>
</template>

<script>
import AddIcon from "~/components/navigation/burgerSVG";
import Sidebar from "~/components/navigation/sidebar";
import SidebarToggle from "~/components/navigation/sidebarToggle";
import AddForm from "~/components/navigation/addForm";

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
      addForm: AddForm,
      addIcon: AddIcon
    };
  },
  components: {
    Sidebar,
    SidebarToggle
  }
};
</script>

<style lang="scss" scoped>
.nav-container {
  overflow-y: hidden !important;
}
</style>
