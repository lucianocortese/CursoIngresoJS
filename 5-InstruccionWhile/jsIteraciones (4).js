function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 9");
	numero=parseInt(numero);

	while (numero<0 || numero>9)
	{
		numero = prompt("no, pibe. entre 0 y 9 te dije");
	}

}//FIN DE LA FUNCIÓN