function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var num
	while (respuesta == "si") {
		
		num = prompt("Ingrese el numero que desea sumar")
		num = parseInt (num)
		acumulador = acumulador + num
		contador=contador+1
		respuesta= prompt ("Quiere ingresar otro numero (complete con si o no)");
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN