/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    var numero1;
    numero1= document.getElementById ("importe").value;//sueldo asignado;
    var numeroNuevo1 //string a numero;
    numeroNuevo1 = parseInt (numero1)
    var descuento;
    var oferta //descuento del 25 porciento
    oferta = 0.75;
    descuento = numeroNuevo1 * oferta;
    document.getElementById ("resultado").value = descuento;
}
