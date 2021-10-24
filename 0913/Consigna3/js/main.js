
function validar_numero(){
   var numero = document.getElementById("numValue").value;
   if(parseInt(numero)<1 && parseInt(numero)>923){
      windows.alert("el valor ingresado debe estar entre 1 y 923")
   }
   
}


function inicio(){
   document.getElementById("btntest").addEventListener("click",validar_numero);
}
window.onload = inicio;