"use strict";

var swiper2 = new Swiper('.players__wrapper', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  grabCursor: true,
  autoHeight: true,
  // кількість елементів в одному слайді
  slidesPerView: 3,
  speed: 800,
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    600: {
      slidesPerView: 2
    },
    1100: {
      slidesPerView: 3
    }
  }
});
var playerCardButton = document.querySelector(".card__button");
var card = document.querySelector(".card");
playerCardButton.addEventListener('click', function (e) {
  card.classList.add('card_active');
});