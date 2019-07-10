import Vue from "vue";
import _ from 'lodash';
Vue.directive("data-case", {
  inserted: (el, binding, vnode) => {
    vnode.context.hoverCases[0].hover = 1;
    el.getElementsByTagName('a')[0].onmouseover = () =>{
        vnode.context.mouseHover = 1;
        if (vnode.context.mouseHover) {
        var tl = new TimelineMax();
        tl.set('.case-holder__group', { xPercent: 15, autoAlpha: 0 })
        .set('.case-holder__img', {
            left: '2%',
            x: 0
        })
        .to('.case-holder__group', 1, {
          xPercent: 0,
          autoAlpha: 1,
          ease: Power4.easeOut
        }).to(
          '.case-holder__img',
          0.75,
          {
            x: 0,
            left: '8%',
            ease: Power2.easeOut
          },
          "-=.9"
        );
      }
        for( var i = 0; i < vnode.context.hoverCases.length; i++ ){
            for(var key in  vnode.context.hoverCases[i]){
                if(vnode.context.hoverCases[i][key] === 1){
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
