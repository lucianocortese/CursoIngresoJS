/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
var far;
far = document.getElementById("Temperatura").value;
var cent;
cent= (far - 32)/1.80000
alert("los grados en centigrados son  "+ cent)
}

function CentigradosFahrenheit () 
{
	var cent;
    cent = document.getElementById("Temperatura").value;
    var far;
    far= (cent * 1.80000) + 32
    alert("los grados en farenheit son  "+ far)
}
