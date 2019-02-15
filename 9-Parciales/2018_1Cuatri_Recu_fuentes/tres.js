function mostrar()
{
var amigos;
var cuenta;
var cuentaPropina;

amigos=prompt("Cuantos amigos son?");
amigos=parseInt (amigos);
cuenta=prompt ("Cuanto tienen que pagar?");
cuenta= parseInt(cuenta);
cuentaPropina= cuenta*1.10;
var precioConIva;
precioConIva= cuentaPropina * 1.21;
var division;
division = precioConIva / amigos;

alert ("si son " + amigos + " amigos, y la cuenta es "+  cuenta + ", sumado el 10% de propina, quedan "+ cuentaPropina + ". Sumado el IVA: " + precioConIva + ". Cada amigo deberá pagar " + division)

}
/*Pedir por prompt el precio 
el porcentaje de descuento, 
mostrar: 1-el descuento en dinero, 2-el
precio con el descuento ,3-el IVA , todos los anteriores e un solo alert. 4-y solo el precio con descuento
más el IVA por id .
*/