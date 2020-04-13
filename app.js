"use strict";

window.addEventListener("DOMContentLoaded", init);

function init() {
  console.log("app JS");

  fetchTimelineSVG();
  fetchArrowSVG();

  const animPage2 = new gsap.timeline();
  animPage2.add(gsap.from("#myName", 1, { opacity: 0 }));
  animPage2.add(gsap.from("#introText", 2, { opacity: 0, delay: 0.5, rotateX: 90, transformOrigin: "50% 50% -200px" }));
  gsap.to("#portrait_image", 2, { backgroundSize: "100%", ease: "steps(12)", yoyo: true, repeat: -1, repeatDelay: 2 });
}

async function fetchTimelineSVG() {
  let response = await fetch("images/KEA_timeline.svg");
  let mySVGData = await response.text();

  document.querySelector("#KEA_timeline").innerHTML += mySVGData;
  animatePerson();
}

async function fetchArrowSVG() {
  let response = await fetch("images/arrow_down.svg");
  let mySVGData = await response.text();

  console.log(mySVGData);
  console.log("hey");

  document.querySelector("#arrowDown").innerHTML += mySVGData;

  animateArrow();
  //   document.getElementById("room").setAttribute("viewBox", "270 120 100 100");
}

function animatePerson() {
  gsap.fromTo("#left_leg", 1, { rotate: -25, transformOrigin: "top" }, { rotate: 25, transformOrigin: "top", ease: "none", yoyo: true, repeat: -1 });
  gsap.fromTo("#right_leg", 1, { rotate: 25, transformOrigin: "top" }, { rotate: -25, transformOrigin: "top", ease: "none", yoyo: true, repeat: -1 });
  gsap.fromTo("#left_arm", 1, { rotate: -30, transformOrigin: "top" }, { rotate: 30, transformOrigin: "top", ease: "none", yoyo: true, repeat: -1 });
  gsap.fromTo("#right_arm", 1, { rotate: 30, transformOrigin: "top" }, { rotate: -30, transformOrigin: "top", ease: "none", yoyo: true, repeat: -1 });
}

function animateArrow() {
  gsap.from("#arrowDown svg #arrowDown", 2, { opacity: 0, scaleY: 0, transformOrigin: "bottom", ease: Power1.linear, yoyo: true, repeat: -1 });
}

document.querySelector("#arrowDown").addEventListener("click", goPage2);
// document.querySelector(".container").addEventListener("scroll", (event) => {
//   //   event.stopPropagation();
//   //   setTimeout(changeURL, 1000);
//   event.stopPropagation();
//   changeURL(event);
// });

function goPage2() {
  window.location.href = "#secondPage";
  console.log("scroll");
}

// function changeURL(event) {
//   gsap.fromTo(".slide", 0.5, { opacity: 0 }, { opacity: 1 });
//   console.log("scroll");
// }

// var url = window.location.pathname;
// var id = url.substring(url.lastIndexOf('/') + 1);
