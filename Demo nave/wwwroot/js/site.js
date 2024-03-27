// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
let boton = document.getElementById("Boton");
boton.addEventListener("mouseover", mueveBoton, false);

function mueveBoton() {
    let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) - 100;
    let vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0) - 100;
    let posX = getRandomInt(0, vw);
    let posY = getRandomInt(0, vh);
    boton.style.left = posX+'px';
    boton.style.top = posY+'px';
} 

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}