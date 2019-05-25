<template>
  <div class="nav-container">
    <sidebar>
      <div :class="'nav-toggler'">
        <sidebar-toggle :sidebarComponent="addForm" :icon="addIcon" />
      </div>
    </sidebar>
  </div>
</template>

<script>
import AddIcon from "~/components/Navigation/burgerSVG";
import Sidebar from "~/components/Navigation/sidebar";
import SidebarToggle from "~/components/Navigation/sidebarToggle";
import AddForm from "~/components/Navigation/addForm";

export default {
  name: "Navigation",

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
