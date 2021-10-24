$(document).ready(function (){

   $("#btn_agregar").click(function(){
    
      $("p").addClass("parrafo_resaltado");     
      
   });

   $("#btn_quitar").click(function(){
    
      $("p").removeClass("parrafo_resaltado");     
      
   });

});