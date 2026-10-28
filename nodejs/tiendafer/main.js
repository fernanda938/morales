
const boleta = require("./boleta");
const factura = require("./factura");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el nombre del producto: ", (producto) => {
    rl.question("Ingrese el monto total: ", (monto) => {
        rl.question("Tipo de comprobante (boleta/factura): ", (tipo) => {
            monto = Number(monto);

            if (!Number.isFinite(monto) || monto <= 0) {
                console.log("Ingrese un monto válido.");
            } else if (tipo.toLowerCase() === "boleta") {
                boleta(producto, monto);
            } else if (tipo.toLowerCase() === "factura") {
                factura(producto, monto);
            } else {
                console.log("Tipo de comprobante no válido.");
            }

            rl.close();
        });
    });
});
