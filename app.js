"use strict";

window.addEventListener("DOMContentLoaded", init);
let ratio;
const cnt = document.querySelector(".container");

function init() {
  fetchTimelineSVG();
  fetchArrowSVG();
  addClickToProjects();
  cnt.addEventListener("scroll", scrolling);

  gsap.from("#myName", 1, { opacity: 0 });
  gsap.from("#introText", 1, { opacity: 0, rotateX: 90, transformOrigin: "50% 50% -200px" });
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

  document.querySelector("#arrowDown").innerHTML += mySVGData;
  document.querySelector("#arrowUp").innerHTML += mySVGData;

  animateArrow();
}

function animatePerson() {
  gsap.from("#KEA_timeline svg", 1, { opacity: 0, rotateX: -90, transformOrigin: "50% 50% -200px" });

  gsap.fromTo("#left_leg", 1, { rotate: -25, transformOrigin: "top" }, { rotate: 25, transformOrigin: "top", ease: "none", yoyo: true, repeat: -1 });
  gsap.fromTo("#right_leg", 1, { rotate: 25, transformOrigin: "top" }, { rotate: -25, transformOrigin: "top", ease: "none", yoyo: true, repeat: -1 });
  gsap.fromTo("#left_arm", 1, { rotate: -30, transformOrigin: "top" }, { rotate: 30, transformOrigin: "top", ease: "none", yoyo: true, repeat: -1 });
  gsap.fromTo("#right_arm", 1, { rotate: 30, transformOrigin: "top" }, { rotate: -30, transformOrigin: "top", ease: "none", yoyo: true, repeat: -1 });
}

function animateArrow() {
  gsap.from("#arrowDown svg #arrowDown", 2, { opacity: 0, scaleY: 0, transformOrigin: "bottom", ease: Power1.linear, yoyo: true, repeat: -1 });
}

document.querySelector("#arrowDown").addEventListener("click", goNextPage);

function goNextPage() {
  if (ratio == 0) {
    window.location.href = "#secondPage";
  } else if (ratio == 0.5) {
    window.location.href = "#thirdPage";
  }
}

function addClickToProjects() {
  document.querySelector("#contact").addEventListener("click", () => {
    location.href = "mailto:patrick.j.martins@hotmail.com";
  });
  document.querySelector("#monty_python h1").addEventListener("click", () => {
    window.open("http://pjmelite.dk/KEA/Theme2_BasicAnimation_GroupProject/", "_blank");
  });
  document.querySelector("#huset h1").addEventListener("click", () => {
    window.open("http://pjmelite.dk/KEA/HusetDK_Project/index.html", "_blank");
  });
  document.querySelector("#artist h1").addEventListener("click", () => {
    window.open("http://pjmelite.dk/KEA_2Semester/2Sem_Project/Neda_Art/index.html", "_blank");
  });
  document.querySelector("#light_bulb h1").addEventListener("click", () => {
    window.open("http://pjmelite.dk/KEA_3Semester/Squad_AnimationProject/", "_blank");
  });
}

// var url = window.location.pathname;
// var id = url.substring(url.lastIndexOf('/') + 1);

function scrolling() {
  const maxScroll = cnt.scrollHeight - cnt.clientHeight;
  ratio = cnt.scrollTop / maxScroll;

  if (ratio == 1) {
    document.querySelector("#arrowDown").style.display = "none";
    document.querySelector("#arrowUp").style.display = "block";
    gsap.fromTo("#arrowUp svg", 1, { rotate: 0, transformOrigin: "center" }, { rotate: -90, transformOrigin: "center", ease: Power1.linear });
    gsap.fromTo("#arrowUp svg", 1, { scale: 0.6 }, { scale: 0.8, ease: Power1.linear, yoyo: true, repeat: -1 });
  } else {
    document.querySelector("#arrowDown").style.display = "block";
    document.querySelector("#arrowUp").style.display = "none";
  }
}
