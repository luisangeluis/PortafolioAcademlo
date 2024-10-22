const bubbles = Array.from(document.querySelectorAll('.burbuja')) 
const speedUpBubbles=()=>{

  window.addEventListener('scroll',()=>{
    // console.log('hola');
    // console.log(bubbles.target)
    // console.log(bubbles[1]);

    bubbles.forEach(bubble=>{
      bubble.classList.add('shadow');
    }); 
    setTimeout(()=>{
      bubbles.forEach(bubble=>{
        bubble.classList.remove('shadow');
      });
    },2000)
     
  })
}
export{
  speedUpBubbles
}