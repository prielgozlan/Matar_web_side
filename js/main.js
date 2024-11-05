"use strict";

let headerLogoSrc = "/img/logo.png";

setTimeout(() => {
  window.scroll(0, 0);
});
setTimeout(() => {
  if (window.innerWidth < 769) {
    headerLogoSrc = "/img/logo-mini.jpg";
  }
  let headerLogoEl = document.querySelector(".headerLogoImg");
  headerLogoEl.src = headerLogoSrc;
}, 500);
