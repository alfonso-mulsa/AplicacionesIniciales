document.write("<p>An incredibly <strong>really</strong> very long greeting to the world<\p>");
//alert("An incredibly really very long greeting to the world");

nombre = "Alfonso";
numeroDeOrejas = 2;
alumno = true;

numeroDeOrejasPorClase = numeroDeOrejas * 10;
document.write("<br \>");
document.write("En la clase de " + nombre + " hay " + numeroDeOrejasPorClase + " orejas.");

if (alumno) {
    document.write("<br \>");
    document.write("alumno cierto");
    document.write("<br \>");
    document.write("La suma es: " + suma(8,9,10));
    document.write("<br \>");
    document.write("La suma es: " + suma(8,100,66));
    document.write("<br \>");
    document.write("La suma es: " + suma(8));
}

if (numeroDeOrejasPorClase == 20) {
    document.write("<br \>");
    document.write("orejas 20");
}

if (numeroDeOrejasPorClase > 39 && numeroDeOrejasPorClase < 50) {
    document.write("<br \>");
    document.write("orejas bien");
}

function suma() {
    total = 0;
    for (contador = 0; contador < arguments.length; contador++) {
        total += arguments[contador];
    }
    return total;
}

document.write("<br \>");
conjuntoNumeros = [25, 33, 29, 154, 64, 73, 88, 31, 15];
for (contador = 0; contador < conjuntoNumeros.length; contador++) {
    document.write(conjuntoNumeros[contador]);
    if (contador < conjuntoNumeros.length - 1) {
        document.write(" / ");
    }
}