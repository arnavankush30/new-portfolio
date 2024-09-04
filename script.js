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

var tl = gsap.timeline();

revealToSpan();
tl.from(".child span", {
  x: 100,
  duration: 1,
  stagger: 0.2,
  delay: 1,
  ease: Power3.easeInOut,
});
tl.to(".parent .child", {
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
});
