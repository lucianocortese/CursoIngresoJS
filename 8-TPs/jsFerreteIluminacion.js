/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparass bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
     var lamparas;
     var marca;
     var cantidad;
     var iB
    lamparas=35;
    lamparas=parseInt(lamparas)
    marca= document.getElementById("Marca").value;
    cantidad= document.getElementById("Cantidad");
    cantidad=parseInt(cantidad)

     if(cantidad>=6)
     {
     lamparas= lamparas*0.50
     document.getElementById("precioDescuento").value = lamparas
     }
     else
     {
         if(cantidad=5)
         {
             if(marca= "ArgentinaLuz")
             lamparas= lamparas*0.60
         }
             else 
            {
             lamparas= lamparas*0.70
            }
                 if (cantidad=4)
                {
                    if(marca="ArgentinaLuz" || "FelipeLamparas")
                    {
                        lamparas=lamparas * 0.75
                    }
                    else
                    {
                        lamparas=lamparas * 0.80
                    }
                }
                else
                {
                    if(cantidad=3)
                    {
                        if(marca="ArgentinaLuz")
                         {
                             lamparas= lamparas*0.85
                         }
                         else
                        {
                            if(marca="FelipeLamparas")
                            {
                                lamparas=lamparas*0.90
                            }
                            else
                            {
                                lamparas=lamparas*0.95
                            }
                        }
                    }
                }    
                

     }
}
    if(lamparas>=120)
    {
        lamparas= lamparas*1.10
        iB=lamparas*0.10
        alert("Ustéd pagó " + iB + "de IIBB.")
    }
    else
    {
    
    }
document.getElementById("precioDescuento").value = lamparas