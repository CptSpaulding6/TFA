'use strict';

// Button Burger

//Animation Burger

// Dark Mode

// Animation D-M

// Slider
import Swiper from "swiper";

var swiper = new Swiper(".mySwiper", {
    loop: true,
    effect:"coverflow",
    grabCursor: true,
    centeredSlider: true,
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

var swiper2 = new Swiper('.swiper2', {
    loop: true,
    pagination: '.swiper-pagination2',
    paginationClickable: true,
});


// Dropdown Menu
var dropdown = document.querySelectorAll('.dropdown');
var dropdownArray = Array.prototype.slice.call(dropdown,0);
dropdownArray.forEach(function(el){
  var button = el.querySelector('a[data-toggle="dropdown"]'),
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