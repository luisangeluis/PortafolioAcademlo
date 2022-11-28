
//Setea una animacion a un elemento usando el observer
const setAnimation = (elementsToAnimate, animationClass, options) => {

  const elements = document.querySelectorAll(elementsToAnimate);

  // const options = {
  //   root: null,
  //   rootMargin,
  // };

  const cbElements = (entries) => {
    entries.forEach((entry) => {

      if (entry.isIntersecting) {
        entry.target.classList.add(animationClass)
      }

    });
  };

  const observerElements = new IntersectionObserver(cbElements, options);
  elements.forEach(element => observerElements.observe(element))
}

//Quita la animacion a un elemento cuando llega al top de la pagina.
function resetAnimations(animatedElement, classToRemove, highOfPage) {
  const elements = document.querySelectorAll(`.${animatedElement}`)

  if (highOfPage === 0) {
    elements.forEach(element => element.classList.remove(classToRemove));
  }
}

export{
  setAnimation,
  resetAnimations
}