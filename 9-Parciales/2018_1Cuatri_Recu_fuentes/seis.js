function mostrar()
{
    function mostrar()
    {
        var libros
        var valor
        var formaDePago
        var valor2Libros
        var valor2000
        var valorTarjeta
        libros= prompt("Cuantos libros compraste?")
        libros=parseInt(libros)
        valor= prompt ("Cuál es el valor total de los libros?")
        valor= parseInt (valor)
        formaDePago= prompt ("paga con tarjeta? responda si o no")
    
        if (libros>2)
        {
            valor2Libros= valor*0.90
            if (valor2Libros>2000)
            {
                valor2000= valor2Libros*0.85
                if(formaDePago = "si")
                {
                    valorTarjeta= valor2000*1.10
                        alert("")
                    
                }
                else
                {
                    valorTarjeta= valor2000
                }
            }
            else
            {    
                valor2000= valor2Libros
                if(formaDePago = "si")
                {
                    valorTarjeta= valor2000*1.10
                    
                }
                else
                {
                    valorTarjeta= valor2000
                }
            }
        }
        else
        {
            valor2Libros= valor
            if (valor2Libros>2000)
            {
                valor2000= valor2Libros*0.85
                if(formaDePago = "si")
                {
                    valorTarjeta= valor2000*1.10
                    
                }
                else
                {
                    valorTarjeta= valor2000
                }
            }
            else
            {    
                valor2000= valor2Libros
                if(formaDePago = "si")
                {
                    valorTarjeta= valor2000*1.10
                    
                }
                else
                {
                    valorTarjeta= valor2000
                }
            }
        }
        
       alert("Por la cantidad de libros que compraste debes pagar " + valor2Libros + ". Por el monto del pago  "+ valor2000 +". Y por la forma de pago " +valorTarjeta);
}

}
