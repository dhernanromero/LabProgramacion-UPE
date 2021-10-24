
function mostrar_valor(event){
    console.log(event.key);
}

function inicio(event){
    // document.getElementById("texto").addEventListener("keyup",(e)=> console.log(e.key));
    console.log(event);
    document.getElementById("texto").addEventListener("keyup",mostrar_valor);
}

window.onload = inicio;