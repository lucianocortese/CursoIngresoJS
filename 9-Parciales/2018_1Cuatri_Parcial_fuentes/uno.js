
function mostrar()
{
    var h;
    var b;
    var per

    h= prompt ("Indique la altura del cuadrado");
    b= prompt ("Indique  la base del curadrado");
    h= parseInt(h);
    b= parseInt(b);
    per= (b*2) + (h*2);

    alert( "el perimetro del rectangulo es " + per);

}
