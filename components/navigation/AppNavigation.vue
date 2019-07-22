<template>
  <div>
    <sidebar>
      <div class="toggleWrapper">
        <sidebar-toggle :contentComponent="AddForm" :icon="AddIcon" />
      </div>
    </sidebar>
  </div>
</template>

<script>
import Sidebar from "~/components/navigation/sidebar";
import SidebarToggle from "~/components/navigation/sidebarToggle";
import AddIcon from "~/components/navigation/burgerSVG";
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
      AddForm,
      AddIcon
    };
  },
  components: {
    Sidebar,
    SidebarToggle
  }
};
</script>

<style lang="scss" scoped></style>
