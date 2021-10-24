function agregarclase(){
    var x = document.getElementsByTagName("P");
    var i;
    for (i = 0; i < x.length; i++) {
       
        x[i].classList.add("parrafo_resaltado");
    }
}

function quitarclase(){
    var x = document.getElementsByTagName("P");
    var i;
    for (i = 0; i < x.length; i++) {
       
        x[i].classList.remove("parrafo_resaltado");
    }
}


function inicio(){
    
    document.getElementById("btn_agregar").addEventListener("click",agregarclase);
    document.getElementById("btn_quitar").addEventListener("click",quitarclase);

}

window.onload = inicio;