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

//Animacion from up
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
      // else {
      //   entry.target.classList.remove(animationClass);
      //   console.log('no esta intersectado');

      // }

    });
  };

  const observerElements = new IntersectionObserver(cbElements, options);
  elements.forEach(element=>observerElements.observe(element))
}

let width =window.innerWidth;

if(width<992){
  setAnimation('.element-from-up','from-up-animation','-30%')
  setAnimation('.element-from-left','from-left-animation','-30%')
  setAnimation('.element-from-right','from-right-animation','-30%')

}
else{
  setAnimation('.element-from-up','from-up-animation','-50%')
  setAnimation('.element-from-left','from-left-animation','-50%')
  setAnimation('.element-from-right','from-right-animation','-50%')

}
window.addEventListener('resize',()=>{
  width =window.innerWidth

  if(width<992){
    setAnimation('.element-from-up','from-up-animation','-30%')
    setAnimation('.element-from-left','from-left-animation','-30%')
    setAnimation('.element-from-right','from-right-animation','-30%')

  }else{
    setAnimation('.element-from-up','from-up-animation','-50%')
    setAnimation('.element-from-left','from-left-animation','-50%')
    setAnimation('.element-from-right','from-right-animation','-50%')

  }
})
