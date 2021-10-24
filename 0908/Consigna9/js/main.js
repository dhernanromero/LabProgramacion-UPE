function log_fecha(param1){
    console.log(new Date());
    console.log(param1);
}


function inicio(){
    
    setInterval(log_fecha, 5000,"este es el param1","este es el param2");

    // setInterval(() => {
    //     console.log(new Date())
    // }, 5000);
}

window.onload = inicio;