function mostrar() {
    var pais;
    var superficie;
    var contador;
    var continuar;
    var contadorImpar;
    var contadorIgual100;
    var contadorMenos100;
    var sumaDeKilometros;
    var promedioDeKm;
    var supMinima
    var paisSupMinima
    var primerPais

    continuar = "si";
    contadorImpar = 0;
    contadorIgual100 = 0;
    contadorMenos100 = 0;
    primerPais = "";
    sumaDeKilometros = 0;
    contador = 0;

    while (continuar != "NO") {
        pais = prompt("Indique el nombre del pais")
        superficie = prompt("indique la superficie del pais")
        superficie = parseInt(superficie)
        while (superficie < 0) {
            superficie = prompt("esta no es una superficie valida, indiquela nuevamente")
            superficie = parseInt(superficie)
        }
        if (superficie % 2 == 1) {
            contadorImpar++;
        }
        if(superficie< 100)
        {
            contadorMenos100++
        }
        else{
            
            if (superficie == 100) {
                contadorIgual100++;
        }
        if (superficie > 100 && primerPais == "") {
                primerPais = pais;
            }
        }
       
        sumaDeKilometros = sumaDeKilometros + superficie;
        if (contador == 0 || superficie < supMinima) {
            supMinima = superficie;
            paisSupMinima = pais;
        }
        contador++;
        continuar = prompt("Escriba NO para salir");
    }
    promedioDeKm = sumaDeKilometros / contador;;

    console.log("hay " + contadorImpar + " paises con superficie impar");
    console.log("hay " + contadorIgual100 + " paises con superficie igual a 100");
    console.log("hay " + contadorMenos100 + " paises con superficie menor a 100");
    console.log(primerPais + " es el primer país en superar los 100km de superficie");
    console.log("La superficie promedio de los paises ingresados es " + promedioDeKm);
    console.log("El pais con menor superficie es " + paisSupMinima);



}
/*
Realizar el algoritmo que permita iterar el ingreso de dos datos, un país y la
superficie de su territorio (validar) hasta que el usuario quiera e informar al terminar
el ingreso por document.write:
1-La cantidad de países con superficie impar.
2-La cantidad de países con superficie menor a 100
3-La cantidad de países con superficie igual a 100
4-El nombre del primer país que superó los 100 de superficie
5-El promedio de kilómetros ingresados.
6-El nombre del que menos territorio tiene.
*/



/*
var contadorpais
var primerpais

if (superficie>100)
{
contadorpais++
    if(contadorPais==1)
    primerpais=pais
}
*/