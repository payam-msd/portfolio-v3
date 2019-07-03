
 export const starterNavAnim = {

     mounted() {
         const tl = new TimelineMax(),
             A = document.querySelectorAll('.navbar__list ,.Social');
             tl.set(A ,{x: -85,autoAlpha: 0});

    this.$nextTick(function() {
            const config = {
            threshold: 1.0
            };
            let observer = new IntersectionObserver(function(entries, self) {
                entries.forEach(entry => {
                if (entry.isIntersecting) {
                    let overlap = "-=0.7";
                    if (!tl.isActive()) {
                    overlap = "+=0";
                    }
                    tl.to(
                    entry.target,
                    0.75,
                    {autoAlpha:1, x: 0, delay: .3 , ease: Power2.easeOut },
                    overlap
                    );
                    self.unobserve(entry.target);
                }
                });
            }, config);
            A.forEach(A => {
            observer.observe(A);
            })
        })
  },
};

export const afterToggle = {
 watch: {
    open(open) {
        let tl  = new TimelineMax(),
             C = document.querySelectorAll('.navbar__list, .Social');
        const config = {
       threshold: 1.0
       };
       let observer = new IntersectionObserver(function(entries, self) {
           entries.forEach(entry => {
           if (entry.isIntersecting) {
               let overlap = "-=0.7";
               if (!tl.isActive()) {
               overlap = "+=0";
               }
               tl.to(
               entry.target,
               .75,
               { x: 0, autoAlpha: 1, delay: .3 ,  ease: Power2.easeOut },
               overlap
               );
               self.unobserve(entry.target);
           }
           });
       }, config);

             open
             ? C.forEach(C => {
                 observer.observe(C);
                })
             : tl.set(C , { autoAlpha: 0 , x: -50 , delay: 1})

        }
  }
}

