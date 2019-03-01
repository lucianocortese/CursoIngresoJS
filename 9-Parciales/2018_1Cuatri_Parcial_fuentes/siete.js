function mostrar()
{
    var nota
    var sexo
    var contador
    var sumaNotas
    var promedioNotas
    var notaMin
    var sexoNotaMin
    var contadorMMayor6
    
    sumaNotas=0
    contador=0
    contadorMMayor6=0
    

    while (contador<5)
    {
        nota=prompt("Ingrese nota")
        nota=parseInt (nota)
        sexo=prompt ("Ingrese sexo f o m")
        while (nota<0 || nota>10)
        {
            nota= prompt("Agregue nuevamente una nota entre 0 y 10")
        }
        while (sexo!="f"&& sexo!="m")
        {
            sexo=prompt ("solo puede ser f o m")
        }

        sumaNotas=sumaNotas+nota
        contador++
        if(contador==0 || nota<=notaMin)
        {   
            notaMin=nota
            sexoNotaMin=sexo        
        }

    }
    promedioNotas=sumaNotas/contador

    console.log ("El promedio de notas es"+ promedioNotas)
    console.log ("la nota minima es"+ notaMin + "y su sexo es"+sexoNotaMin)

}
