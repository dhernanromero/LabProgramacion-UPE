$(document).ready(function (){



   $("#sumar").click(function(){
      var num1 = $("#num1").val();
      var num2 = $("#num2").val();
      console.log(num1);
      if(validar_parametros(num1,num2)){
         var resultado = Number(num1) + Number(num2);
         console.log(resultado);
         $("#resultado").html(resultado);
      }else{
         $("#resultado").html("error al sumar")
      }
   });

   $("#restar").click(function(){
      var num1 = $("#num1").val();
      var num2 = $("#num2").val();
      console.log(num1);
      var resultado = num1 - num2;
      console.log(resultado);
      $("#resultado").html(resultado);
   });

   $("#multiplicar").click(function(){
      var num1 = $("#num1").val();
      var num2 = $("#num2").val();
      console.log(num1);
      var resultado = num1 * num2;
      console.log(resultado);
      $("#resultado").html(resultado);
   });
   $("#dividir").click(function(){
      var num1 = $("#num1").val();
      var num2 = $("#num2").val();
      console.log(num1);
      var resultado = num1 / num2;
      console.log(resultado);
      $("#resultado").html(resultado);
   });


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
});