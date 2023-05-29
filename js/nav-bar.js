//elegir las etiquetas
const hamButton = document.querySelector(".ham");
const navMenu = document.querySelector(".nav-menu");

//luego crear la funcion toogle y insertar
hamButton.addEventListener('click', () =>{
 navMenu.classList.toggle('toggle');
})
