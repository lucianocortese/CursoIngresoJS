function mostrar()
{
    var planeta
    
    planeta= prompt ("indique un planeta con todas las letras en minusculas")

    switch (planeta)
    {
        case "mercurio":
        case "venus":
        alert("acá hace más calor")
        break;
        case "tierra":
        alert("acá vivimos")
        break;
        case"marte":
        case"jupiter":
        case"saturno":
        case "uranio":
        case"neptuno":
        alert ("acá hace más frio");
        break;
        default:
        alert("lo escrito no es un planeta")
        break;
    }
}
