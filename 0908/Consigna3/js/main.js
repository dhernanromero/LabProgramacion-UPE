function cambiarclase(){
    var x = document.getElementsByTagName("P");
    var i;
    for (i = 0; i < x.length; i++) {
        // if(x[i].style.backgroundColor == "red"){
        //     x[i].style.backgroundColor = "white";
        // }else{
        //     x[i].style.backgroundColor = "red";
        // }
        if(x[i].className == "parrafo_resaltado"){
            x[i].className = "parrafo";
        }else{
            x[i].className = "parrafo_resaltado";
        }
    }
}


function inicio(){
    
    document.getElementById("btn").addEventListener("click",cambiarclase);

}

window.onload = inicio;