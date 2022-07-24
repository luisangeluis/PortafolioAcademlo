//Boton menu
const btnMenu = document.querySelector(".btn-nav");
const mainNav = document.querySelector(".main-nav");

btnMenu.addEventListener("click", (e) => {
  mainNav.classList.toggle("show-menu");
  // mainHeader.classList.add('bg-gray')
});

//Animacion nav al hacer scroll
//****************************
const mainHeader = document.querySelector(".main-header .contenedor");
window.addEventListener("scroll", (e) => {
  // console.log(e);
  let valorScrollTop = this.scrollY;
  // console.log(valorScrollTop);
  valorScrollTop < 1
    ? mainHeader.classList.remove("nav-effect")
    : mainHeader.classList.add("nav-effect");
});

//Animacion opciones de nav
//****************************

addEventListener("resize", () => {
  let width = window.innerWidth;
  if (width >= 768) {
    mainNav.classList.remove("show-menu");
  }
});

const mainMenuOptions = document.querySelectorAll(".main-menu .menu-item");

// console.log(mainMenuOptions);

let mainSections = document.querySelector("main").children;
mainSections = Array.from(mainSections);

// console.log(typeof mainSections);

options = {
  root: null,
  rootMargin: "-50% 0%",
};

const callbackSections = (entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      let sectionName = entry.target.id;
      // console.log(entry.target);
      mainMenuOptions.forEach((option, i) => {
        let optionName = option.firstElementChild.href;
        optionName = optionName.slice(optionName.indexOf("#") + 1);

        option.firstElementChild.classList.remove("color-aqua", "zoom-text");
        option.firstElementChild.classList.add("color-white");

        if (sectionName == optionName) {
          option.firstElementChild.classList.remove("color-white");
          option.firstElementChild.classList.add("color-aqua", "zoom-text");
        }
      });
    }
  });
};

const observerSections = new IntersectionObserver(callbackSections, options);

mainSections.forEach((section) => {
  observerSections.observe(section);
});

//Animations 
//*****************/
//*****************/
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

let width =window.innerWidth;

if(width<992){
  setAnimation('.element-from-up','from-up-animation','-10%')
  setAnimation('.element-from-left','from-left-animation','-10%')
  setAnimation('.element-from-right','from-right-animation','-10%')

}
else{
  setAnimation('.element-from-up','from-up-animation','-50% 0%')
  setAnimation('.element-from-left','from-left-animation','-50% 0%')
  setAnimation('.element-from-right','from-right-animation','-50% 0%')

}
window.addEventListener('resize',()=>{
  width =window.innerWidth

  if(width<992){
    setAnimation('.element-from-up','from-up-animation','-10%')
    setAnimation('.element-from-left','from-left-animation','-10%')
    setAnimation('.element-from-right','from-right-animation','-10%')

  }else{
    setAnimation('.element-from-up','from-up-animation','-50% 0%')
    setAnimation('.element-from-left','from-left-animation','-50% 0%')
    setAnimation('.element-from-right','from-right-animation','-50% 0%')

  }
})

let highOfPage =window.scrollY;
resetAnimations('element-from-up','from-up-animation',highOfPage);
// resetAnimations('element-from-left','from-right-animation',highOfPage);

window.addEventListener('scroll',()=>{
  highOfPage =window.scrollY;
  resetAnimations('element-from-up','from-up-animation',highOfPage)
  // resetAnimations('element-from-left','from-left-animation',highOfPage);

})

function resetAnimations(animatedElement,classToRemove,highOfPage){
  let high =highOfPage;

  const elements =document.querySelectorAll(`.${animatedElement}`)

  if(highOfPage===0){
    console.log(highOfPage);

    elements.forEach(element=>element.classList.remove(classToRemove));
  }

}

