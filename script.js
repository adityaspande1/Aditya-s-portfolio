
const text=document.querySelector(".second-text");
const textLoad=()=>{
    setTimeout(()=>{
        text.textContent="Student";
    },0);
    setTimeout(()=>{
        text.textContent="Developer";
    },4000);
    setTimeout(()=>{
        text.textContent="Designer";
    },8000);
    setTimeout(()=>{
        text.textContent="Learner";
       
    },12000);
   
    
}
textLoad();
var crsr = document.querySelector("#cursor");
// var blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
  // blur.style.left = dets.x - 250 + "px";
  // blur.style.top = dets.y - 250 + "px";
});

var h4all = document.querySelectorAll(".right-nav ul li a");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 3;
    crsr.style.border = "1px solid #5A68E1";
    crsr.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = "0px solid #5A68E1";
    crsr.style.backgroundColor = "#5A68E1";
  });
});
var head=document.querySelectorAll("h2,h1,h3");
head.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 3;
    crsr.style.border = "1px solid #5A68E1";
    crsr.style.backgroundColor = "transparent";
    head.style.fontFamily = "Tourney,san-serif";
   
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = "0px solid #5A68E1";
    crsr.style.backgroundColor = "#5A68E1";
    head.style.fontFamily = "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif";
  });
});
setInterval(textLoad,12000);
//navbar animations
const tl=gsap.timeline();
tl.from(".left-nav h2",{
    y:-100,
    scale:0,
    duration:0.4,
    opacity:0
})
gsap.from(".right-nav li", {
    y:-100,
    scale:0,
    opacity: 0,
    duration: 0.4,
    stagger: 0.3
    
  });
  
//main1 animations
gsap.from("#left-main h2,#left-main h1,#left-main .type-container",{
    // scale:0,
    y:200,
    opacity:0,
    stagger:0.2,
    duration:0.8
})
gsap.from("#main-img",{
    y:100,
    // scale:0,
    opacity:0,
    duration:1.5
})
gsap.from("#about-container", {
    y:250,
    x:-200,
    opacity: 0,
    // scale: 0,
    scrollTrigger:{
        scrub:1,
        scroller:"body",
        trigger:"#about-container",
        start:"top 70%",
        end:"top 60%",
        // markers:true
    }
})
// gsap.registerPlugin(ScrollTrigger);

// const sections = document.querySelectorAll('.skills-section');

// sections.forEach((section, index) => {
//     gsap.to(section, {
//         x: '100%',
//         opacity: 0,
//         duration: 1,
//         scrollTrigger: {
//             trigger: section,
//             start: 'top center',
//             end: 'center center',
//             scrub: true,
//         }
//     });

//     ScrollTrigger.create({
//         trigger: section,
//         start: 'top top',
//         end: 'bottom center',
//         pin: true,
//         anticipatePin: 1
//     });
// });

function animateSkillsSection3() {
    gsap.to(".skills-section3", {
      x: -1090,
      y: 0,
      duration: 1,
      scrollTrigger: {
        scroller: "body",
        trigger: ".skills-section3",
        start: "end 4%",
        end: "end 20%",
        scrub: 3,
       
        // markers: true,
        ease:"Power3.out"
      },
       pin: true,
    });
    
  }
  function animateSkillsSection4() {
    gsap.to(".skills-section4", {
      x:-1090,
      y: 0,
      duration: 1,
      scrollTrigger: {
        scroller: "body",
        trigger: ".skills-section4",
        start: "end 0%",
        end: "end 20%",
        scrub: 3,
       
        // markers: true,
        ease:"Power3.out"
      },
       pin: true,
    });
    
  }



function animateSkillsSection2() {
    gsap.to(".skills-section2", {
      x: -1050,
      y: 0,
      duration: 1,
      scrollTrigger: {
        scroller: "body",
        trigger: ".skills-section2",
        start: "end 10%",
        end: "end 20%",
        scrub: 3,
       
        // markers: true,
        ease:"Power3.out"
      },
       pin: true,
    });
    
  }
  
  // Call the function to initiate the animation
//   animateSkillsSection2();
//   animateSkillsSection3();
//   animateSkillsSection4();
  gsap.to("#skills-container",{

    scrollTrigger:{
        scroller:"body",
        trigger:"#skills-container",
        onstart:(animateSkillsSection2(),
    animateSkillsSection3(),
    animateSkillsSection4()),
    pin:true
    }
    
  })
  gsap.from("#heading-page4",{
    y:200,
    opacity:0,
    // duration:1,
    scrollTrigger:{
      scroller:"body",
      trigger:"#heading-page4",
      start:"end 90%",
      end:"end 85%",
      // markers:true,
      scrub:2
    }
  })
  //projects section
  // Wrap your code in a function to ensure it runs after the page has loaded

  // You can adjust the "start" value to control when the animation starts as you scroll.

