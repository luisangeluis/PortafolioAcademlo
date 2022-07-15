
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
    // console.log(e);
    let valorScrollTop = this.scrollY;
    // console.log(valorScrollTop);
    valorScrollTop < 1 ? mainHeader.classList.remove('nav-effect',) : mainHeader.classList.add('nav-effect');

}));

//Animacion opciones de nav
//****************************

addEventListener('resize', () => {
    let width = window.innerWidth;
    if (width >= 768) {
        mainNav.classList.remove('show-menu');
    }
})

const mainMenuOptions = document.querySelectorAll('.main-menu .menu-item');

// console.log(mainMenuOptions);

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
            // console.log(entry.target);
            mainMenuOptions.forEach((option, i) => {

                let optionName = option.firstElementChild.href;
                optionName = optionName.slice(optionName.indexOf('#') + 1);

                option.firstElementChild.classList.remove('color-aqua', 'zoom-text')
                option.firstElementChild.classList.add('color-white')

                if (sectionName == optionName) {
                    option.firstElementChild.classList.remove('color-white');
                    option.firstElementChild.classList.add('color-aqua', 'zoom-text');
                }

            })

        }
    })
}

const observerSections = new IntersectionObserver(callbackSections, options);

mainSections.forEach(section => {
    observerSections.observe(section);
})

//Animacion from left
//****************************

// let screenWidth = getWidth();
// setRootMargin(screenWidth);

// function getWidth(){
//     let width = window.innerWidth;
//     return width;
// }
// function setRootMargin(width){
//     if(width>=1020){
//         rootMargin = '-400px';
//     }else{
//         rootMargin='-100px'
//     }
// }

// addEventListener('resize',()=>{
//     console.log('hola');
//     screenWidth =getWidth();
//     setRootMargin();
// })


const elementsFromLeft = document.querySelectorAll('.element-from-left');
const optionsLeft={
    // root: null,
    // rootMargin:'1000px'
    // threshold: 0.5,
    // root: document.querySelector('body'),
}


const cbElementsFromLeft = (entries)=> {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log(entry.target);

            entry.target.classList.add('from-left-animation');
        } else {
            entry.target.classList.remove('from-left-animation');

        }
    })
}

const observerElementsFromLeft = new IntersectionObserver(cbElementsFromLeft);

elementsFromLeft.forEach(element => {
    observerElementsFromLeft.observe(element);
})

//Animacion from right
//****************************
const elementsFromRight = document.querySelectorAll('.element-from-right');
const optionsRight = {
    // root: null,
    // rootMargin
    // threshold: 1
}

const cbElementsFromRight = (entries)=> {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log(entry.target);

            entry.target.classList.add('from-right-animation');
        } else {
            entry.target.classList.remove('from-right-animation');

        }
    })
}

const observerElementsFromRight = new IntersectionObserver(cbElementsFromRight);

elementsFromRight.forEach(element => {
    observerElementsFromRight.observe(element);
})

//Animacion from up
//****************************
const elementsFromUp = document.querySelectorAll('.element-from-up');
console.log(elementsFromUp);
const cbElementsFromUp = (entries)=> {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log(entry.target);

            entry.target.classList.add('from-up-animation');
        } else {
            entry.target.classList.remove('from-up-animation');

        }
    })
}

const observerElementsFromUp = new IntersectionObserver(cbElementsFromUp);

elementsFromUp.forEach(element => {
    observerElementsFromUp.observe(element);
})






