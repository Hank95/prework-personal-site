"use strict";

// Main Menu
const burger = document.querySelector("#burger-menu");
const arrow = document.querySelector("#arrow");
const menu = document.querySelector("#cont");

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

// Night Mode

const moon = document.querySelector(".moon");
const nightModeDiv = document.querySelector(".night-mode");
const sun = document.querySelector(".sun");
const dayModeDiv = document.querySelector(".day-mode");
const backgroundImage = document.querySelector("#background");
const html = document.querySelector("html");
const landing = document.querySelector("#landing");
const logo = document.querySelector("#logo");
const logoFoot = document.querySelector("#foot-logo");

console.log(backgroundImage);
console.log(logo);
const nightMode = function (e) {
  e.preventDefault();
  nightModeDiv.classList.add("hidden");
  dayModeDiv.classList.remove("hidden");
  backgroundImage.src = "./images/ocean-texture-dark.jpg";
  html.style.color = "white";
  html.style.backgroundColor = "rgb(18,18,18)";
  landing.style.color = "white";
  logo.src = "./images/hp_logo2_white.svg";
  logoFoot.src = "./images/hp_logo2_white.svg";
};

moon.addEventListener("click", nightMode);
