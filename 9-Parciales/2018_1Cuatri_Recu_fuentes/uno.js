
function mostrar()
{
    var mascota1;    
    var pesoMascota1;
    mascota1 = prompt ("Como se llama una de tus mascotas?");
    pesoMascota1 = prompt ("Cuanto pesa "+ mascota1+ "?");
    var mascota2;
    mascota2 = prompt ("como se llama tu otra mascota?");
    var pesoMascota2;
    pesoMascota2 = prompt ("Cuanto pesa "+ mascota2 + "?");
    pesoMascota1 = parseInt(pesoMascota1);
    pesoMascota2 = parseInt (pesoMascota2);
    var pesoMascotas
    pesoMascotas = pesoMascota1 + pesoMascota2
        alert ("tenes dos mascotas "+ mascota1 + " y " + mascota2 + " que pesan " + pesoMascota1 + " y "+ pesoMascota2 + " la suma de los kilos es " + pesoMascotas);
}

/*var b
    var h
    b=prompt("Cuál es la base del triangulo? ")
    h=prompt("Cuál es la altura del triangulo? ")
    var superficie
    superficie = (b * h)/2
    var perimetro
    perimetro = b *3
    alert("la superficie de tu triangulo es"+ superficie + "y el perimetro" + perimetro)
*/