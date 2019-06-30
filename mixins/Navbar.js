 export const starterNavAnim = {

     mounted() {

    const tl = new TimelineLite(),
             max = new TimelineLite({ delay: 1 });

      tl.set(".navbar__title", {   x: -85, opacity: 0 })
        .set(".navbar__item", {   x: -85, opacity: 0 })
        .set(".Social", {   x: -85, opacity: 0 });

//     function rightSideNav() {
//       tl.from(".case-holder___img", 0.75 , {
//           opacity: 1 ,
//           x: 0,
//           ease: Power2.easeOut
//       }).from('.case-holder__group' , 0.75 , {
//           opacity:1,
//           x: 0,
//           ease:Power.easeOut
//       }).to(".case-holder___img", 0.75 , {
//           opacity: 1 ,
//           x: 50,
//           ease: Power2.easeOut
//       }).to('.case-holder__group' , 0.75 , {
//           opacity:1,
//           x: 50,
//           ease:Power.easeOut
//       })
//   }


    function leftSideNav() {
      tl.to(".navbar__title", 1, {
        x: 0,
        opacity: 1,
        delay: -.3,
        ease: Power2.easeOut
      })
        .staggerTo(
          ".navbar__item",
          1,
          {
            x: 0,
            opacity: 1,
            ease: Power2.easeOut
          },
          "-=0.9"
        )
        .to(
          ".Social",
          0.75,
          {

            x: 0,
            opacity: 1,
            ease: Power1.easeOut
          },
          "-=0.7"
        );
      return tl;
    }

    open
           ? max.add(leftSideNav, "leftSideNavAdded")
           : open()
  },
};

export const afterToggle = {
 watch: {
    open(open) {
      const tl = new TimelineLite(),
        max = new TimelineLite({delay: 0.75});
        function leftSideNav() {
      tl.to(".navbar__title", 1, {
        x: 0,
        opacity: 1,
        delay: -.2,
        ease: Power2.easeOut
      })
        .staggerTo(
          ".navbar__item",
          1,
          {
            x: 0,
            opacity: 1,
            ease: Power2.easeOut
          },
          "-=0.9"
        )
        .to(
          ".Social",
          0.75,
          {

            x: 0,
            opacity: 1,
            ease: Power1.easeOut
          },
          "-=0.7"
        );
      return tl;
    }

        open
        ? max.add(leftSideNav, "leftSideNavAdded")
         : tl.set(".navbar__title", {  delay: 0.75 ,   x: -85, opacity: 0 })
        .set(".navbar__item", {   x: -85, delay: 0.75 ,  opacity: 0 })
        .set(".Social", {   x: -85, delay: 0.75 ,  opacity: 0 });;
    }
  }
}
