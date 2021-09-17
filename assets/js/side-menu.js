"use strict";

export default class SideMenu {
  constructor(sideMenu, btn, type) {
    this.sideMenu = document.querySelector(sideMenu);
    this.btn = document.querySelector(btn);
    this.overlay = document.querySelector(".overlay");
    this.btn.addEventListener("click", () => {
      this.btnClickHandler();
    });
    this.type = type;
  }
  btnClickHandler() {
    if (this.btn.classList.contains("is-active")) {
      this.inactive(this.type);
    } else {
      this.active();
    }
  }
  active() {
    this.sideMenu.classList.add("is-active");
    this.btn.classList.add("is-active");
    this.btn.innerHTML = '<i class="icon-close" aria-hidden="true"></i>';
    this.overlay.classList.add("is-active");
    document.body.style.overflowY = "hidden";
  }
  inactive(type) {
    this.sideMenu.classList.remove("is-active");
    this.btn.classList.remove("is-active");
    this.btn.innerHTML = ` <span class="lg-only">검색</span>
    <i class="icon-${type}" aria-hidden="true"></i>`;
    this.overlay.classList.remove("is-active");
    document.body.style.overflowY = "visible";
  }
}
