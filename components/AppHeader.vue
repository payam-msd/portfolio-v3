<template>
  <div class="nav-container">
    <sidebar>
      <div :class="'toggle-wrapper'">
        <sidebar-toggle :sidebarComponent="addForm" :icon="addIcon" />
      </div>
    </sidebar>
  </div>
</template>

<script>
import Sidebar from "~/components/sidebar";
import AddIcon from "~/layouts/burgerSVG";
import SidebarToggle from "~/components/sidebarToggle";
import AddForm from "~/components/addForm";

export default {
  name: "AppHeader",

  components: {
    Sidebar,
    SidebarToggle
  },
  data() {
    return {
      addForm: AddForm,
      addIcon: AddIcon
    };
  }
};
</script>

<style lang="scss" scoped></style>
