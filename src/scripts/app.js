'use strict';


function openBurger () {  
  let openMenu = document.querySelector('.menu__list');
  let buttonBurger = document.querySelector('.btn--burger');
    
  buttonBurger.addEventListener('click', (e) => {    
    openMenu.classList.toggle('burger');
  });    
  let openMenuLinks = document.querySelectorAll('.menu__list a');
  openMenuLinks.forEach(link => {
    link.addEventListener('click', (e) => {    
    openMenu.classList.toggle('burger');
    }); 
  })
}
openBurger();

//Anim Burger

let transition = document.querySelector(".btn--burger");

transition.addEventListener('click', myFunction);

function myFunction() {
    transition.classList.toggle("burger");
}

// Dark Mode

let darkTheme = document.getElementById('input');

darkTheme.addEventListener('change', function () {
  if (document.body.dataset.theme === "light") {
  dark();
  localStorage.setItem("theme", "dark");
} else {
  light();
  localStorage.setItem("theme", "light");
}
});

const userDark = window.matchMedia('prefers-color-scheme: light').matches;

let theme = localStorage.getItem('theme');
if ((!theme && userDark) || (theme === "dark")) {
dark();
} else if (theme === "light") {
light();
}

function dark() {
document.body.setAttribute("data-theme", "dark");
}
function light() {
document.body.setAttribute("data-theme", "light");
}

// Slider

import Swiper, { Navigation, Pagination } from 'swiper';

var swiper = new Swiper(".mySwiper", {
    loop: true,
    grabCursor: true,
    effect:"coverflow",
    grabCursor: true,
    centeredSlider: false,
    spaceBetween: 24,
    coverflowEffect:{
        rotate:60,
        stretch:0,
        slideShadows:true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
      clickable: true,
    },
});

// Dropdown Menu

let dropdown = document.querySelectorAll('.dropdown');
let dropdownArray = Array.prototype.slice.call(dropdown,0);
dropdownArray.forEach(function(el){
  let button = el.querySelector('a[data-toggle="dropdown"]'),
      menu = el.querySelector('.dropdown__menu'),
      arrow = button.querySelector('span.icon__arrow');

  button.onclick = function(event) {
    if(!menu.hasClass('show')) {
      menu.classList.add('show');
      menu.classList.remove('hide');
      arrow.classList.add('open');
      arrow.classList.remove('close');
      event.preventDefault();
    }
    else {
      menu.classList.remove('show');
      menu.classList.add('hide');
      arrow.classList.remove('open');
      arrow.classList.add('close');
      event.preventDefault();
    }
  };
})

Element.prototype.hasClass = function(className) {
    return this.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(this.className);
};