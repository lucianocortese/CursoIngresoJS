/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
var b
var h
b= document.getElementById("Ancho").value;
h= document.getElementById("Largo").value;
var perimetro
perimetro = (b*2 + h*2)

alert("Necesitas"+ perimetro*3 + "m de alambre")

}
function Circulo () 
{
var rad
rad=document.getElementById("Radio").value;
var perimetro2;
perimetro2= 2 * Math.PI * rad ;

alert("Necesitas " + perimetro2*3 + "m de alambre");
}
function Materiales () 
{
    var b
    var h
    b= document.getElementById("Ancho").value;
    h= document.getElementById("Largo").value;
    var area;
    area= b*h;
    var cemento;
    cemento = area * 2;
    var cal;
    cal= area *3;

    alert("Necesitas " + cemento+ "bolsas de cemento y "+ cal + "bolosas de calr")

}