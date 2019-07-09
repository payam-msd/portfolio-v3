
 export const starterNavAnim = {

    mounted() {
    let  tl = new TimelineMax();

    tl.set(this.$el, {
        autoAlpha: 1,
        x: this.$el.offsetWidth
    })
  },
};

export const afterToggle = {
 watch: {
     open(open) {
    const tl  = new TimelineMax(),
        C = document.querySelectorAll('.navbar__list, .Social'),
        B = document.querySelectorAll('.case-holder'),
        dX = open ? 0 : this.$el.offsetWidth;

        tl.to(this.$el, 1.25, {
        x: dX,
        ease: Power2.easeInOut,
      });

        setTimeout(() => {
        open
          ? (document.documentElement.classList = "hide-scroll")
          : (document.documentElement.classList = "show-scroll");
      }, 800);

        const config = {
       threshold: 0.5
       };
       let observer = new IntersectionObserver(function(entries, self) {
           entries.forEach(entry => {
           if (entry.isIntersecting) {
               let overlap = "-=0.8";
               if (!tl.isActive()) {
               overlap = "+=0";
               }
               tl.to(
               entry.target,
               .75,
               { x: 10, autoAlpha: 1 , delay: .1  , ease: Power2.easeOut },
               overlap
               );
               self.unobserve(entry.target);
           }
           });
       }, config);

        const config2 = {
       threshold: 0.5
       };
       let observer2 = new IntersectionObserver(function(entries, self) {
           entries.forEach(entry => {
           if (entry.isIntersecting) {
               let overlap = "-=0.8";
               if (!tl.isActive()) {
               overlap = "+=0";
               }
               tl.to(
               entry.target,
               1,
               { x: 10, autoAlpha: 1, delay: -.2   , ease: Power1.easeIn },
               overlap
               );
               self.unobserve(entry.target);
           }
           });
       }, config2);
       open
       ? B.forEach(B =>{
           observer2.observe(B);
       })
       :tl.set(B, {x: 80, autoAlpha: 0});

        open
        ? C.forEach(C => {
            observer.observe(C);
        })
        : tl.set(C, { autoAlpha: 0 , x: -100 });
        }
  }
}

