$(document).ready(function (){



   $("#sumar").click(function(){
      var num1 = Number($("#num1").val());
      var num2 = Number($("#num2").val());
      console.log(num1);
      var resultado = num1 + num2;
      console.log(resultado);
      $("#resultado").html(resultado);
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
});