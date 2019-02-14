function mostrar()
{
//tomo la edad  

      var edad;
      edad=document.getElementById("edad").value;
      var estadoCivil;
      estadoCivil=document.getElementById("estadoCivil").value;

      if(edad<18 && estadoCivil!="Soltero")
      {
    
            alert("es muy pequeño para no ser soltero");

      }
      else
      {
            
      }
//FIN DE LA FUNCION
}