import Vue from "vue";
Vue.directive("data-case", {
  inserted: (el, binding, vnode) => {
    vnode.context.hoverCases[0].hover = 1;
    el.getElementsByTagName('a')[0].onmouseover = () =>{
        vnode.context.mouseHover = 1;
        for( var i = 0; i < vnode.context.hoverCases.length; i++ ){
            for(var key in  vnode.context.hoverCases[i]){
                if(vnode.context.hoverCases[i][key] === 1 &&
                    vnode.context.mouseHover === 1 ){
                    vnode.context.hoverCases[i][key] = 0;
                }
                if(binding.value === "DastanIran"){
                vnode.context.hoverCases[0].hover= 1;
                } else if (binding.value === "SickFit"){
                vnode.context.hoverCases[1].hover= 1;
                } else if (binding.value === "Glozzom"){
                vnode.context.hoverCases[2].hover= 1;
                }
            }
        }
}
    el.getElementsByTagName('a')[0].onmouseout = ()=>{
        vnode.context.mouseHover = 0;
        }
}
});
