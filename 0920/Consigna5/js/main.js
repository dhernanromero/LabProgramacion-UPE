$(document).ready(function (){

    $("#quitar_fila").click(function(){
        var tb = $("#tby").children(); 

        for (let index=tb.length-1; index > 0; index--) {
            if ((index+1)%2 == 0){
                tb[index].remove()
            }
            
        }
    });
});
