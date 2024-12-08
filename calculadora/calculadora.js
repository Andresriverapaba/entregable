
let num1, num2;
let operacion;

function realizarOperacion(num1, num2, operacion) {
    if (operacion === "suma") {
        return num1 + num2;
    } else if (operacion === "resta") {
        return num1 - num2;
    } else if (operacion === "multiplicacion") {
        return num1 * num2;
    } else if (operacion === "division") {
        if (num2 === 0) {
            return "Error: División por cero no permitida.";
        }
        return num1 / num2;
    } else {
        return "Operación no válida.";
    }
}

let continuar = true;

while (continuar) {
    num1 = parseFloat(prompt("Ingresa el primer número:"));
    num2 = parseFloat(prompt("Ingresa el segundo número:"));
    operacion = prompt("Ingresa la operación (suma, resta, multiplicacion, division) o escribe 'salir' para terminar:");

    if (operacion.toLowerCase() === "salir") {
        continuar = false;
        console.log("Gracias por usar la calculadora. ¡Hasta pronto!");
    } else {
        const resultado = realizarOperacion(num1, num2, operacion.toLowerCase());
        console.log(`El resultado de la operación ${operacion} es: ${resultado}`);
    }
}
