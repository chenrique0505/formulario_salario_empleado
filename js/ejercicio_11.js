function myFunction(){
    var x = document.getElementsByClassName("color");
    for(var f=0; f<x.length; f++)
    {
    x[f].style.backgroundColor = "red";
    x[f].style.color = "white";
    
    }
}

/*
function hacerclick(){
    var lista=document.querySelectorAll("#principal p");
    for(var f=0; f<lista.length; f++)
    {
        lista[f].onclick=mostraralerta;
    }
}
*/