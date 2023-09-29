const sections = document.querySelectorAll('main > section');
let menuItems = document.querySelectorAll('.main-menu .menu-item');
let options = {};

menuItems = Array.from(menuItems);

const setMenuObserver = () => {
  let width = window.innerWidth;
  // console.log({width});
  const cbSections = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const currentItem = menuItems.find(
          (item) => item.dataset.url === entry.target.id
        );
        currentItem.firstElementChild.classList.add(
          'active',
          'color-orange',
          'zoom-text'
        );
        for (const item of menuItems) {
          if (item != currentItem) {
            item.firstElementChild.classList.remove(
              'active',
              'color-orange',
              'zoom-text'
            );
            item.firstElementChild.classList.add('color-white');
          }
        }
      }
    });
  };
  if (width < 576) {
    options = {
      root: null,
      threshold: 0.15,
      rootMargin: '-15% 0%',
    };
  } else {
    options = {
      root: null,
      threshold: 0.35,
      rootMargin: '-15%',
    };
  }

  const obserSections = new IntersectionObserver(cbSections, options);

  sections.forEach((section) => obserSections.observe(section));
};
export { setMenuObserver };
