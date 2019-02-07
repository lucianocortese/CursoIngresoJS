/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var numero1;
    numero1= document.getElementById ("numeroUno").value
    var numero2;
    numero2= document.getElementById("numeroDos").value;
    var numeroNuevo1;
    var numeroNuevo2;
    numeroNuevo1 = parseInt(numero1);
    numeroNuevo2 = parseInt(numero2);
    var suma;
    suma = numeroNuevo1 + numeroNuevo2;
    alert("La suma es "+ suma)
	
}

function restar()
{
    var numero1;
    numero1= document.getElementById ("numeroUno").value
    var numero2;
    numero2= document.getElementById("numeroDos").value;
    var numeroNuevo1;
    var numeroNuevo2;
    numeroNuevo1 = parseInt(numero1);
    numeroNuevo2 = parseInt(numero2);
    var resta;
    resta = numeroNuevo1 - numeroNuevo2;
    alert("La resta es "+ resta)
}

function multiplicar()
{ 
    var numero1;
    numero1= document.getElementById ("numeroUno").value
    var numero2;
    numero2= document.getElementById("numeroDos").value;
    var numeroNuevo1;
    var numeroNuevo2;
    numeroNuevo1 = parseInt(numero1);
    numeroNuevo2 = parseInt(numero2);
    var multiplicacion;
    multiplicacion = numeroNuevo1 * numeroNuevo2;
    alert("La multiplicación es "+ multiplicacion)
}

function dividir()
{
    var numero1;
    numero1= document.getElementById ("numeroUno").value
    var numero2;
    numero2= document.getElementById("numeroDos").value;
    var numeroNuevo1;
    var numeroNuevo2;
    numeroNuevo1 = parseInt(numero1);
    numeroNuevo2 = parseInt(numero2);
    var division;
    division = numeroNuevo1 / numeroNuevo2;
    alert("La división es "+ division);
}

