//VAR es la forma de declarar un elmento en java script
    //LET es otra forma de declarar un elmento en java script
    //LET es privada y VAR es una variable global

function hacerclick(){    
    var lista=document.querySelectorAll('#principal p');
    var array=document.querySelectorAll('#principal p');
    

    for (let i = 0; i < array.length; i++) {
        array[i].onclick=mostraralerta;
    }
}
function mostraralerta(){
        alert('hizo click!');
}
    window.onload=hacerclick;





