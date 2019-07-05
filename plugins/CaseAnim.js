import Vue from 'vue';

Vue.directive('case-anim' , {
    inserted: (el, binding, vnode) => {
        if(binding.value === 'Glozzom' && vnode.context.hoverCases[2].hover === true ){
                // el.querySelector('.case-holder__group') = () => {
                //     tl.set(this, {x: -30, autoAlpha: 0})
                //     .to(this , 1 , {x: 30 , autoAlpha: 1});

                // }
        }
    }
});
