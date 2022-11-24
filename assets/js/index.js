let width =window.innerWidth;

//Boton menu
const btnMenu = document.querySelector(".btn-nav");
const mainNav = document.querySelector(".main-nav");

btnMenu.addEventListener("click", (e) => {
  mainNav.classList.toggle("show-menu");
});

//Animacion nav al hacer scroll
//****************************
const mainHeader = document.querySelector(".main-header .contenedor");

window.addEventListener("scroll", (e) => {
  // let valorScrollTop = this.scrollY;

  // if(valorScrollTop < 1){
  //   mainHeader.classList.remove("nav-effect");

  // }else{
  //   mainHeader.classList.add("nav-effect");
  
  // }
  mainHeader.classList.add('bg-transparent');

  setTimeout(() => {
    mainHeader.classList.remove('bg-transparent');

  }, (1300));
});

//Animacion opciones de nav
//****************************
console.log({width});

addEventListener("resize", () => {
  width = window.innerWidth;
  if (width >= 768) {
    mainNav.classList.remove("show-menu");
  }
});

const mainMenuOptions = document.querySelectorAll(".main-menu .menu-item");

let mainSections = document.querySelector("main").children;

mainSections = Array.from(mainSections);

let options = {}
addEventListener('resize',()=>{
  width = window.innerWidth;
  console.log({width});

  if(width<768){
    options = {
      root: null,
      threshold: .25
    
    };
  }else{
    options = {
      root: null,
      threshold: .80
    
    };
  }
})

if(width<768){
  options = {
    root: null,
    threshold: .25
  
  };
}else{
  options = {
    root: null,
    threshold: .80
  
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

// Animations 
// *****************/
// *****************/
const setAnimation = (elementsToAnimate, animationClass, rootMargin) => {

  const elements = document.querySelectorAll(elementsToAnimate);

  const options = {
    root: null,
    rootMargin,
    // threshold: 0.50
  };
  const cbElements = (entries) => {
    entries.forEach((entry) => {

      if (entry.isIntersecting) {
        entry.target.classList.add(animationClass)
      } 
      
    });
  };

  const observerElements = new IntersectionObserver(cbElements, options);
  elements.forEach(element=>observerElements.observe(element))
}


if(width<992){
  setAnimation('.element-from-up','from-up-animation','-10%')
  setAnimation('.element-from-left','from-left-animation','-10%')
  setAnimation('.element-from-right','from-right-animation','-10%')
  setAnimation('.element-from-grow','from-grow-animation','-10%')


}
else{
  setAnimation('.element-from-up','from-up-animation','-50% 0%')
  setAnimation('.element-from-left','from-left-animation','-50% 0%')
  setAnimation('.element-from-right','from-right-animation','-50% 0%')
  setAnimation('.element-from-grow','from-grow-animation','-50% 0%')

}
let highOfPage =window.scrollY;
resetAnimations('element-from-up','from-up-animation',highOfPage);

window.addEventListener('scroll',()=>{
  highOfPage =window.scrollY;
  resetAnimations('element-from-up','from-up-animation',highOfPage)


})

function resetAnimations(animatedElement,classToRemove,highOfPage){
  // let high =highOfPage;

  const elements =document.querySelectorAll(`.${animatedElement}`)

  if(highOfPage===0){
    console.log(highOfPage);

    elements.forEach(element=>element.classList.remove(classToRemove));
  }

}

