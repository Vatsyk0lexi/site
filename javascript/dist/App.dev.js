"use strict";

var table = document.querySelector("#table");
var matches = document.querySelector("#matches");
var tableBlock = document.querySelector(".tableBlock");
var matchesBlock = document.querySelector(".matchesBlock");
table.addEventListener('click', function (event) {
  matches.classList.remove("tabs__item_active");
  table.classList.add("tabs__item_active");
  tableBlock.style.display = 'block';
  matchesBlock.style.display = 'none';
});
matches.addEventListener('click', function (event) {
  matches.classList.add("tabs__item_active");
  table.classList.remove("tabs__item_active");
  tableBlock.style.display = 'none';
  matchesBlock.style.display = 'block';
});