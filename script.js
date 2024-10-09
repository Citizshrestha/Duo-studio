function init() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });

  
var footer = document.querySelector(".footer h4");

footer.addEventListener("click",function(){
  locoScroll.scrollTo(0);
})

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}

init();
var cursor = document.querySelector(".cursor");
var main = document.querySelector(".main");
document.addEventListener("mousemove", function (dets) {
  cursor.style.left = dets.x - 10 + "px";
  cursor.style.top = dets.y - 10 + "px";
});


var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: ".main",
    start: "top 27%",
    end: "top 0",
    scrub: 3,
  },
});



tl.to(
  ".page1 h1",
  {
    x: -100,
  },
  "anim"
);
tl.to(
  ".page1 h2",
  {
    x: 100,
  },
  "anim"
);

tl.to(
  ".page1 video",
  {
    height: "80vh",
    width: "95%",
  },
  "anim"
);

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: ".main",
    start: "top -110%",
    end: "top -130%",
    scrub: 3,
  },
});
tl2.to(".main", {
  backgroundColor: "#fff",
  color: "#111",
});

function textAnim() {
  var h1 = document.querySelector(".page2 h1");
  var h1Content = h1.textContent;
  var splittedText = h1Content.split("");

  var halfValue = h1Content.length / 2;
  var clutter = "";

  splittedText.forEach(function (elem, idx) {
    if (idx < halfValue) {
      clutter += `<span class="initials">${elem}</span>`;
    } else {
      clutter += `<span class="last">${elem}</span>`;
    }
  });
  h1.innerHTML = clutter;
}

textAnim();

tl2.from(
  " .initials",
  {
    y: -120,
    duration: 1,
    opacity: 0,
    stagger: 0.2,
  },
  "anims"
);
tl2.from(
  ".last",
  {
    y: 120,
    duration: 1,
    opacity: 0,
    stagger: -0.2,
  },
  "anims"
);

tl2.from(
  ".atonceleft",
  {
    x: -150,
    opacity: 0,
    duration: 2,
    delay: 1,
  },
  "anim"
);

tl2.from(
  ".atonceright",
  {
    x: 150,
    opacity: 0,
    duration: 2,
    delay: 1,
  },
  "anim"
);

var tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page3",
    scroller: ".main",
    // markers: true,
    start: ".page3 200px",
    end: ".page3 500px",
    scrub: 2,
  },
});

tl3.from(".page3 h1", {
  x: -120,
  rotate: "-180deg",
  //  duration: 10,
  opacity: 0,
  stagger: 0.2,
});
tl3.from(
  ".page3 #img1",
  {
    x: -100,
    rotate: "90deg",
    //  duration: 15,
    opacity: 0,
    stagger: 0.2,
  },
  "anim3"
);
tl3.from(
  ".page3 #video1",
  {
    x: 120,
    rotate: "-90deg",
    //  duration: 15,
    opacity: 0,
    stagger: 0.2,
  },
  "anim3"
);

var tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: ".main",
    start: "top -341%",
    end: "top -350%",
    scrub: 3,
  },
});

tl4.to(".main", {
  backgroundColor: "#111",
});
tl4.from(".elem1",{
  x: 200,
  duration: 1.2,
  opacity: 0,
  stagger: 0.2,
})
tl4.from(".elem2",{
  x: -200,
  duration: 1.2,
  opacity: 0,
  stagger: 0.2,
})
tl4.from(".elem3",{
  x: 200,
  duration: 1.2,
  opacity: 0,
  stagger: 0.2,
})

var boxes = document.querySelectorAll(".box");
boxes.forEach(function(elem){
  elem.addEventListener("mouseenter",function(){
     var images = elem.getAttribute("data-img");
    cursor.style.width = "350px";
    cursor.style.height = "300px";
    cursor.style.borderRadius = "0";
    cursor.style.backgroundImage = `url(${images})`;
  });
  elem.addEventListener("mouseleave",function(){
    var images = elem.getAttribute("data-img");
    cursor.style.width = "20px";
    cursor.style.height = "20px";
    cursor.style.borderRadius = "50%";
    cursor.style.backgroundImage = ``;
  });
});


var a = document.querySelectorAll(".nav-part2 a");
var purple = document.getElementById("purple");

a.forEach(function(elem){
   elem.addEventListener("mouseenter",function(){
      purple.style.display = "block";
      purple.style.opacity = "1";
   });
   elem.addEventListener("mouseleave",function(){
      purple.style.display = "none";
      purple.style.opacity = "0";
   });
});

var video = document.querySelector(".page1 video");

video.addEventListener("mouseenter",function(){
  cursor.innerHTML = "View More";
  cursor.style.scale = "6";
});
video.addEventListener("mouseleave",function(){
  cursor.style.scale = "1";
  cursor.innerHTML = " ";
});


var a1 = document.querySelector("#a1")
var purple = document.querySelector("#purple")

a1.addEventListener("mouseenter",function(){
 
  purple.style.backgroundColor = "transparent";
})


a1.addEventListener("mouseleave", function() {
 purple.style.backgroundColor = ""; 
});




document.addEventListener("DOMContentLoaded", function() {
  var as = document.querySelectorAll(".nav-part2 a");
  as.forEach(function(a) {
      a.addEventListener("mouseenter", function() {
          a.style.backgroundColor = "red";
          var text = a.textContent;
          console.log(text);
      });
      a.addEventListener("mouseleave", function() {
          a.style.backgroundColor = "";
      });
  });
});
