function mostrar()
{
//tomo la edad  

var edad;
edad=document.getElementById("edad").value;
var estadoCivil;
estadoCivil=document.getElementById("estadoCivil").value;

if(edad<18 && estadoCivil!= "Soltero")
{

}
else
{
        alert("es soltero y no es menor")
}

}