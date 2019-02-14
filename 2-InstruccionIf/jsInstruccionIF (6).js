function mostrar()
{
//tomo la edad  


    var edad
    edad=document.getElementById("edad").value;
         if (edad<13)
        {
        alert("menor");
        }
        else 
        {
             if (edad<18)
            {
                 alert("Sos adolescente");
            }
             else 
            {
                alert ("Sos mayor");
            }

}//FIN DE LA FUNCIÓN
}