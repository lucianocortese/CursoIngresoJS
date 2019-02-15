function mostrar()
{
    var compra;
    compra= prompt ("Cuánto sale tu producto?");
    compra=parseInt (compra)
    var descuento;
    descuento = (compra*0.90);
    var precioIva;
    precioIva = (descuento*1.21);

    alert("tu compra es de $" + compra + ", tenes un descuento de 10%. Queda en $" + descuento + ", mas el iva es $" + precioIva);

}
