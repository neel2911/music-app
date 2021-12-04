const $ = function (selector) {
  return document.getElementById(selector);
};

/* Set the width of the side navigation to 250px */
const openNav = function () {
  const navEl = $("navigationBar");
  navEl.style.transition = "0.5s";
  navEl.style.width = "200px";
};

/* Set the width of the side navigation to 0 */
const closeNav = function () {
  const navEl = $("navigationBar");
  navEl.style.width = "0";
  setTimeout(() => {
    navEl.style.transition = "none";
  }, 500);
};

window.onload = function () {
  const menuEl = $("menu");
  const closeDrawerEl = $("close_drawer");
  menuEl.addEventListener("click", openNav);
  closeDrawerEl.addEventListener("click", closeNav);
};
