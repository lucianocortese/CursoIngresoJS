function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var num
	num = Math.floor(Math.random() *10 + 1)
	if(num>=9)
	{
		alert(num + "_EXELENTE")
	}
	else
	{
		if (num>4)
		{
			alert(num + "_APROBADO")
		}
		else 
		{
			alert (num + "_Vamos, la proxima se puede")
		}

	}
}//FIN DE LA FUNCIÓN