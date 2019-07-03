export const ContactAnim = {

    mounted(){

        this.$nextTick(function() {
            const H = this.$el.querySelectorAll(".text-wrapper, .contact__title , .contact-ul-list__item"),
            B = this.$el.querySelectorAll('.contact__list-item, .contact__ul-list2'),
            tl = new TimelineMax();
            tl.set(H, {autoAlpha: 0 ,  x: 130 });
            tl.set(B, {autoAlpha: 0 ,  y: 50 });


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

      const config2 = {
        threshold: 0.5
      };
      let observer2 = new IntersectionObserver(function(entries, self) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            let overlap = "-=0.7";
            if (!tl.isActive()) {
              overlap = "+=0";
            }
            tl.to(
              entry.target,
              .75,
              {autoAlpha: 1, delay: .1,  y: 0,  ease: Power2.easeOut },
              overlap
            );
            self.unobserve(entry.target);
          }
        });
      }, config2);
      B.forEach(B => {
        observer2.observe(B);
      });
    });
    }
}
