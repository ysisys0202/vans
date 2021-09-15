"use strict";

const mainSlide = tns({
  container: ".main-slide-list",
  items: 1,
  mode: "gallery",
  autoplay: true,
  autoplayTimeout: 7000,
  controls: false,
  nav: false,
  autoplayButtonOutput: false,
  preventScrollOnTouuch: true,
});

const productSlide = tns({
  container: ".product-slide-list",
  items: 4,
  slideBy: "page",
  mouseDrag: true,
  controlsContainer: ".product-slide .slide-controls",
  navContainer: ".product-slide .slide-nav-list",
  preventScrollOnTouuch: true,
});
