$(document).ready(function (){

   $("#btn").click(function(){
      if($("p").hasClass("parrafo")){
         $("p").removeClass("parrafo");
         $("p").addClass("parrafo_resaltado");
      }else{
         $("p").removeClass("parrafo_resaltado");
         $("p").addClass("parrafo");
      }
         
      

      
   });

});