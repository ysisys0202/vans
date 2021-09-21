"use strict";
{
  const styleList = document.querySelector(".style-list");
  const styleItems = document.querySelectorAll(".style-item");
  const pointer = document.querySelector(".style-pointer");
  const styleNames = ["slip-on", "authentic", "era", "oldskool", "sk8-hi"];
  let targetItem = null;
  let makedPointerImg = false;

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

  function setPointerPos(posX, posY) {
    pointer.style.transform = `translate3d(${posX}px,${posY}px,0)`;
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

  function init() {
    setDataIdx(styleItems);
  }

  function styleMouseEnterHander() {
    makePointerImg();
  }

  function activateItem(item) {
    if (item.classList.contains("is-active")) {
      return;
    }
    item.classList.add("is-active");
  }
  function inactivateItem(item) {
    if (!item.classList.contains("is-active")) {
      return;
    }
    item.classList.remove("is-active");
  }

  function styleMouseOverHander(e) {
    targetItem = e.target;
    findTargetItem("style-item");
    if (!targetItem) {
      return;
    }
    const targetIdx = targetItem.dataset.idx;
    const targetRect = targetItem.getBoundingClientRect();
    if (window.innerWidth <= 1024) {
      return;
    }
    styleItems.forEach((styleItem) => {
      inactivateItem(styleItem);
    });
    activateItem(targetItem);
    setPointerPos(
      targetRect.right + 20,
      targetRect.bottom - pointer.getBoundingClientRect().height,
    );
    setPointerImgPath(targetIdx);
  }

  function styleMouseOutHander(e) {
    targetItem = e.target;
    findTargetItem("style-item");
    if (!targetItem) {
      return;
    }
    if (window.innerWidth <= 1024) {
      return;
    }
    inactivateItem(targetItem);
  }

  function styleMouseLeaveHander() {
    if (window.innerWidth <= 1024) {
      return;
    }
    removePointerImg();
  }

  function styleMouseMoveHander(e) {
    const mouseXPos = e.clientX + 40;
    const mouseYPos = e.clientY - (pointerRect.height * 2) / 3;
    if (window.innerWidth <= 1024) {
      return;
    }
    setPointerPos(mouseXPos, mouseYPos);
  }

  function scrollHandler() {
    const scrollYPos = window.pageYOffset;

    styleItems.forEach((styleItem, idx) => {
      const styleItemRect = styleItem.getBoundingClientRect();
      const startPos = styleItemRect.top + scrollYPos - window.innerHeight / 2;
      const endPos = startPos + styleItemRect.height + 10;
      if (scrollYPos > startPos && scrollYPos < endPos) {
        activateItem(styleItem);
        setPointerImgPath(idx);
        setPointerPos(
          styleItemRect.right + 20,
          styleItemRect.bottom - pointer.getBoundingClientRect().height,
        );
        if (idx === 0 && scrollYPos > startPos) {
          if (makedPointerImg) {
            return;
          }
          makePointerImg();
          makedPointerImg = true;
        }
        if (idx === styleItems.length - 1 && scrollYPos < endPos) {
          if (makedPointerImg) {
            return;
          }
          makePointerImg();
          makedPointerImg = true;
        }
      } else {
        inactivateItem(styleItem);
        if (idx === 0 && scrollYPos < startPos) {
          if (!makedPointerImg) {
            return;
          }
          removePointerImg();
          makedPointerImg = false;
        }

        if (idx === styleItems.length - 1 && scrollYPos > endPos) {
          if (!makedPointerImg) {
            return;
          }
          removePointerImg();
          makedPointerImg = false;
        }
      }
    });
  }

  init();

  window.addEventListener("scroll", scrollHandler);
  styleList.addEventListener("mouseover", styleMouseOverHander);
  //styleList.addEventListener("mouseout", styleMouseOutHander);
  //styleList.addEventListener("mouseenter", styleMouseEnterHander);
  //styleList.addEventListener("mouseleave", styleMouseLeaveHander);
  // styleList.addEventListener("mousemove", styleMouseMoveHander);
}
