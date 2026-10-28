
function factura(producto, total) {
    let subtotal = total / 1.18;
    let igv = total - subtotal;

    console.log("===== FACTURA =====");
    console.log("Producto:", producto);
    console.log("Subtotal: S/", subtotal.toFixed(2));
    console.log("IGV (18%): S/", igv.toFixed(2));
    console.log("Monto total: S/", total.toFixed(2));
}

module.exports = factura;
