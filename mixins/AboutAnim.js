export const AboutAnim = {
    mounted(){


        this.$nextTick(function(){
             let tl  = new TimelineMax(),
             A = this.$el.querySelectorAll(".heading-primary, .text-wrapper, .principle__title, .principle__content, .header__title"),
             H = this.$el.querySelectorAll(".ul-list__item, .principle-list__item"),
             B = this.$el.querySelectorAll('.btn-holder, .workingFor__title, .workingFor__text, .btn-wrapper');
            tl.set(A, {autoAlpha: 0, x:100});
            tl.set(H, {autoAlpha: 0, x: 50});
            tl.set(B , {autoAlpha: 0, y: 85});

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
              {autoAlpha: 1, x: 0, delay: .1, ease: Power2.easeOut },
              overlap
            );
            self.unobserve(entry.target);
          }
        });
      }, config);


        const config2 = {
        threshold: .8
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
              {autoAlpha: 1 ,  y: 0, ease: Power2.easeOut },
              overlap
            );
            self.unobserve(entry.target);
          }
        });
      }, config2);


        B.forEach(B => {
        observer2.observe(B);
      });

      H.forEach(H => {
        observer.observe(H);
      });

        A.forEach(A => {
        observer.observe(A);
      });
    });
}
}
