const banner = document.querySelector(".sub-banner");

function showBannerContent() {
  banner.classList.add("is-active");
}

window.addEventListener("load", () => {
  showBannerContent();
});
