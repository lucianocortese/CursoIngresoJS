function mostrar()
{

	var contador;
	var numero;
	var	sumaPositivo;
	var sumaNegativo;
	var contadorPositivo;
	var contadorNegativo;
	var contadorPares;
	var respuesta;
	//declarar contadores y variables

	respuesta="si";
	contador=0;
	sumaNegativo=0;
	sumaPositivo=0;
	contadorPositivo=0;
	contadorNegativo=0;
	contadorCero=0;
	contadorPares=0;
	

	while(respuesta!="no")
	{
		numero=prompt ("ingrese un numero");
		numero=parseInt(numero);
		respuesta=prompt ("Para salir escriba: no");

		if (numero == 0)
		{
			contadorCero++;
		}
		else
		{
			if(numero<0)
			{
				sumaNegativo= sumaNegativo + numero;
				contadorPositivo++;
			}
			else
			{
				sumaPositivo= sumaPositivo + numero;
				contadorNegativo++
			}
		}
		
	
		if (numero%2==0)
		{
			contadorPares++;
		}
	}

	console.log ("suma positivo "+ sumaPositivo);
	console.log ("suma negativo "+ sumaNegativo);
	console.log ("cantidad positivo "+ contadorPositivo);
	console.log ("cantidad negativo "+ contadorNegativo);
	console.log ("cantidad de ceros "+ contadorCero);
	console.log ("cantidad de pares "+ contadorPares);
	console.log ("el promedio de positivos es "+ sumaPositivo/contadorPositivo);
	console.log ("el promedio de negativos es "+ sumaNegativo/contadorNegativo);
	console.log ("la diferencia entre positivos y negativos "+ (sumaPositivo-sumaNegativo));





}//FIN DE LA FUNCIÓN