function valueSetters() {
  gsap.set("#nav a", {
    y: "-100%",
    opacity: 0,
  });
  gsap.set("#home span .child", {
    opacity: 0,
    y: "100%",
  });
  gsap.set("#home .row img", {
    opacity: 0,
  });
}
function revealToSpan() {
  document.querySelectorAll(".reveal").forEach(function (elem) {
    // create two spans
    var parent = document.createElement("span");
    var child = document.createElement("span");
    // parent and child both sets their respective classes
    parent.classList.add("parent");
    child.classList.add("child");
    //span parent gets child and child gets elem details
    child.innerHTML = elem.innerHTML;
    parent.appendChild(child);
    //   elem replaces its value with parent span
    elem.innerHTML = "";
    elem.appendChild(parent);
  });
}

function loaderAnimation() {
  var tl = gsap.timeline();

  tl.from("#loader .child span", {
    x: 100,
    duration: 1,
    stagger: 0.2,
    delay: 1,
    ease: Power3.easeInOut,
  });
  tl.to("#loader .parent .child", {
    y: "-100%",
    duration: 1,
    ease: Circ.easeInOut,
  });
  tl.to("#loader", {
    height: 0,
    duration: 1,
    ease: Circ.easeInOut,
  });
  tl.to("#green", {
    height: "100%",
    top: 0,
    delay: -1,
    duration: 1,
    ease: Circ.easeInOut,
  });
  tl.to("#green", {
    height: 0,
    top: 0,
    duration: 1,
    delay: -0.3,
    ease: Circ.easeInOut,
    onComplete: function () {
      animateHomepage();
    },
  });
}

function animateHomepage() {
  var tl = gsap.timeline();

  tl.to("#nav a", {
    y: 0,
    opacity: 1,
    stagger: 0.2,
    ease: Expo.easeInOut,
  });
  tl.to("#home .parent .child", {
    y: 0,
    opacity: 1,
    marginBottom: "1vw",
    marginRight: "1vw",
    stagger: 0.1,
    duration: 2,
    ease: Expo.easeInOut,
  });
  tl.to("#home .row img", {
    opacity: 1,
    ease: Expo.easeInOut,
  });
}

revealToSpan();
valueSetters();
loaderAnimation();
