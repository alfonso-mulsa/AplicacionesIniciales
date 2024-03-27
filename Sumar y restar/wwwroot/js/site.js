// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
function cambiarFondo() {
    document.body.style.backgroundColor = 'rgb(' + getRandomInt(0, 255) + ',' + getRandomInt(0, 255) + ',' + getRandomInt(0, 255) + ')';
    console.log('Color fondo: ' + document.body.style.backgroundColor);
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
function operacion() {
    const source = event.target

    switch (source.id) {
        case "btnSumar":
            document.getElementById("valor").value = parseInt(document.getElementById("valor").value, 10) + 1;
            break;
        case "btnRestar":
            document.getElementById("valor").value = parseInt(document.getElementById("valor").value, 10) - 1;
            break;
    }
    cambiarFondo();
}
function doSomething() {
    const source = event.target;

    source.style.backgroundColor = 'rgb(' + getRandomInt(0, 255) + ',' + getRandomInt(0, 255) + ',' + getRandomInt(0, 255) + ')';
    source.style.color = 'rgb(' + getRandomInt(0, 255) + ',' + getRandomInt(0, 255) + ',' + getRandomInt(0, 255) + ')';

    let rgb = document.body.style.backgroundColor;
    rgb = rgb.substring(4, rgb.length - 1).replace(/ /g, '').split(',');
    switch (source.id) {
        case "btn_rojo":
            document.body.style.backgroundColor = 'rgb(' + getRandomInt(0, 255) + ',' + rgb[1] + ',' + rgb[2] + ')';
            break;
        case "btn_verde":
            document.body.style.backgroundColor = 'rgb(' + rgb[0] + ',' + getRandomInt(0, 255) + ',' + rgb[2] + ')';
            break;
        case "btn_azul":
            document.body.style.backgroundColor = 'rgb(' + rgb[0] + ',' + rgb[1] + ',' + getRandomInt(0, 255) + ')';
            break;
    }
    console.log('Color botón: ' + source.style.backgroundColor);
    console.log('Color texto: ' + source.style.color);
    console.log('Color fondo: ' + document.body.style.backgroundColor);
}

cambiarFondo();
document.getElementById("btnSumar").addEventListener("click", operacion, false);
document.getElementById("btnRestar").addEventListener("click", operacion, false);
console.log(document.getElementById('btnSumar').offsetWidth + ' x ' + document.getElementById('btnSumar').offsetHeight);
console.log(document.getElementById('btnRestar').offsetWidth + ' x ' + document.getElementById('btnRestar').offsetHeight);
