import Vue from "vue";
Vue.directive("data-case", {
  inserted: (el, binding, vnode) => {
    vnode.context.hoverCases[0].hover = 1;
  },
  update: (el, binding, vnode, oldnode) => {
    const e = vnode.context;
    el.onmouseover = () => {
      e.mouseHover = 1;
      for (var i = 0; i < e.hoverCases.length; i++) {
        for (var key in e.hoverCases[i]) {
          if (e.hoverCases[i][key] === 1 && e.mouseHover === 1) {
            e.hoverCases[i][key] = 0;
          }
            binding.value === "DastanIran"
              ? (e.hoverCases[0].hover = 1)
              : binding.value === "DigiMobile"
              ? (e.hoverCases[1].hover = 1)
              : binding.value === "SickFit"
              ? (e.hoverCases[2].hover = 1)
              : "";
        }
      }
    };
    el.onmouseout = () => {
      vnode.context.mouseHover = 0;
    };
  }
});
