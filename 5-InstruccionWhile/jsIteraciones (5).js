function mostrar()
{

var sexo 
sexo = prompt("ingrese f (femenino) ó m (masculino) ");

while(sexo!="f" && sexo!="m")
{
    sexo = prompt ("ingrese solo f (si el sexo es femenino) y m (si es masculino)")
}


document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN