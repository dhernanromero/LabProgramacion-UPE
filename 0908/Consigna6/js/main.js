
function agregar_fila(){
    
    var tb = document.getElementById("tby"); 
    var tr = document.createElement("tr");
    var td = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td1texto = document.createTextNode(document.getElementById("nombre").value);
    var td2texto = document.createTextNode(document.getElementById("apellido").value);
    var td3texto = document.createTextNode(document.getElementById("edad").value);

    td.appendChild(td1texto);
    td2.appendChild(td2texto);
    td3.appendChild(td3texto);
    tr.appendChild(td);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tb.appendChild(tr);
}

function inicio(){
    document.getElementById("addFila").addEventListener("click",agregar_fila);
}

window.onload = inicio;