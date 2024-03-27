let aleatorio = Math.floor(Math.random() * 100);
let elementoBoton = document.getElementById("boton");
elementoBoton.addEventListener("click", compruebaNumero, false);

function compruebaNumero() {
    let elementoTexto = document.getElementById("nunImtroducido");
    let elementoEtiqueta = document.getElementById("etiqueta");
    let texto = elementoTexto.value;
    let valor = parseInt(texto, 10);
    console.log("Aleatorio: " + aleatorio);
    console.log("Valor: " + valor);
    if (valor > aleatorio) {
        let elementoDiv = document.getElementById("salida");
        elementoDiv.className = "rojo";
        elementoEtiqueta.textContent = "El número introducido es mayor.";
    }
    if (valor < aleatorio) {
        let elementoDiv = document.getElementById("salida");
        elementoDiv.className = "rojo";
        elementoEtiqueta.textContent = "El número introducido es menor.";
    }
    if (valor == aleatorio) {
        let elementoDiv = document.getElementById("salida");
        elementoDiv.className = "verde";
        elementoEtiqueta.textContent = "El número introducido es OK.";
    }

    // document.write("El número metido es: " + texto);
}

//document.write("El número es: " + aleatorio);
