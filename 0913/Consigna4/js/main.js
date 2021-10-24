
function pasarArray(){
   var texto = document.getElementById("textArray").value;
   var array = texto.split(" ");
   console.log("numero de palabras "+ array.length);
   console.log("primera palabra " + array[0]);
   console.log("ultima palabra "+array[array.length-1]);
   
}


function inicio(){
   document.getElementById("btntest").addEventListener("click",pasarArray);
}
window.onload = inicio;