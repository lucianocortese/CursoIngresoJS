function mostrar()
{
    var nota;
    var sexo;
    var contador;
    var suma
    var promedio;
    var menorNota;
    var sexoMenorNota;
    var aprobads;
    var contadorAprobados;
    
    contador=0;
    suma=0;
    contadorAprobados=0;

   
    while (contador < 5)
    {
        nota= prompt ("indique la nota del alumno");
        sexo= prompt ("indique el sexo del alumno con f o m");
        nota= parseInt (nota);
        while (nota<0|| nota>10){
            nota= prompt ("indique la nota del alumno entre 0 y 10");
            nota= parseInt (nota);

        }
        while (sexo!="f" && sexo!="m")
        {
            sexo= prompt ("el sexo no es valido, indiquelo nuevamente con f o m");
        }

        suma= suma+nota;

        if (contador == 0 || nota<menorNota)
        {
            menorNota=nota;
            sexoMenorNota=sexo;
        }
        if (sexo=="m" && nota >=6)
        {
            contadorAprobados++;
        }

        contador++;
    }
    promedio=suma/contador;
    console.log("el promedio es "+ promedio);   
    console.log ("la menor nota es "+ menorNota+ ", y fue del sexo " + sexoMenorNota);
    console.log (contadorAprobados+ " fueron los varones con mas de 6 puntos en su evaluación");

}
