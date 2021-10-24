
function quitar_vocales(){
    var texto = document.getElementById("inpQuitarVocales").value;
    var textoSinVocales = texto.replace(/[aeiou]/g,"");
    document.getElementById("inpQuitarVocales").value = textoSinVocales;
}

function inicio(){
    document.getElementById("quitarVocales").addEventListener("click",quitar_vocales);
}

window.onload = inicio;