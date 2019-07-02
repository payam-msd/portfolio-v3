
 export const starterNavAnim = {

     mounted() {
         const max = new TimelineMax(),
             A = document.querySelectorAll('.navbar__list ,.Social');
             max.set(A ,{x: -85,autoAlpha: 0});

    this.$nextTick(function() {
             const tl = new TimelineMax({delay: 0.4}),
             A = document.querySelectorAll('.navbar__list ,.Social');
            const config = {
            threshold: 0.3
            };
            let observer = new IntersectionObserver(function(entries, self) {
                entries.forEach(entry => {
                if (entry.isIntersecting) {
                    let overlap = "-=0.6";
                    if (!tl.isActive()) {
                    overlap = "+=0";
                    }
                    tl.to(
                    entry.target,
                    0.75,
                    {autoAlpha:1, x: 0, ease: Power1.easeOut },
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
        let tl  = new TimelineMax({delay: 0.4}),
             C = document.querySelectorAll('.navbar__list ,.Social');
        const config = {
       threshold: 0.5
       };
       let observer = new IntersectionObserver(function(entries, self) {
           entries.forEach(entry => {
           if (entry.isIntersecting) {
               let overlap = "-=0.6";
               if (!tl.isActive()) {
               overlap = "+=0";
               }
               tl.to(
               entry.target,
               1,
               { x: 0, autoAlpha: 1,  ease: Power2.easeOut },
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
             :  tl.set(C, {x: -50 , delay: 1,autoAlpha: 0})
        }
  }
}

