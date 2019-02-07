/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    var numero1;
    numero1= document.getElementById ("numeroUno").value
    var numero2;
    numero2= document.getElementById("numeroDos").value;
    var numeroNuevo1
    var numeroNuevo2 
    numeroNuevo1 = parseInt(numero1);
    numeroNuevo2 = parseInt(numero2);
    var resultado
    resultado = numeroNuevo1 + numeroNuevo2
    alert ("la suma es " + resultado)
}