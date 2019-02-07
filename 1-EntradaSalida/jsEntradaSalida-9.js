/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var numero1;
    numero1= document.getElementById ("sueldo").value;
    var numeroNuevo1 //string a numero;
    numeroNuevo1 = parseInt (numero1)
    var aumento;
    var partiarias//aumento del 10 porciento
    paritarias= 1.10
    aumento = numeroNuevo1 * paritarias
    document.getElementById ("resultado").value = aumento
    
}
