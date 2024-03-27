// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

const menu = document.querySelector('.menu-icon');
const linksDiv = document.querySelector('.links-div');

menu.addEventListener('click', () => {
    linksDiv.classList.toggle('active');

    // Si linksDiv tiene la clase 'active', cambiamos el ícono a 'times', si no, lo cambiamos a 'bars'
    if (linksDiv.classList.contains('active')) {
        menu.classList.remove('fa-bars');
        menu.classList.add('fa-times');
    } else {
        menu.classList.add('fa-bars');
        menu.classList.remove('fa-times');
    }
});