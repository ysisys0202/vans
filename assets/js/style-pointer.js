"use strict";
{
  const styleList = document.querySelector(".style-list");
  const styleItems = document.querySelectorAll(".style-item");
  const pointer = document.querySelector(".style-pointer");

  const styleNames = ["slip-on", "authentic", "era", "oldskool", "sk8-hi"];
  let targetItem = null;

  function setDataIdx(elements) {
    elements.forEach((element, idx) => {
      element.dataset.idx = idx;
    });
  }

  function findTargetItem(className) {
    while (!targetItem.classList.contains(className)) {
      targetItem = targetItem.parentNode;
      if (targetItem.nodeName === "BODY") {
        targetItem = null;
        return;
      }
    }
  }
  function makePointerImg() {
    const pointerImg = document.createElement("img");
    pointerImg.classList.add("style-pointer-img");
    pointer.appendChild(pointerImg);
  }
  function removePointerImg() {
    const pointerImg = document.querySelector(".style-pointer-img");
    if (!pointerImg) {
      return;
    }
    pointerImg.remove();
  }
  function setPointerImgPath(idx) {
    const pointerImg = document.querySelector(".style-pointer-img");
    if (!pointerImg) {
      return;
    }
    pointerImg.setAttribute(
      "src",
      `./assets/images/index/main-pointer-${styleNames[idx]}.png`,
    );
    pointerImg.setAttribute("alt", `${styleNames[idx]}`);
  }
  function setPointerPos(posX, posY) {
    pointer.style.transform = `translate3d(${posX}px,${posY}px,0)`;
  }
  function init() {
    setDataIdx(styleItems);
  }
  function styleMouseEnterHander() {
    makePointerImg();
  }
  function moveScroll(scrollPos) {
    window.scrollTo({
      top: scrollPos,
      behavior: "smooth",
    });
  }
  function styleMouseOverHander(e) {
    targetItem = e.target;
    findTargetItem("style-item");
    if (targetItem) {
      const targetIdx = targetItem.dataset.idx;
      const targetPos = targetItem.offsetTop / 2;
      console.log(targetPos);
      setPointerImgPath(targetIdx);
      moveScroll(targetPos);
    }
  }
  function styleMouseLeaveHander(e) {
    removePointerImg();
  }
  function styleMouseMoveHander(e) {
    const mouseXPos = e.clientX + 10;
    const mouseYPos = e.clientY - 20;
    setPointerPos(mouseXPos, mouseYPos);
  }
  init();

  styleList.addEventListener("mouseover", styleMouseOverHander);
  styleList.addEventListener("mouseenter", styleMouseEnterHander);
  styleList.addEventListener("mouseleave", styleMouseLeaveHander);
  styleList.addEventListener("mousemove", styleMouseMoveHander);
}
