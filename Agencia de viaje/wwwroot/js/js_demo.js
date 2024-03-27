// Crear una lista de edades tal y como se ha mostrado.
let listaEdades = [55, 9, 15, 44, 18, 32, 12, 23, 85, 9, 19, 68, 22, 6, 57, 61, 12, 17, 36, 43, 13, 29];

// Mostrar aquellos que tienen más de 18 años
document.write('Mayores de 18: <b>');
let hayDatos = false;
for (contador = 0; contador < listaEdades.length; contador++) {
    if (listaEdades[contador] > 18) {
        if (!hayDatos) {
            hayDatos = !hayDatos;
        } else {
            document.write(", ");
        }
        document.write(listaEdades[contador]);
    }
}
document.write("</b><br \>");

// Mostrar aquellos cuya edad sea par (elemento % 2 == 0)
document.write("Edades pares: <b>");
hayDatos = false;
for (contador = 0; contador < listaEdades.length; contador++) {
    if (listaEdades[contador] % 2 == 0) {
        if (!hayDatos) {
            hayDatos = !hayDatos;
        } else {
            document.write(", ");
        }
        document.write(listaEdades[contador]);
    }
}
document.write("</b><br \>");

// Mostrar aquellos que sean divisibles por tres.
document.write("Edades múltiplos de 3: <b>");
hayDatos = false;
for (contador = 0; contador < listaEdades.length; contador++) {
    if (listaEdades[contador] % 3 == 0) {
        if (!hayDatos) {
            hayDatos = !hayDatos;
        } else {
            document.write(", ");
        }
        document.write(listaEdades[contador]);
    }
}
document.write("</b><br \>");

// Crear una lista de nombres con el siguient contenido: pepe, juan, ana, maria, luis
let listaNombres = ["pepe", "juan", "ana", "maria", "luis", "ivo", "andrés", "josé", "alberto"];

//Mostrar todos los nombres.
document.write("Lista de nombres: <b>");
hayDatos = false;
for (contador = 0; contador < listaNombres.length; contador++) {
    if (!hayDatos) {
        hayDatos = !hayDatos;
    } else {
        document.write(", ");
    }
    document.write(listaNombres[contador]);
}
document.write("</b><br \>");

// Mostrar la longitud del array de nombres: nombrearray.length
document.write("Hay <b>" + listaNombres.length + "</b> nombres. <br \>");

// Mostrar aquellos nombres que tengan como longitud 4 o más.
const numLetras = 5;
document.write("Nombres de <b>" + numLetras + "</b> ó más letras: <b>");
hayDatos = false;
for (contador = 0; contador < listaNombres.length; contador++) {
    if (listaNombres[contador].length >= numLetras) {
        if (!hayDatos) {
            hayDatos = !hayDatos;
        } else {
            document.write(", ");
        }
        document.write(listaNombres[contador]);
    }
}

document.write("</b><br \>");

//Sacar los nombres pero en mayusculas
// https://developer.mozilla.org/es/docs/Learn/JavaScript/First_steps/Useful_string_methods
document.write("Lista de nombres: <b>");
hayDatos = false;
for (contador = 0; contador < listaNombres.length; contador++) {
    if (!hayDatos) {
        hayDatos = !hayDatos;
    } else {
        document.write(", ");
    }
    document.write(listaNombres[contador].toUpperCase());
}

document.write("</b><br \>");