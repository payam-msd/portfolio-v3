import Vue from "vue";

Vue.directive("data-case", {
  inserted: (el, binding, vnode) => {
    if (binding.value === "DastanIran") {
      el.onmouseover = function() {
        vnode.context.hoverCases[1]["hover"] = false;
        vnode.context.hoverCases[2]["hover"] = false;
        vnode.context.hoverCases[0]["hover"] = true;
      };
    } if (binding.value === "SickFit") {
      el.onmouseover = function() {
        vnode.context.hoverCases[0]["hover"] = false;
        vnode.context.hoverCases[2]["hover"] = false;
        vnode.context.hoverCases[1]["hover"] = true;
      };
    } if (binding.value === "Glozzom") {
      el.onmouseover = function() {
        vnode.context.hoverCases[1]["hover"] = false;
        vnode.context.hoverCases[0]["hover"] = false;
        vnode.context.hoverCases[2]["hover"] = true;
      };
    }
  }
});
