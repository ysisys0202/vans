"use strict";
{
  const fixedArea = document.querySelector(".fixed-area");
  const scrollArea = document.querySelector(".scroll-area");

  function activateFixed() {
    fixedArea.classList.add("is-fixed");
  }
  function inactivateFixed() {
    fixedArea.classList.remove("is-fixed");
  }

  function scrollHandler() {
    const scrollPos = window.pageYOffset;
    const fixedAreaRect = fixedArea.getBoundingClientRect();
    const scrollAreaRect = scrollArea.getBoundingClientRect();
    const startPos = scrollAreaRect.top + scrollPos;
    const endPos = startPos + scrollAreaRect.height - fixedAreaRect.height;
    const scrollRange = scrollAreaRect.height - fixedAreaRect.height;

    if (window.innerWidth <= 1024) {
      return;
    }
    if (scrollPos >= startPos && scrollPos < endPos) {
      activateFixed();
      fixedArea.style.transform = `translateY(0)`;
    } else {
      if (scrollPos < startPos) {
        inactivateFixed();
        fixedArea.style.transform = `translateY(0)`;
      }
      if (scrollPos > endPos) {
        inactivateFixed();
        fixedArea.style.transform = `translateY(${scrollRange}px)`;
      }
    }
  }
  window.addEventListener("resize", () => {
    if (window.innerWidth <= 1024) {
      inactivateFixed();
    }
  });
  window.addEventListener("scroll", scrollHandler);
}
