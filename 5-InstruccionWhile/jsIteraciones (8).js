function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	
	var respuesta='si';
	while (respuesta == "si") {
		
		num = prompt("Ingrese el numero")
		num = parseInt (num)
		contador=contador+1
		respuesta= prompt ("Quiere ingresar otro numero (complete con si o no)");
		
			if (num<0)
			{
				negativo= negativo * num
			}
			else
			{
				positivo=positivo + num
			}

	}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN