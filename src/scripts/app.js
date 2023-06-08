'use strict';


function openBurger () {  
  let openMenu = document.querySelector('.menu--list');
  let buttonBurger = document.querySelector('.btn--burger');
    
  buttonBurger.addEventListener('click', (e) => {    
    openMenu.classList.toggle('burger');
  });    
  let openMenuLinks = document.querySelectorAll('.menu--list a');
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
        light();
        localStorage.setItem("theme", "light");
    } else {
        dark();
        localStorage.setItem("theme", "dark");
    }
});

let userDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

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

// Animation D-M

// Slider
import Swiper from "swiper";

var swiper = new Swiper(".mySwiper", {
    loop: true,
    effect:"coverflow",
    grabCursor: true,
    centeredSlider: true,
    spaceBetween: 24,
    coverflowEffect:{
        rotate:60,
        stretch:0,
        slideShadows:true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        navigationClickable: true,
      }
})

var swiper2 = new Swiper(".mySwiperTwo", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});

// Dropdown Menu

let dropdown = document.querySelectorAll('.dropdown');
let dropdownArray = Array.prototype.slice.call(dropdown,0);
dropdownArray.forEach(function(el){
  let button = el.querySelector('a[data-toggle="dropdown"]'),
      menu = el.querySelector('.dropdown-menu'),
      arrow = button.querySelector('i.icon-arrow');

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