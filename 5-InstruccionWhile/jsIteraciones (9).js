function mostrar()
{

	var contador;
	var numeroMaximo;
	var numeroMinimo;
	var numeroIngresado;
	var respuesta;
	// declarar variables

	
	contador=0;
	respuesta='si';
	/*
	numeroMaximo= -9999;
	numeroMinimo= 9999;
	*/ 
	/*bandera=0; */

	while(respuesta!='no')
	{
		
		numeroIngresado= prompt ("Ingrese un numero")
		numeroIngresado= parseInt (numeroIngresado)
		
		if (contador==0)
		{
			numeroMaximo=numeroIngresado;
			numeroMinimo=numeroIngresado;
			
		}
		else{
				if(numeroIngresado>numeroMaximo)
			{
				numeroMaximo=numeroIngresado
			}

			if(numeroIngresado<numeroMinimo)
			{
				numeroMinimo=numeroIngresado
			}
			respuesta= prompt ("Para salir escriba: no")
	
			}
			contador++;
	}

console.log ("el maximo es "+ numeroMaximo);
console.log ("el minimo es "+ numeroMinimo);
document.getElementById("maximo").value=numeroMaximo;
document.getElementById("minimo").value=numeroMinimo;



}//FIN DE LA FUNCIÓN