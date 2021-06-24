//* header Selection 

const header = document.querySelector('.header');
const hamburger = document.querySelector('.hamburger');
const quickNav = document.querySelector('.navlinks');

window.addEventListener('scroll', ()=>{
    header.classList.toggle('sticky', scrollY > 0);
});

hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle('cross');
    quickNav.classList.toggle('show-nav');
});



