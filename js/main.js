"use strict";

let headerLogoSrc =
  window.innerWidth < 1200 ? "/img/logo-mini.jpg" : "/img/logo.png";

setTimeout(() => {
  window.scroll(0, 0);
  let headerLogoEl = document.querySelector(".headerLogoImg");
  headerLogoEl.src = window.origin + headerLogoSrc;
});
