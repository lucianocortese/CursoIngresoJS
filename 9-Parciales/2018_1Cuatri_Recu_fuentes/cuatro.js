function mostrar()
{
    var libros
    var valor
    var valor1
    var valor2
    var valor3 //no se si la voy a necesitar pero por las dudas
    var formaDePago
    libros= prompt("Cuantos libros compraste?")
    libros=parseInt(libros)
    valor= prompt ("Cuál es el valor total de los libros?")
    valor= parseInt (valor)
    formaDePago= prompt ("paga con tarjeta? responda si o no")

    if (libros>2)
    {
        valor1= valor*0.90
   
    }
    else
    {
    }
    if (valor1>2000)
    {
        valor2 = valor1*0.85
    }
    else
    {    
    }
    if(formaDePago = "si")
    {
        valor3 = valor2*1.10
    }

    alert ("Los libros tienen un costo de $" +valor + ".  Si compró mas de dos libros tendrá un descuento del 10%, ustéd debe pagar: $" + valor1 +". Si superó los 2000 pesos se le sumara un descuento del 15%. Usted por ende pagará $" + valor2+ ". Además, si paga con tarjeta tendrá un recargo del 10%. Por ende el precio final es "+ valor3)
    
}
