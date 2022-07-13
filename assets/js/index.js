
//Boton menu
const btnMenu = document.querySelector('.btn-nav');
const mainNav = document.querySelector('.main-nav');

btnMenu.addEventListener('click', (e) => {
    mainNav.classList.toggle('show-menu')
    // mainHeader.classList.add('bg-gray')
})

//Animacion nav al hacer scroll
//****************************
const mainHeader = document.querySelector('.main-header .contenedor');
window.addEventListener('scroll', (e => {
    console.log(e);
    let valorScrollTop = this.scrollY;
    console.log(valorScrollTop);
    valorScrollTop < 1 ? mainHeader.classList.remove('nav-effect',) : mainHeader.classList.add('nav-effect');

}));

//Animacion opciones de nav
//****************************
// let width = window.innerWidth;
// if(width>=768){
//     mainNav.classList.remove(show-menu);
// }
addEventListener('resize',()=>{
    let width=window.innerWidth;
    if(width>=768){
        mainNav.classList.remove('show-menu');
    }
})

const mainMenuOptions = document.querySelectorAll('.main-menu .menu-item');

console.log(mainMenuOptions);

let mainSections = document.querySelector('main').children;
mainSections = Array.from(mainSections);

// console.log(typeof mainSections);

options = {
    root: null,
    rootMargin: '-50% 0%',
}

const callbackSections = (entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {

            let sectionName = entry.target.id;

            mainMenuOptions.forEach((option, i) => {
               
                let optionName = option.firstElementChild.href;
                optionName = optionName.slice(optionName.indexOf('#')+1);

                option.firstElementChild.classList.remove('color-aqua','zoom-text')
                option.firstElementChild.classList.add('color-white')
               
                if(sectionName == optionName){
                    option.firstElementChild.classList.remove('color-white');
                    option.firstElementChild.classList.add('color-aqua','zoom-text');
                }

            })

        }
    })
}

const observerSections = new IntersectionObserver(callbackSections, options);

mainSections.forEach(section => {
    observerSections.observe(section);
})


// console.log(mainMenuOptions);








