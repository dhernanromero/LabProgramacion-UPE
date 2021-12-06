<?php

require_once("../Clases/Reclamos.php");
require_once("../Controller/ReclamosController.php");
    
    $datos = json_decode( file_get_contents("php://input"));
    echo("entre");
  
  
 
    $newReclamo = new Reclamo($datos->nroCliente, $datos->nombreCompleto,$datos->tipoDocumento,$datos->mail,$datos->documento,$datos->detalleReclamo);

    $reclamoController = new ReclamosController();
    $reclamoController->Guardar($newReclamo);
 ?>