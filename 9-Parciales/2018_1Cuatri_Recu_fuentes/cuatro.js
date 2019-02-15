function mostrar()
{
    var libros
    var valor
    var formaDePago
    libros= prompt("Cuantos libros compraste?")
    libros=parseInt(libros)
    valor= prompt ("Cuál es el valor total de los libros?")
    valor= parseInt (valor)
    formaDePago= prompt ("paga con tarjeta? responda si o no")

    if (libros>2)
    {
        valor= valor*0.90
   
    }
    else
    {
    }
    if (valor>2000)
    {
        valor*0.85
    }
    else
    {    
    }
    if(formaDePago = "si")
    {
        valor*1.10
    }

    alert ("Teniendo en cuenta que si compra mas de dos libros tiene un 10% de descuento, si supera los $2000 se le hace un 15% de descuento y si paga con tarjeta tendrá un 10% de recargo. Ustéd debe pagar $" + valor)
}
