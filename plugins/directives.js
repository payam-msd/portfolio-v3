import Vue from "vue";

Vue.directive("data-case", {
  inserted: (el, binding) => {
       if(binding.arg === 'dastaniran'){
            el.onmouseover = 'img2'
       }
  }
});
