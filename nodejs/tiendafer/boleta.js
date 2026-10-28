
function boleta(producto, monto) {
    console.log("===== BOLETA DE VENTA =====");
    console.log("Producto:", producto);
    console.log("Monto total: S/", monto.toFixed(2));
}

module.exports = boleta;
