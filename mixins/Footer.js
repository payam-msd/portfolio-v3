
export const FooterAnim = {
    mounted(){
        const tl = new TimelineMax(),
        A = this.$el.querySelectorAll('.footerMedia'),
        B = this.$el.querySelectorAll('.footer__svg-holder');


        tl.set([A, B], {yPercent: 50, opacity: 0 });

        const config = {
        threshold: 1.0,
      };
      let observer = new IntersectionObserver(function(entries, self) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            let overlap = "-=0.5";
            if (!tl.isActive()) {
              overlap = "+=0";
            }
            tl.to(
              entry.target,
              .75,
              { yPercent: 0, opacity: 1,  ease: Power2.easeOut },
              overlap
            );
            self.unobserve(entry.target);
          }
        });
      }, config);
      B.forEach(B => {
        observer.observe(B);
      });
        A.forEach(A => {
        observer.observe(A);
      });

    }
}
