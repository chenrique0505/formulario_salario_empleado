function hacerclick(){
    var lista=document.querySelectorAll("#principal p");
    for(var f=0; f<lista.length; f++)
    {
        lista[f].onclick=mostraralerta;
    }
}

function mostraralerta(){
    alert('hizo click!');
}

window.onload=hacerclick;

