
/*BURGER MENU*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

let animacionMenuIcon = menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}