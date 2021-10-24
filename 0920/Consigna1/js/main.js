$(document).ready(function (){

   $("#btn").click(function(){
      console.log($("#parrafo").is(".p-oculto"));
      if($("#parrafo").is(".p-oculto")){
         $("#parrafo").addClass("p-visible");
         $("#btn").html("Ocultar parrafo");
         $("#parrafo").removeClass("p-oculto");
      }else{
         console.log("entró al else");
         $("#parrafo").addClass("p-oculto");
         $("#btn").html("Mostrar Parrafo");
         $("#parrafo").removeClass("p-visible");
      }

      
   });


});