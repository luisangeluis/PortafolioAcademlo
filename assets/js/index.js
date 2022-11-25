import { setAnimation,resetAnimations } from './animations.js';

const btnMenu = document.querySelector(".btn-nav");
const mainNav = document.querySelector(".main-nav");
let width = window.innerWidth;
console.log({width});


//****************************************Abrir y cerrar menu principal
btnMenu.addEventListener("click", (e) => {
  mainNav.classList.toggle("show-menu");
});

//
//******************************************Hacer transparente el menu al hacer scroll
const mainHeader = document.querySelector(".main-header .contenedor");

window.addEventListener("scroll", (e) => {
  mainHeader.classList.add('bg-transparent');

  setTimeout(() => {
    mainHeader.classList.remove('bg-transparent');

  }, (1300));
});


//******************************************Cerrar el panel del menu cuando la pantalla se hace grande
console.log({ width });

addEventListener("resize", () => {
  width = window.innerWidth;
  if (width >= 768) {
    mainNav.classList.remove("show-menu");
  }
});

//******************************************Animaciones al observar las secciones principales
const mainMenuOptions = document.querySelectorAll(".main-menu .menu-item");
let mainSections = document.querySelector("main").children;

mainSections = Array.from(mainSections);

let options={}

if(width<576){
  options = {
    root: null,
    threshold: .15,
    rootMargin:'-10%'
  
  };
}
else{
  
  options = {
    root: null,
    threshold: .25,
    rootMargin:'-20%'
  
  };
}


const callbackSections = (entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      let sectionName = entry.target.id;

      mainMenuOptions.forEach((option, i) => {
        let optionName = option.firstElementChild.href;

        optionName = optionName.slice(optionName.indexOf("#") + 1);

        option.firstElementChild.classList.remove("color-orange", "zoom-text");
        option.firstElementChild.classList.add("color-white");

        if (sectionName == optionName) {
          option.firstElementChild.classList.remove("color-black");
          option.firstElementChild.classList.add("color-orange", "zoom-text");
        }
      });
    }
  });
};

const observerSections = new IntersectionObserver(callbackSections, options);

mainSections.forEach((section) => {
  observerSections.observe(section);
});
//**************************************Animaciones varias
let highOfPage = window.scrollY;

// if (width < 992) {
//   setAnimation('.element-from-up', 'from-up-animation', '-10%')
//   setAnimation('.element-from-left', 'from-left-animation', '-10%')
//   setAnimation('.element-from-right', 'from-right-animation', '-10%')
//   setAnimation('.element-from-grow', 'from-grow-animation', '-10%')


// }
// else {
//   setAnimation('.element-from-up', 'from-up-animation', '-50% 0%')
//   setAnimation('.element-from-left', 'from-left-animation', '-50% 0%')
//   setAnimation('.element-from-right', 'from-right-animation', '-50% 0%')
//   setAnimation('.element-from-grow', 'from-grow-animation', '-50% 0%')

// }

setAnimation('.jumbotron-circle','from-grow-animation',{root:null,rootMargin:'0%'});
setAnimation('.element-from-left','from-left-animation',{root:null,rootMargin:'0%'});
setAnimation('.element-from-right','from-right-animation',{root:null,rootMargin:'0%'});

resetAnimations('element-from-up', 'from-up-animation', highOfPage);

window.addEventListener('scroll', () => {
  highOfPage = window.scrollY;
  resetAnimations('element-from-up', 'from-up-animation', highOfPage)
})



