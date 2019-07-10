
 export const starterNavAnim = {

    mounted() {

    this.$nextTick(()=>{
    const  tl = new TimelineMax();
    tl.set(this.$el, {
        autoAlpha: 1,
        x: this.$el.offsetWidth
    })
})
},
};

export const afterToggle = {
    watch: {
        open(open) {
            const tl  = new TimelineMax(),
            C = document.querySelectorAll('.navbar__list, .Social'),
            B = document.querySelectorAll('.case-holder__img, .case-holder__bar, .case-holder__group' ),
            dX = open ? 0 : this.$el.offsetWidth;

            if (!!open) {
            tl.set(C, { xPercent: -40 , autoAlpha: 0}).set(B , {xPercent: 50, autoAlpha: 0})
            }

            tl.to(this.$el, 1.25, {
            x: dX,
            ease: Power2.easeInOut,
            onComplete(){
            if (!this.open) {
                afterToggle_prop();
            }
            }
            })

        setTimeout(() => {
        open
          ? document.documentElement.classList.add("hide-scroll")
          : document.documentElement.classList.remove("hide-scroll")
      }, 800);

        function afterToggle_prop(){
        tl.add('leftSide').staggerTo(C, .75 , {xPercent: 0 , autoAlpha: 1 , ease: Power2.easeOut}, 0.1);
        tl.staggerTo(B, .75 , {xPercent: 0, autoAlpha:1 , ease: Power2.easeOut}, 0.1, 'leftSide+=.6')

        return tl;
        }
    }
  }
}

