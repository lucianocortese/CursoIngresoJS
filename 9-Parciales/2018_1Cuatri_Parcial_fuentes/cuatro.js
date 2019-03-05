function mostrar()
{
    var num1;
    var num2;
    var suma;

    num1=prompt ("indique el numero 1")
    num2= prompt ("indique el numero 2")
    num1= parseInt (num1)
    num2= parseInt (num2)

    if(num1 == num2)
    {
        alert (num1 + " "+ num2);
    }
    else{
        if(num1>num2)
        {
            alert ("la resta es" + num1-num2);
        }
        else{
            suma= num1+num2;
                if(suma>10)
                {
                    alert ("la suma es "+ suma+ "y es mayor a 10");
                }
        }
    }
}
