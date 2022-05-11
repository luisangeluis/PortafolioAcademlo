
//Boton menu
const btnMenu = document.querySelector('.btn-nav');
const mainNav = document.querySelector('.main-nav');

btnMenu.addEventListener('click',(e)=>{
    mainNav.classList.toggle('show-menu')
})

//Animacion menu al hacer scroll
const mainHeader = document.querySelector('.main-header .contenedor');
window.addEventListener('scroll',(e=>{
    let valorScrollTop = this.scrollY;
    
    valorScrollTop<1 ? mainHeader.classList.remove('bg-gray',) :mainHeader.classList.add('bg-gray');

}));







