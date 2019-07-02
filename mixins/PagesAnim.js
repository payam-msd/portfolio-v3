export const animation = {
    mounted(){
         const H = this.$el.querySelectorAll(".text-wrapper, .btn-holder , .heading-primary"),
                    T = this.$el.querySelectorAll("p, span, svg"),
                    E = this.$el.querySelectorAll("strong, .btn, a"),
                    tl = new TimelineMax();
      tl.set([H, T, E], {autoAlpha: 0,  x: 85 });
    this.$nextTick(function() {
         const H = this.$el.querySelectorAll(".text-wrapper, .btn-holder , .heading-primary"),
        T = this.$el.querySelectorAll("p, span, svg"),
        E = this.$el.querySelectorAll("strong, .btn, a"),
        tl = new TimelineMax();



      const config = {
        threshold: 0.5
      };
      let observer = new IntersectionObserver(function(entries, self) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            let overlap = "-=0.4";
            if (!tl.isActive()) {
              overlap = "+=0";
            }
            tl.to(
              entry.target,
              .75,
              {autoAlpha: 1,  x: 0,  ease: Power2.easeOut },
              overlap
            );
            self.unobserve(entry.target);
          }
        });
      }, config);
      H.forEach(H => {
        observer.observe(H);
      });
      T.forEach(T => {
        observer.observe(T);
      });
      E.forEach(E => {
        observer.observe(E);
      });
    });
    }
}
