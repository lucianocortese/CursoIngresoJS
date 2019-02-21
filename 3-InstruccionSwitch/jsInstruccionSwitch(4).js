function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
var mesDelAño = document.getElementById('mes').value;
switch(mesDelAño)
{
    case "Enero":
    case "Marzo":
    case "Mayo":
    case "Julio":
    case "Agosto":
    case "Octubre":
    case "Diciembre":
        mensaje="tiene 31 días";
        break;
    case "Febrero":
        mensaje="tiene 28 días";
        break;
    case "Abril":
    case "Junio":
    case "Septiembre":
    case "Noviembre":
        mensaje="tiene 30 días"
        break;
    
}
    alert(mensaje)
	



}//FIN DE LA FUNCIÓN