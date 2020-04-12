"use strict";

window.addEventListener("DOMContentLoaded", init);

function init() {
  console.log("app JS");

  fetchArrowSVG();

  const animPage2 = new gsap.timeline();
  animPage2.add(gsap.from("#myName", 1, { opacity: 0 }));
  animPage2.add(gsap.from("#introText", 2, { opacity: 0, delay: 0.5, rotateX: 90, transformOrigin: "50% 50% -200px" }));
  gsap.to("#portrait_image", 2, { backgroundSize: "100%", ease: "steps(12)", yoyo: true, repeat: -1, repeatDelay: 2 });
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

function animateArrow() {
  gsap.from("#arrowDown svg #arrowDown", 2, { opacity: 0, scaleY: 0, transformOrigin: "bottom", ease: Power1.linear, yoyo: true, repeat: -1 });
}

document.querySelector("#arrowDown").addEventListener("click", goPage2);
// window.addEventListener("scroll", goPage2);

function goPage2() {
  window.location.href = "#secondPage";
  console.log("scroll");
}
