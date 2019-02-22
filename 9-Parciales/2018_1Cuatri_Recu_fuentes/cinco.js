 function mostrar()
{
    var importe
    var importe2
    var importe3
    var importe4
    var importeTotal
    var mayor
    importe= prompt("ingrese el primer importe");
    importe2= prompt("ingrese el segundo importe");
    importe3= prompt("ingrese el tercer importe");
    importe4= prompt ("ingrese el cuarto importe");

    importe = parseInt (importe);
    importe2 =parseInt (importe2);
    importe3= parseInt (importe3);
    importe4= parseInt (importe4);

    importeTotal= (importe+importe2+importe3+importe4)
    
    if(importe>=importe2 && importe>=importe3 && importe>=importe4)
    {
        mayor=importe
    }
    else {
        if(importe2>=importe3 && importe1>=importe4)
        {
        mayor=importe2
        }
        else
        {
            if(importe3>=importe4)
            {
                mayor=importe3
            }
            else
            {
              mayor=importe4  
            }
        }
    }

    alert ("el mayor es $" + mayor)

        if (importeTotal>100)
        {
        importeTotal= (importeTotal*0.90)
        }
        else
        {
            if (importeTotal>50)
            {
            importeTotal= (importeTotal*0.95)
            }
            else
            {
                importeTotal= (importeTotal*1.15)
            }
        }

    alert("el total a pagar $" + importeTotal)

}
