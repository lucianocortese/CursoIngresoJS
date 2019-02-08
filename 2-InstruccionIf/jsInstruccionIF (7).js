function mostrar()
{
//tomo la edad  

var edad;
edad=document.getElementById("edad").value;
var estadoCivil;
estadoCivli=document.getElementById("estadoCivil").value;

if(edad<18)
{
    if(estadoCivil!="Soltero")
    {
        alert("es muy pequeño para no ser soltero");
    }


}
//FIN DE LA FUNCION
}