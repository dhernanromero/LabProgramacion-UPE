
function quitar_filaspares(){
    
    var tb = document.getElementsByid("tby"); 
    var x = document.getElementsByTagName("tr");
    for (i= x.length-1; i>= x.length; i--) {
        if (esPar(i)){
            tb.removeChild(x[i]);
        }
        
    }
}

function esPar(valor){
    return valor%2==0;
}

function inicio(){
    document.getElementById("quitar_fila").addEventListener("click",quitar_filaspares);
}

window.onload = inicio;