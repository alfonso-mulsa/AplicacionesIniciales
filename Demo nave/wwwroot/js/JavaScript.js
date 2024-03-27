let modifier = 50;
window.addEventListener('keydown', (e) => {
    let elementoCuadrado = document.getElementById("cuadrado");
    let posicionCuadrado = elementoCuadrado.getBoundingClientRect();
    let vertical = posicionCuadrado.top;
    let horizontal = posicionCuadrado.left;
    switch (e.code) {
        case 'ArrowUp': vertical -= modifier; break;
        case 'ArrowDown': vertical += modifier; break;
        case 'ArrowLeft': horizontal -= modifier; break;
        case 'ArrowRight': horizontal += modifier; break;
        case 'Space': dispara();
    }
    elementoCuadrado.style.top = vertical + 'px';
    elementoCuadrado.style.left = horizontal + 'px';
});

function dispara() {
    let elementoCuadrado = document.getElementById("cuadrado");
    let posicionCuadrado = elementoCuadrado.getBoundingClientRect();
    let vertical = posicionCuadrado.top;
    let horizontal = posicionCuadrado.left;
    horizontal += 37;
    vertical -= 95;

    let elementoDisparo = document.getElementById("disparo");
    elementoDisparo.style.left = horizontal + 'px';
    elementoDisparo.style.top = vertical + 'px';
}



