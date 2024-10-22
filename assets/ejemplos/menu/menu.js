const btnMenu = document.querySelector(".btn-menu");
const navbar = document.querySelector(".navbar");

btnMenu.addEventListener("click",()=>{
  console.log("click")
  
  navbar.classList.toggle("open-navbar");
});