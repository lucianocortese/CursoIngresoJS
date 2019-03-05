function mostrar()
{
    var precio;
    var descuento;
    var precioFinal;

    precio = prompt ( "indique el precio");
    descuento = prompt ("Indique el porcentaje de descuento");
    precio = parseInt (precio);
    descuento = parseInt (descuento);
    precioFinal = precio*((100-descuento)/100);
    console.log (precioFinal);

    document.getElementById("elPrecioFinal").value=precioFinal;
}
