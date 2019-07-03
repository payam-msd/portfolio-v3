export const IndexAnim = {

    mounted(){

        this.$nextTick(function() {
            const H = this.$el.querySelectorAll(".text-wrapper, .btn-holder , .heading-primary"),
            tl = new TimelineMax();
            tl.set(H, {autoAlpha: 0 ,  x: 130 });

      const config = {
        threshold: 0.5
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
              {autoAlpha: 1, delay: .2,  x: 0,  ease: Power2.easeOut },
              overlap
            );
            self.unobserve(entry.target);
          }
        });
      }, config);
      H.forEach(H => {
        observer.observe(H);
      });
    });
    }
}
