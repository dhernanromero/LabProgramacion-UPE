<?php
    class Reclamo
    {
        public $id;
        public $nro_cliente;
        public $nombre_completo;
        public $tipo_documento;
        public $mail;
        public $documento;
        public $detalle_reclamo;

        public function __construct($nroCliente,$nombreCompleto,$tipoDocumento,$mail,$documento,$detalleReclamo)
        {
            $this->nro_cliente = $nroCliente;
            $this->nombre_completo = $nombreCompleto;
            $this->tipo_documento = $tipoDocumento;
            $this->mail = $mail;
            $this->documento = $documento;
            $this->detalle_reclamo = $detalleReclamo;
        }
    }
?>