function mostrar()
{
    var velocidad;
    var combustible;
    var contador;
    var sumaVelocidad
    var promedioVel;
    var velocidadMinima;
    var comVelMin;
    var contadorLMas100;
    var comSRapido;

    contador=0;
    sumaVelocidad=0;
    contadorLMas100=0;
    comSRapido=0;
    velocidadMinima=250
    
    while(contador <5)
    {
        velocidad=prompt("Que velocidad? entre 0 y 250");
        velocidad=parseInt(velocidad);
        combustible= prompt ("Indique que combustible usando L en caso de liquido o S en casode solido");
        while(velocidad <= 0 || velocidad>=250)
        {
            velocidad= prompt("la velocidad entre 0 y 250");
            velocidad=parseInt(velocidad);

        }
        while(combustible!="S" && combustible!= "L")
        {
           combusible= prompt("reingrese el combustible, recuerdo solo s (para solido) y l (para liquido)");
        }
        if(contador==0 || velocidad<velocidadMinima)
        {
            velocidadMinima=velocidad;
            comVelMin=combustible;
        }
        if(velocidad>100 && combustible == "L")
        {
            contadorLMas100++;
        }
        if (combustible=="S" && velocidad>comSRapido)
        {
            comSRapido=velocidad;
        }
        sumaVelocidad=sumaVelocidad + velocidad;
        contador++;
    }

    promedioVel=sumaVelocidad/contador;

    console.log ("El promedio de las velocidades es "+promedioVel+ "km/h");
    console.log ("La velocidad minima es "+velocidadMinima+"Km/h. Y su combustible es "+comVelMin);
    console.log ("Hay "+ contadorLMas100+ "con combustible liquido que superen los 100 Km/h");
    console.log ("La velocidad mas alta de los combustibles sólidos es "+ comSRapido);



}

/*
Realizar el algoritmo que permita el ingreso por prompt de las velocidades en
kilómetros (validar entre 0 y 250) , el tipo de combustible, validar el tipo “s” o “l”
para solido o liquido, de 5 vehículos de prueba ,informar por alert:
1-El promedio de las velocidades totales.
2-La velocidad más baja y el tipo de combustible de ese vehículo.
3-La cantidad de combustibles líquidos que su velocidad supere los 100
kilómetros.
4-la velocidad más alta de los de combustible sólido
*/
