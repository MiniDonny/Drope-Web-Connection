/*MODIFICADOR HTML*/
document.addEventListener('DOMContentLoaded', () => {
    bottonMenuHamburguesa();
});

const bottonMenuHamburguesa = document.querySelector('menu_hamburguesa');

bottonMenuHamburguesa.addEventListener('click', () =>{
    bottonMenuHamburguesa.classList.toggle('activo');
});
