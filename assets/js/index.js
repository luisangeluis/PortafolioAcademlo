import { setAnimation, resetAnimations, animatedHeader } from './animations.js';
import { setMenuObserver } from './mainMenuObserver.js';
import { speedUpBubbles } from './speedUpBubbles.js';

const btnMenu = document.querySelector('.btn-nav');
const mainNav = document.querySelector('.main-nav');
const mainHeader = document.querySelector('.main-header');
let width = window.innerWidth;
let lastScrollTop = 0;
let scrollTop = window.scrollY;

(() => {
  mainHeader.classList.remove("height-0");
  console.log('hola');
  width > 768
    ? mainNav.classList.remove('close-menu')
    : mainNav.classList.add('close-menu');
})();

//****************************************Abrir y cerrar menu principal
btnMenu.addEventListener('click', (e) => mainNav.classList.toggle('close-menu'));

//
addEventListener('scroll', (e) => {
  scrollTop = window.scrollY;
  //Hide nav to scroll
  animatedHeader(scrollTop, lastScrollTop, mainHeader);

  lastScrollTop = scrollTop;
});

//******************************************Cerrar el panel del menu cuando la pantalla se hace grande
console.log({ width });

addEventListener('resize', () => {
  width = window.innerWidth;
  if (width >= 768) {
    mainNav.classList.remove('close-menu');
  }
  width>=768 ?mainNav.classList.remove("close-menu") : mainNav.classList.add("close-menu") 
});

//******************************************Animaciones al observar las secciones principales
setMenuObserver();
window.addEventListener('resize', () => {
  setMenuObserver();
});

//**************************************Animaciones varias
let highOfPage = window.scrollY;
console.log(window.scrollY);

setAnimation('.jumbotron-circle', 'from-grow-animation', {
  root: null,
  rootMargin: '0%',
});
setAnimation('.element-from-grow', 'from-grow-animation', {
  root: null,
  rootMargin: '0%',
});

setAnimation('.element-from-left', 'from-left-animation', {
  root: null,
  rootMargin: '0%',
});
setAnimation('.element-from-right', 'from-right-animation', {
  root: null,
  rootMargin: '0%',
});

resetAnimations('element-from-up', 'from-up-animation', highOfPage);

window.addEventListener('scroll', () => {
  highOfPage = window.scrollY;
  // resetAnimations('element-from-up', 'from-up-animation', highOfPage)
  resetAnimations('element-from-left', 'from-left-animation', highOfPage);
  resetAnimations('jumbotron-circle', 'from-grow-animation', highOfPage);

  resetAnimations('element-from-right', 'from-right-animation', highOfPage);
  resetAnimations('element-from-grow', 'from-grow-animation', highOfPage);
});

speedUpBubbles();
