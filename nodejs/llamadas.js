
const modulo = require("./calcularIMC");

const pesoPrueba = 70;
const alturaPrueba = 1.60;

console.log("IMC version 1.0");

const alumna = modulo.calcularIMC_1_0(pesoPrueba, alturaPrueba);
console.log(`El IMC es: ${alumna.toFixed(2)}`);

console.log("\nIMC version 2.0");

const alumna2 = modulo.calcularIMC_2_0(pesoPrueba, alturaPrueba);
console.log(`El IMC V2 es: ${alumna2.toFixed(2)}`);

console.log("\nIMC version 3.0");

modulo.calcularIMC_3_0(pesoPrueba, alturaPrueba);
