"use strict";

// Main Menu
const burger = document.querySelector("#burger-menu");
const arrow = document.querySelector("#arrow");
const menu = document.querySelector("#cont");

console.log(burger);
console.log(arrow);
console.log(menu);

const openMenu = function (e) {
  e.preventDefault();
  menu.classList.remove("hidden");
  burger.classList.add("hidden");
};

const closeMenu = function () {
  e.preventDefault();
  menu.classList.add("hidden");
  burger.classList.remove("hidden");
};

burger.addEventListener("click", openMenu);

arrow.addEventListener("click", closeMenu);
