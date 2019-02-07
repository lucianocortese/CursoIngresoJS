/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var numero1;
    numero1= document.getElementById ("numeroDividendo").value
    var numero2;
    numero2= document.getElementById("numeroDivisor").value;
    var numeroNuevo1;
    var numeroNuevo2;
    numeroNuevo1 = parseInt(numero1);
    numeroNuevo2 = parseInt(numero2);
    var division;
    division = numeroNuevo1 / numeroNuevo2;
    var resto
    resto = numeroNuevo1 % numeroNuevo2;
    alert("el resto es " + resto)
}
