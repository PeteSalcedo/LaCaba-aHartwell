let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop:true,
});

