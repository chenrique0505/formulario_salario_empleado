function mostraralerta(){
    alert('hizo click Embebido!');
}

function hacerclick(){
    document.getElementsByTagName('p')[0].onclick=mostraralerta;
    
}
window.onload=hacerclick;