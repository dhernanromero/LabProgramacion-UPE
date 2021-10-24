function fondo_filas(e){
    var tb = document.getElementById("tby"); 
    var x = document.getElementsByTagName("tr");
    for (i= 0; i< x.length; i++) {
        if (esPar(i)){
            x[i].style.backgroundColor = "green";
        }else{
            x[i].style.backgroundColor = "orange";
        }
        
    }
}

function esPar(valor){
    return valor%2==0;
}

function invertirColor(){
    var tb = document.getElementById("tby"); 
    var x = document.getElementsByTagName("tr");
    for (i= 0; i< x.length; i++) {
        if (x[i].style.backgroundColor == "green"){
            
            x[i].style.backgroundColor = "orange";
        }else{
            x[i].style.backgroundColor = "green";
        }
        
    }
}

// function cambiar_fondo_mouse(event){
//     var tds = document.getElementsByTagName("td");
//     for(var i = 0; i < tds.length; i++) {
//         tds[i].onmouseover = function() {
//         this.parentNode.style.filter = "brightness(0.5)";
//         }
//         tds[i].onmouseout = function() {
//         this.parentNode.style.filter = "brightness(1)";
//         }
//     }

// }

function generar_promedio(){
    var num1;
    var num2;
    var prom;
    var final;
    
    var num1 = document.getElementsByClassName("numero1");
    var num2 = document.getElementsByClassName("numero2");
    var final = document.getElementsByClassName("promedio");
    for(i=0; i<num1.length;i++){
        prom = (parseInt(num1[i].textContent) + parseInt(num2[i].textContent))/2
        final[i].textContent = prom;
    }
}

function inicio(){
    // document.getElementById("tabla1").addEventListener("load",fondo_filas);
    document.querySelector("tr").onload = fondo_filas();
    document.getElementById("botonInvertir").addEventListener("click",invertirColor);
    // document.querySelector("tr").addEventListener("mouseleave",cambiar_fondo_mouse());
    document.getElementById("botonPromedio").addEventListener("click",generar_promedio);
    
    var tds = document.getElementsByTagName("td");
    for(var i = 0; i < tds.length; i++) {
        tds[i].onmouseover = function() {
        this.parentNode.style.filter = "brightness(0.5)";
        }
        tds[i].onmouseout = function() {
        this.parentNode.style.filter = "brightness(1)";
        }
    }
}
window.onload = inicio;