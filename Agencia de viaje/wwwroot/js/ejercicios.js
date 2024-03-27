// Comprobar edad
document.getElementById("idEdadBoton").addEventListener("click", comprobarEdad, false);
function comprobarEdad() {
    let edad = parseInt(document.getElementById("idEdad").value, 10);
    console.log(edad);
    if (edad >= 18) {
        document.getElementById("idEdadSalida").style.backgroundColor = "green";
    } else {
        document.getElementById("idEdadSalida").style.backgroundColor = "red";
    }
}

// Mayor menor
document.getElementById("idMayorMenorBoton").addEventListener("click", comprobarMayorMenor, false);
function comprobarMayorMenor() {
    let numero1 = parseInt(document.getElementById("idMayorMenorNumero1").value, 10);
    let numero2 = parseInt(document.getElementById("idMayorMenorNumero2").value, 10);
    console.log(numero1 + " - " + numero2);
    if (numero1 > numero2) {
        window.alert("El número 1 es mayor que el número 2");
    }
    if (numero1 < numero2) {
        window.alert("El número 1 es menor que el número 2");
    }
    if (numero1 == numero2) {
        window.alert("El número 1 es igual al número 2");
    }
}

// Lista de nombres
document.getElementById("idListaNombresBoton").addEventListener("click", anadirNombreALista, false);
function anadirNombreALista() {
    let elementoLista = document.getElementById("idListadoDeNombres");
    let nombre = document.getElementById("idNuevoNombre").value;
    let nuevoElementoLista = document.createElement("li");
    nuevoElementoLista.textContent = nombre;
    elementoLista.appendChild(nuevoElementoLista);
}

// Letra del DNI
const listaLetrasDni = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];
document.getElementById("idLetraDniBoton").addEventListener("click", calculaLetraDni, false);
function calculaLetraDni() {
    let numDni = parseInt(document.getElementById("idNumeroDni").value, 10);
    let posLetraDni = numDni % 23;
    let letraDni = listaLetrasDni[posLetraDni];
    document.getElementById("idLetraDniSalida").textContent = "Letra del DNI: " + letraDni;
}

// Pirámide
for (contador = 1; contador <= 30; contador++) {
    let texto = "";
    for (contador2 = 0; contador2 < contador; contador2++) {
        texto += contador;
    }
    let nuevoElementoTexto = document.createElement("p");
    nuevoElementoTexto.textContent = texto;
    document.getElementById("idPiramideSalida").appendChild(nuevoElementoTexto);
}

// Mútliplos de 4 y 9
for (contador = 1; contador <= 100; contador++) {
    let texto = contador;
    let resto4 = contador % 4;
    let resto5 = contador % 5;
    let resto9 = contador % 9;
    if (resto4 == 0) {
        texto += " (Múltiplo de 4)";
    }
    if (resto9 == 0) {
        texto += " (Múltiplo de 9)";
    }
    let nuevoElementoTexto = document.createElement("p");
    nuevoElementoTexto.textContent = texto;
    document.getElementById("idMultiplosSalida").appendChild(nuevoElementoTexto);
    if (resto5 == 0) {
        let nuevoElementoTexto = document.createElement("hr");
        document.getElementById("idMultiplosSalida").appendChild(nuevoElementoTexto);
    }
}

// background color aleatorio
document.getElementById("idCambiarFondoBoton").addEventListener("change", cambiarFondo, false);
var idIntervalo1 = 0;
function numeroAleatorio(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
function cambioFondoAleatorio() {
    document.body.style.backgroundColor = "rgb(" + numeroAleatorio(0, 250) + "," + numeroAleatorio(0, 250) + "," + numeroAleatorio(0, 250) + ")";
}
function cambiarFondo() {
    let estadoBoton = document.getElementById("idCambiarFondoBoton").checked;
    if (estadoBoton) {
        idIntervalo1 = setInterval(cambioFondoAleatorio, 1000);
    } else {
        clearInterval(idIntervalo1);
    }
    
}
