import Vue from "vue";
Vue.directive("data-case", {
  inserted: (el, binding, vnode) => {
    if (binding.value === "DastanIran") {
    el.getElementsByTagName('A')[0].onmouseover = ()=> {
        vnode.context.hoverCases[1].hover = 0;
        vnode.context.hoverCases[2].hover= 0;
        vnode.context.hoverCases[0].hover= 1;
      };
    }
    if (binding.value === "SickFit") {
      el.getElementsByTagName('A')[0].onmouseover = ()=> {
        vnode.context.hoverCases[0].hover= 0;
        vnode.context.hoverCases[2].hover= 0;
        vnode.context.hoverCases[1].hover= 1;
      };
    }
    if (binding.value === "Glozzom") {
      el.getElementsByTagName('A')[0].onmouseover = ()=> {
        vnode.context.hoverCases[0].hover= 0;
        vnode.context.hoverCases[1].hover= 0;
        vnode.context.hoverCases[2].hover= 1;
      };
    }
  }
});
