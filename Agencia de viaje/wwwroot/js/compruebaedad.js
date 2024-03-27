document.getElementById("idBoton").addEventListener("click", comprobarEdad, false);
function comprobarEdad() {
    let edad = parseInt(document.getElementById("idEdad").value, 10);
    console.log(edad);
    if (edad >= 18) {
        document.getElementById("idSalida").style.backgroundColor = "green";
    } else {
        document.getElementById("idSalida").style.backgroundColor = "red";
    }
}