function sumar(){
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    var result;

    if(validar_parametros(num1,num2)){
        result = num1 + num2;
        document.getElementById("resultado").textContent = result.toString();
    }else{
        document.getElementById("resultado").textContent = "error al sumar";
    }
      
}

function restar(){
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    var result;

    if(validar_parametros(num1,num2)){
        result = num1 - num2;
        document.getElementById("resultado").textContent = result.toString();
    }else{
        document.getElementById("resultado").textContent = "error al restar";
    }
}
function multiplicar(){
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    var result;

    if(validar_parametros(num1,num2)){
        result = num1 * num2;
        document.getElementById("resultado").textContent = result.toString();
    }else{
        document.getElementById("resultado").textContent = "error al multiplicar";
    }
}

function dividir(){
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    var result;

    if(validar_parametros(num1,num2)){
        if(validar_cero(num2)){
            result = num1 / num2;
            document.getElementById("resultado").textContent = result.toString();
        }else{
            document.getElementById("resultado").textContent = "no se puede dividir por cero"    
        }
    }else{
        document.getElementById("resultado").textContent = "error al dividir";
    }
}

function raiz(){
    var num1 = Number(document.getElementById("num1").value);
    var result;
    if(validar_numero(num1)){
        result = Math.sqrt(num1);
        document.getElementById("resultado").textContent = result.toString();
    }else{
        document.getElementById("resultado").textContent = "error al obtener la raiz";
    }
}

function seno(){
    var num1 = Number(document.getElementById("num1").value);
    var result;
    if(validar_numero(num1)){
        result = Math.sin(num1);
        document.getElementById("resultado").textContent = result.toString();
    }else{
        document.getElementById("resultado").textContent = "error al obtener el seno";
    }
}

function coseno(){
    var num1 = Number(document.getElementById("num1").value);
    var result;
    if(validar_numero(num1)){
        result = Math.cos(num1);
        document.getElementById("resultado").textContent = result.toString();
    }else{
        document.getElementById("resultado").textContent = "error al obtener el coseno";
    }
}

function logaritmo_natural(){
    var num1 = Number(document.getElementById("num1").value);
    var result;
    if(validar_numero(num1)){
        result = Math.log(num1);
        document.getElementById("resultado").textContent = result.toString();
    }else{
        document.getElementById("resultado").textContent = "error al obtener el logaritmo natural";
    }
}



function validar_parametros(num1, num2){
    if (!Number.isNaN(num1) && !Number.isNaN(num2)){
        return true;
    }else{
        return false;
    }
}

function validar_numero(num){
    if (!Number.isNaN(num)){
        return true;
    }else{
        return false;
    }
}

function validar_cero(num){
    if(num == 0){
        return false;
    }else{
        return true;
    }
}


function inicio(){
    document.getElementById("sumar").addEventListener("click",sumar);
    document.getElementById("restar").addEventListener("click",restar);
    document.getElementById("multiplicar").addEventListener("click",multiplicar);
    document.getElementById("dividir").addEventListener("click",dividir);
    document.getElementById("raiz").addEventListener("click",raiz);
    document.getElementById("seno").addEventListener("click",seno);
    document.getElementById("coseno").addEventListener("click",coseno);
    document.getElementById("logNat").addEventListener("click",logaritmo_natural);
}

window.onload = inicio;