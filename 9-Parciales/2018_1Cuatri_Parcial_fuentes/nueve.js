function mostrar() {
    var marca
    var peso
    var temp
    var resp
    var tempPar;
    var pesado;
    var marcaPesado;
    var contador;
    var bajoCero;
    var sumaPeso;
    var promedioPeso;
    var pesoMax;
    var pesoMin;

    resp = "si";
    tempPar = 0;
    bajoCero=0;
    sumaPeso = 0;
    contador=0;


    while (resp != "no") {
        marca = prompt("indique la marca");
        peso = prompt("Indique el peso entre 1 y 100");
        peso = parseInt(peso);

        while (peso < 1 || peso > 100) {
            peso = prompt("Indique nuevamente el peso entre 1 y 100");
            peso = parseInt(peso);

        }
        temp = prompt("Indique la temperatura entre -30 y 30");
        temp = parseInt(temp);

        while (temp < -30 || temp > 30) {
            temp = prompt("Indique la temperatura nuevamente entre -30 y 30");
            temp = parseInt(temp);
        }

        if (temp % 2 == 0 && temp!=0) {
            tempPar++;
        }

        if (contador == 0 || peso > pesado) {
            pesado = peso;
            marcaPesado = marca;
        }

        if (temp < 0) {
            bajoCero++;
        }

        sumaPeso = sumaPeso + peso

        if (contador == 0 || peso < pesoMin) {
            pesoMin = peso;
        }
        if (contador == 0 || peso > pesoMax) {
            pesoMax = peso;
        }

        contador++
        resp = prompt("para salir indique no");

    }
    promedioPeso = (sumaPeso / contador);

    console.log("Hay " + tempPar + " temperaturas pares");
    console.log("El producto mas pesado es " + marcaPesado);
    console.log("Hay " + bajoCero + " productos que se conservan a cero grados");
    console.log("El promedio del peso de todos los productos es " + promedioPeso);
    console.log("el peso maximo es " + pesoMax + ", mientras que el minimo " + pesoMin);







}
