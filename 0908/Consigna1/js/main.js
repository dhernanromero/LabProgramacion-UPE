function VisualizarParrafo(){
    var parrafo = document.getElementsByTagName("p");
    for (let index = 0; index < parrafo.length; index++) {
        if (parrafo[index].className == "p-oculto"){
            parrafo[index].className = "p-visible";
            document.getElementById("btnVisualizar").textContent = "Ocultar Parrafo";
        }else{
            parrafo[index].className = "p-oculto";
            document.getElementById("btnVisualizar").textContent = "Mostrar Parrafo";
        }
        
    }

}

function inicio(){
    document.getElementById("btnVisualizar").addEventListener("click",VisualizarParrafo);
}

window.onload = inicio;