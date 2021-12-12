"use strict";

//slider
var swiper3 = new Swiper('.players', {
  direction: 'horizontal',
  // кількість елементів в одному слайді
  speed: 800,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  breakpoints: {
    320: {
      slidesPerView: 1 // треба відцентрувати.

    },
    600: {
      slidesPerView: 2
    },
    1100: {
      slidesPerView: 4,
      spaceBetween: 50
    }
  }
});
var allPlayers = document.querySelector('#all');
var defender = document.querySelector('#defender');
var goalkeeper = document.querySelector('#goalkeeper');
var halfback = document.querySelector('#halfback');
var forward = document.querySelector('#forward');
var defenderBlock = document.querySelector('.defenderBlock');
var goalkeeperBlock = document.querySelector('.goalkeeperBlock');
var halfbackBlock = document.querySelector('.halfbackBlock');
var forwardBlock = document.querySelector('.forwardBlock');

function AddAndRemoveClass(className, dontremove, parametr1, parametr2, parametr3, parametr4) {
  dontremove.classList.add(className);
  parametr1.classList.remove(className);
  parametr2.classList.remove(className);
  parametr3.classList.remove(className);
  parametr4.classList.remove(className);
}

;

function DoDisplayNone(dontchange, parametr1, parametr2, parametr3) {
  dontchange.style.display = 'block';
  parametr1.style.display = 'none';
  parametr2.style.display = 'none';
  parametr3.style.display = 'none';
}

;
allPlayers.addEventListener('click', function (event) {
  AddAndRemoveClass("tabs__item_active", allPlayers, goalkeeper, defender, forward, halfback);
  goalkeeperBlock.style.display = 'block';
  defenderBlock.style.display = 'block';
  halfbackBlock.style.display = 'block';
  forwardBlock.style.display = 'block';
});
goalkeeper.addEventListener('click', function (event) {
  AddAndRemoveClass("tabs__item_active", goalkeeper, allPlayers, defender, forward, halfback);
  DoDisplayNone(goalkeeperBlock, defenderBlock, halfbackBlock, forwardBlock);
});
defender.addEventListener('click', function (event) {
  AddAndRemoveClass("tabs__item_active", defender, allPlayers, goalkeeper, forward, halfback);
  DoDisplayNone(defenderBlock, goalkeeperBlock, halfbackBlock, forwardBlock);
});
halfback.addEventListener('click', function (event) {
  AddAndRemoveClass("tabs__item_active", halfback, allPlayers, goalkeeper, forward, defender);
  DoDisplayNone(halfbackBlock, goalkeeperBlock, defenderBlock, forwardBlock);
});
forward.addEventListener('click', function (event) {
  AddAndRemoveClass("tabs__item_active", forward, allPlayers, goalkeeper, halfback, defender);
  DoDisplayNone(forwardBlock, goalkeeperBlock, defenderBlock, halfbackBlock);
});