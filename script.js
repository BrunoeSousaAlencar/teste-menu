const humburger = document.querySelector('#humburger');
const navMenu = document.querySelector('#menu-ativo');

humburger.addEventListener("click", () =>{
    humburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

