function mostrar()
{
   
    var Pago
    var formaDePago;
    var paquete;
    
    pago= prompt("cuando va a pagar?")
    formaDePago= prompt("Cual es su metodo de pago? Solo indique la letra:  A-Visa; B-Paypal; C-MercadoPago; D-Efectivo E-Otro " )
    paquete= prompt("Que paquete desea? Solo indique la letra:  A - Todo Incluido; B - Solo Desayuno; C - Otros")
    pago=parseInt(pago)

    switch(formaDePago){
        case "A":
        (pago= pago * 0.90)
        break;
        case "B":
            if (paquete== "A")
            {
                pago=pago*0.75
            }
            else{
                pago=pago*0.85
            }
            
        break;
        case "C":
        (pago=pago * 0.90)
        break;  
        case "D":
            if (paquete== "B")
            {
                pago= pago * 0.70
            }
            else
            {
                if(paquete== "A")
                {
                    pago=pago*0.65
                }
                else
                {
                    (pago= pago* 0.80)
                }
            }
        break;
        default:
        (pago= pago*0.95)
        break;
    }

    
    alert("usted debe abonar $" + pago)
}
