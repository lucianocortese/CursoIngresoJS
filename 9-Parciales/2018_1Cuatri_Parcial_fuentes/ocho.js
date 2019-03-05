function mostrar()
{
    var letra;
    var num;
    var resp;
    var pares;
    var impares;
    var ceros;
    var cantPositivos;
    var sumaPositivos;
    var promedioPositivos;
    var sumaNegativos;
    var contador;
    var min;
    var max;
    var letraMax;
    var letraMin;
    
    resp="si";
    pares=0;
    impares=0;
    ceros=0;
    cantPositivos=0;
    sumaPositivos=0;
    sumaNegativos=0;
    contador=0;

    while(resp!="no")
    {
        letra=prompt ("Indique una letra");
        num = prompt ("indique el numero entre -100 y 100");
        num = parseInt(num);

        while(num<-100 || num>100)
        {
            num=prompt ("el numero ingresado debe estar entre -100 y 100");
            num = parseInt(num);
        }
        if(num%2==0 && num!=0)
        {
            pares++;
        } 
        else 
        {
            impares++;
        }

        if(num==0)
        {
            ceros++;
        }
        else
        {
            if (num>0)
            {
                cantPositivos++;
                sumaPositivos = sumaPositivos + num;
            }
            else 
            {
                sumaNegativos = sumaNegativos + num
            }
        
        }
        
        if (contador==0 || num<min )
        {
            min = num;
            letraMin=letra;
        }

        if (contador==0 || num>max )
        {
            max = num;
            letraMax=letra;
        }
        contador++
            resp= prompt ("para salir pulse no");
        }

    promedioPositivos= sumaPositivos/cantPositivos
    console.log ("hay " + pares + " numeros pares")
    console.log ("hay " + impares + " numeros impares")
    console.log ("hay " + ceros + " numeros ceros")
    console.log ("el promedio de los numeros positivos es " + promedioPositivos)
    console.log ("la suma de numeros negativos "+ sumaNegativos)
    console.log ("el maximo es "+ max+ " y pertenece a " + letraMax)
    console.log ("el minimo es "+ min + " y pertenece a " + letraMin)




}
