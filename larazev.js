gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("main").style.transform ? "transform" : "fixed"
});






// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
















var tl=gsap.timeline();
tl.from("#page1",{
  opacity: 0,
  duration:0.3,
  delay:0.2,
})
tl.from("#page1",{
  transform:"scaleX(0.7) scaleY(0.2) translateY(80%)",
  borderRadius:"100px",
  duration: 2,
  ease:"expo.out",
})
tl.from("nav",{
  opacity:0,
  delay:-0.2,
}
  )

tl.from("#heading,#neeche,.moveitems,#page1 p",{
  opacity:0,
  duration:0.5,
  stagger:0.2,
})


































var nav = document.querySelector("nav");
nav.addEventListener("mouseenter", function (){
  let tl = gsap.timeline();
  tl.to(".nav-bottom", {
    height: "21vh",
  });
  tl.to("#nav-part2 .nav-head h5", {
    display: "block",
  });
  tl.from(".nav-head h5 span", {
    y:25,
    stagger: {
      amount: 0.6,
    },
    opacity: 0,
  });
});
nav.addEventListener("mouseleave", function () {
  let tl = gsap.timeline();
  tl.to(".nav-head h5 span", {
    y: 25,
    stagger: {
      amount: 0.6,
    },
    opacity: 0,
  });
  
  tl.to("#nav-part2 .nav-head  h5", {
    display: "none",
    duration: 0.1,
  });
  tl.to(".nav-bottom", {
    height: 0,
    duration: 0.5,
  });
  
});

var relem=document.querySelectorAll(".elem");
relem.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        gsap.to(elem.childNodes[3],{
            scale:1,
            opacity:1,
         })       
    })
    
})

relem.forEach(function(elem){
    elem.addEventListener("mouseleave", function(){
        gsap.to(elem.childNodes[3],{
            scale:0,
            opacity:0,
         })   
    })
    
})

relem.forEach(function(elem){
    elem.addEventListener("mousemove", function(dets){
         gsap.to(elem.childNodes[3],{
             x:dets.x - elem.getBoundingClientRect().x-55,
             y:dets.y - elem.getBoundingClientRect().y - 135,
         })     
    })
    
})

var center=document.querySelector(".page-center");
var video=document.querySelector("video")

center.addEventListener("click",function(){
    video.play()
    gsap.to("video",{
        transform:"scaleX(1) scaleY(1)",
        opacity:1,
        borderRadius:0,
    })
})

video.addEventListener("click",function(){
    video.load()
    gsap.to("video",{
        transform:"scaleX(0.7) scaleY(0)",
        opacity:0,
        borderRadius:"30px",
    })
    
})


var rightvideo=document.querySelectorAll(".secsright");
rightvideo.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        elem.childNodes[3].style.opacity=1,
        elem.childNodes[3].play();

    })
})

rightvideo.forEach(function(elem){
  elem.addEventListener("mouseleave",function(){
      elem.childNodes[3].style.opacity=0,
      elem.childNodes[3].load();

  })
})

var pen=document.querySelector("#pencil");
var title=document.querySelector("#heading h1");
var nav=document.querySelector("nav");
var pera=document.querySelector("#page1 p");
// var move=document.querySelector("#neeche h4")
// var moves=document.querySelector("#neeche #all")
// var movess=document.querySelector("#neeche #alls")


pen.addEventListener("mouseenter",function(){
  title.style.textShadow="5px 5px 50px green";
  pera.style.textShadow="5px 5px 50px #3fff26";
  nav.style.boxShadow="10px 10px 120px green";
  nav.style.textShadow="20px 20px 100px green";
  // move.style.boxShadow="2px 2px 50px green";
  // moves.style.boxShadow="2px 2px 50px green";
  // movess.style.boxShadow="2px 2px 50px green";
});

pen.addEventListener("mouseleave",function(){
  title.style.textShadow="0px 0px 0px green";
  nav.style.boxShadow="0px 0px 0px green";
  // move.style.boxShadow="0px 0px 0px green";
  // moves.style.boxShadow="0px 0px 0px green";
  // movess.style.boxShadow="0px 0px 0px green";
  pera.style.textShadow="0px 0px 0px green";
  

});





    

