<?php
    $servername = "localhost";
    $username = "usernam";
    $password = "password";
    $db = "database";
    
    try{
        $conexion = new PDO("mysql:host=$servidor;dbname=nombreDeTuBaseDeDatos", $usuario, $password);      
      $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
      echo "Conexión realizada Satisfactoriamente";
    }catch(PDOException $e){
    echo "La conexión ha fallado: " . $e->getMessage();
    }

    $conexion = null;
?>