"use strict";

let headerLogoSrc =
  window.innerWidth < 1200 ? "/img/logo-mini.jpg" : "/img/logo.png";

setTimeout(() => {
  let headerLogoEl = document.querySelector(".headerLogoImg");
  headerLogoEl.src = window.origin + headerLogoSrc;
});
