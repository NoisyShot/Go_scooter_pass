`use strict`
window.addEventListener(`DOMContentLoaded`, () =>{

//slides 
const slides = document.querySelectorAll(`.slide__image`),
      prev  = document.querySelector(`.slides__group-prev`),
      next = document.querySelector(`.slides__group-next`);

let slideIndex = 0;

function showSlides(n){
   if (n==0){
      prev.style.opacity= `50%`;
   } else {
      prev.style.opacity= `inherit`;
   }
   if (n==3){
      next.style.opacity= `50%`;
   } else {
      next.style.opacity= `inherit`;
   }
   slides.forEach (item => item.style.display =`none`);
   slides[n].style.display = `block`;
} 

function plusSlides (n) {
   if (n<-1) {
      slideIndex = 0;
   }
   if (n>3) {
      slideIndex =3;
   }
   if (n>-1 && n<4){
   showSlides(n);
   }
}
prev.addEventListener(`click`, ()=> {
   plusSlides(--slideIndex)
})
next.addEventListener(`click`, ()=> {
   plusSlides(++slideIndex)
})
});




// $(window).on("scroll", function() {
//    // Если высота больше 200px 
//    // Добавляем классу header класс fixed
//      if ($(window).scrollTop() > 200) $('.header').addClass('fixed');
//    // Иначе удаляем класс fixed
//            else $('.header').removeClass('fixed');
//      });