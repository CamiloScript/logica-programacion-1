var prompt = require('prompt-sync')();

// Solicitar al usuario 3 números y guardarlos en variables.
let numero1 = parseFloat(prompt("Ingresa el primer número : "));
let numero2 = parseFloat(prompt("Ingresa el segundo número : "));
let numero3 = parseFloat(prompt("Ingresa el tercer número : "));

// Verificar si los números son iguales, y en caso de que lo sean poder enviar un mensaje indicando que todos los numeros son iguales.
if (numero1 === numero2 && numero2 === numero3) {
    console.log("Todos los números ingresados son iguales. " + numero1 + ", " + numero2 + ", " + numero3);
} else {
    // Crear un array con los números.
    let numeros = [numero1, numero2, numero3];

    // Ordenar los números de mayor a menor.
    numeros.sort(function(a, b) {
        return b - a;
    });

    // Imprimir los números ordenados de mayor a menor.
    console.log("Los numeros ingresados, ordenados de mayor a menor son : " + numeros);

    // Imprimir los números ordenados de menor a mayor.
    console.log("Los numeros ingresados, ordenados de menor a mayor son : " + numeros.reverse());
}
