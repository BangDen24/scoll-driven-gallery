import './style.scss'
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollSmoother,ScrollTrigger);

const introBottom = document.querySelector(".section--intro").getBoundingClientRect().bottom;
const showcaseTop = document.querySelector(".section--showcase").getBoundingClientRect().top;

console.log(introBottom,showcaseTop);


const distance = showcaseTop-introBottom;
console.log(distance);


ScrollSmoother.create({
  wrapper: "#smooth-wrapper",
  content: "#smooth-content",
  smooth: 2, 
  effects: true,
});

const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".section--intro",
      start: "bottom bottom",
      endTrigger: ".section--showcase",
    // endTrigger: ".row",
      end: `top top`,
      scrub: 1,
    //   markers: true,
      toggleActions: "restart pause reverse pause",
      pin : ".section--columns",
      pinSpacing: false
    }
  });

  //tambahin endtrigger
  

  tl.fromTo(".section--columns",
      { opacity: 0.2, scale: 1.3 },
      { 
          opacity: 1,
          scale: 1
      })
      
      tl.to(".section--columns",
        {
            opacity : 0.2
        });

// Animation for .column-up
gsap.fromTo(".column-up",
    { y: 0 },
    {
        y: -400,
        scrollTrigger: {
            trigger: ".section--intro",
            start: "bottom bottom",
            endTrigger: ".section--showcase",
            end: "top top",
            scrub: 1,
            // markers: true,
            toggleActions: "restart pause reverse pause"
        }
    }
);

gsap.fromTo(".column-down",
    { y: 0 },
    {
        y: 200,
        scrollTrigger: {
            trigger: ".section--intro",
            start: "bottom bottom",
            endTrigger: ".section--showcase",
            scrub: 1,
            // markers: true,
            toggleActions: "restart pause reverse pause"
        }
    }
);