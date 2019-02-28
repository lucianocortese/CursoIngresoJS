function mostrar()
{

	var contador;
	var positivo;
	var negativo;

	contador=0;
	positivo=0;
	negativo=1;

	var respuesta='si';

	while (respuesta != "no") {
		
		num = prompt("Ingrese el numero");
		num = parseInt (num);
		contador=contador+1;
		respuesta= prompt ("Para salir ingrese no");
		
			if (num<0)
			{
				negativo= negativo * num;
			}
			else
			{
				positivo=positivo + num;
			}

	}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN