<?php
 require_once("../Model/ConexionDB.php");

    class ReclamoModel extends ConexionDB
    {
        public function InsertarReclamo(Reclamo $datos)
        {
            try
            {
                $this->query = "INSERT INTO reclamos (nro_cliente, nombre_completo, tipo_documento, mail, documento, detalle_reclamo)
                VALUES (:nro_cliente, :nombre_completo,:tipo_documento,:mail,:documento,:detalle_reclamo);";
                $this->ejecutar( array(
                        ':nro_cliente' => $datos->nro_cliente,
                        ':nombre_completo' => $datos->nombre_completo,
                        ':tipo_documento' => $datos->tipo_documento,
                        ':mail' => $datos->mail,
                        ':documento' => $datos->documento,
                        ':detalle_reclamo' => $datos->detalle_reclamo,
                    ));
                
                
                return $this->ultimoId();
                
            }
            catch(Exception $e)
            {
                $this->estado = "ERROR INSERTAR RECLAMO: " . $e->getMessage();
            }
        }
    }
?>