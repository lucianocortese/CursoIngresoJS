function mostrar()
{
var precio
var descuento
precio=prompt("aclare el precio del producto")
descuento=prompt("aclare el porcentaje de descuento del producto")
var precioNum;
var descuentoNum;
precioNum = parseInt(precio);
descuentoNum = parseInt(descuento);
var descMultiplicable;
descMultiplicable = (100-descuentoNum)/100;
//tengo los datos del cliente pasados a numero
var resultado;
resultado= precioNum * descMultiplicable;
document.getElementById("elPrecioFinal").value=resultado;
}
