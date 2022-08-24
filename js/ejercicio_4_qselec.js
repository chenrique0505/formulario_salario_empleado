//p
function hacerclick(){
    document.querySelector('#principal p:first-child').onclick= mostraralerta;
}

function mostraralerta(){
    alert('hizo click!');
}
window.onload=hacerclick;