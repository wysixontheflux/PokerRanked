let btn = document.querySelector ('#btn-nav1');
let nav = document.querySelector('#nav2');
let img = document.querySelector('#img1');

btn.addEventListener('click',() =>{
    nav.classList.toggle('active');
    btn.classList.toggle('active');
} );
