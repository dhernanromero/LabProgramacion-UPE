$(document).ready(function (){

    $("#addFila").click(function(){
        var nombre = $("#nombre").val();
        var apellido = $("#apellido").val();
        var edad = $("#edad").val();
        
        var tb = $("#tby"); 
        
        var tr = document.createElement("tr");
        var td = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");
        td.appendChild(nombre);
        td2.appendChild(apellido);
        td3.appendChild(edad);
        tr.appendChild(td);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tb.appendChild(tr);   
    });
});
