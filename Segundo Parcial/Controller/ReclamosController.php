<?php
    require_once("../Clases/Reclamos.php");
    require_once("../Model/ReclamoModel.php");
    
    class ReclamosController
    {
        private $recModel;
        private $options;

        function __construct()
        {
            $this->recModel= new ReclamoModel();
        }

        public function Guardar(Reclamo $reclamo)
        {
  
            $reclamo->id  = $this->recModel->InsertarReclamo($reclamo);
            echo($reclamo->id);

        }


        

    }
        
?>