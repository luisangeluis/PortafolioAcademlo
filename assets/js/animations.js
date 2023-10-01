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
        entry.target.classList.add(animationClass);
      }
    });
  };

  const observerElements = new IntersectionObserver(cbElements, options);
  elements.forEach((element) => observerElements.observe(element));
};

//Quita la animacion a un elemento cuando llega al top de la pagina.
function resetAnimations(animatedElement, classToRemove, highOfPage) {
  const elements = document.querySelectorAll(`.${animatedElement}`);

  if (highOfPage === 0) {
    elements.forEach((element) => element.classList.remove(classToRemove));
  }
}

function animatedHeader(currentScrollTop, lastScrollTop, mainHeader) {
  if (currentScrollTop > 50) {
    if (currentScrollTop > lastScrollTop) {
      // console.log('bajando', { currentScrollTop });
      // mainHeader.style.height = '0';
      mainHeader.classList.remove('height-5');

      mainHeader.classList.add('height-0');
    } else {
      // console.log('subiend', { currentScrollTop });
      // mainHeader.style.height = '5rem';
      mainHeader.classList.remove('height-0');

      mainHeader.classList.add('height-5');
    }
  }
}

export { setAnimation, resetAnimations, animatedHeader };
