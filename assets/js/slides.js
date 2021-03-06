"use strict";

const mainSlide = tns({
  container: ".main-slide-list",
  items: 1,
  mode: "gallery",
  autoplay: true,
  autoplayTimeout: 4000,
  controls: false,
  nav: false,
  autoplayButtonOutput: false,
  preventScrollOnTouuch: true,
  animateIn: "tns-fade-in",
  animateOut: "tns-fade-out",
  speed: 2000,
  animateDelay: 2000,
});

const NewArrivalProductSlide = tns({
  container: ".new-arrival .product-slide-list",
  items: 2,
  slideBy: "page",
  mouseDrag: true,
  controlsContainer: ".new-arrival .slide-controls",
  navContainer: ".new-arrival .slide-nav-list",
  preventScrollOnTouuch: true,
  speed: 2000,
  responsive: {
    769: {
      items: 3,
    },
    1025: {
      items: 4,
    },
  },
  preventScrollOnTouch: true,
});

const BestStyleProductSlide = tns({
  container: ".best-style .product-slide-list",
  items: 2,
  slideBy: "page",
  mouseDrag: true,
  controlsContainer: ".best-style .slide-controls",
  navContainer: ".best-style .slide-nav-list",
  preventScrollOnTouuch: true,
  speed: 2000,
  responsive: {
    769: {
      items: 3,
    },
    1025: {
      items: 4,
    },
  },
  preventScrollOnTouch: true,
});
