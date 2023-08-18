'use strict';

import AOS from "aos";
AOS.init();

// Burger Menu 

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

// Menu au Scroll Desktop

let menu = document.querySelector(".menu__list");
let stickyOffset = 100;

let menuTop = menu.offsetTop + stickyOffset;

if (window.innerWidth >= 1180) {
  var scroll = function scroll() {
    if (window.pageYOffset >= menuTop) {
      menu.classList.add("sticky");
    } else {
      menu.classList.remove("sticky");
    }
  };
  window.onscroll = function () {
    scroll();
  };
}

// Scrollbar Progress

const scrollProgress = document.getElementById('scroll-progress');
const height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener('scroll', () => {
  const scrollTop =
    document.body.scrollTop || document.documentElement.scrollTop;
  scrollProgress.style.width = `${(scrollTop / height) * 100}%`;
});

// Animation Text

var observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});
var hiddenElements = document.querySelectorAll('.hide');
hiddenElements.forEach(function (el) {
  return observer.observe(el);
});