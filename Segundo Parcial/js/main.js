const erNombre = /[A-Za-zñáéíóú]{3,}/;
const erDocumento = /[0-9]/;
const erNumeroSinDecimales = /^[0-9]{0,3}?(.)?[0-9]{0,3}$/;
const erCorreo = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/

$(document).ready(function(){
    var tipodoc;
    let valido = [];

    $("#selectGrup").change(function(){
        tipodoc = $(this).val();

    });
    

    $("#cancelarModal").click(function(){
        $("#MensajeModal").modal('hide');
        valido = []
    })

    $("#btnValidar").click(function(){
        validar_form();
        if( valido.includes(false) ) {
            $("#btnEnviar").addClass("oculto");
            $('#MensajeModal').modal("show");
            $("#textoMensaje").html("Los datos ingresados son incorrectos");
            valido = []

        } else {
            $("#btnEnviar").removeClass("oculto");
           
            valido = []
        }
      
        
        
    })
    $("#btnEnviar").click(function(e){
        console.log("entr'e")
        const reclamo = {
            nroCliente: $("#NroCliente").val(),
            nombreCompleto:  $("#nombre").val(),
            tipoDocumento:tipodoc,
            mail: $('#correo').val(),
            documento: $("#numeroDocumento").val(),
            detalleReclamo: $("#infoReclamo").val(),
        }
        console.log(reclamo);
        $.ajax({
            type: "POST",
            url: "./Rutas/AltaReclamo.php",
            data: JSON.stringify(reclamo),
            dataType: 'json',
            success: function (data) {
                $('#target').html(data.msg);
               
            }
            
          });

          $("#titulomodal").removeClass('bg-warning');
          $("#titulomodal").addClass('bg-success'); 
          $("#textoMensaje").html("Los datos ingresados son correc");
          $("#MensajeModal").modal('show');
          limpiar_form();
          $("#btnEnviar").addClass("oculto");
        
    })
  
    $('input, select, textarea').focus( function(){
        $(this).removeClass('is-invalid');
    })

    function limpiar_form(){
        $('#formReclamo').find('input').removeClass('is-invalid')
        $('#formReclamo').find('input').removeAttr('disabled')
        $('#formReclamo').find('input').val(" ");
        $('#formReclamo').find('textarea').val(" ");
        $('#formReclamo').find('select').val("0");

    }

    function validar_form(){
        var nroCliente = $("#NroCliente").val();
        var nombre = $("#nombre").val();
        var nrodocumento = $("#numeroDocumento").val();
        var infoReclamo = $("#infoReclamo").val();
        var correo = $('#correo').val();

        validar_nroCliente(nroCliente);

        validar_nombre(nombre);
        
        validar_documento(tipodoc,nrodocumento);

        validar_correo(correo);

        validar_detalle(infoReclamo);

      
        console.log(valido)

        valido = []


    }

    function validar_nroCliente(nroCli){
        if (erNumeroSinDecimales.test(nroCli)) {
            if( (nroCli >0  && nroCli <= 20000) ){
                console.log("numero cliente ok");
                valido.push(true)
                return true;
    
            } else {
                $("#NroCliente").addClass('is-invalid');
                valido.push(false)
                return false;
            }    
        }else{
            $("#NroCliente").addClass('is-invalid');
            valido.push(false)
                return false;
        }
        
    }

    function validar_nombre(nombreCompleto){
       
        nombreCompleto = nombreCompleto.split(" ");

        if(!(nombreCompleto.length >= 2)){
            $("#nombre").addClass('is-invalid');
            valido.push(false);
        }
    
        for(palabra of nombreCompleto ){
            if(!(erNombre.test(palabra))){
                $("#nombre").addClass('is-invalid');
                valido.push(false);
            }
        }
    
        if (!(nombreCompleto.length <= 30)) {
            $("#nombre").addClass('is-invalid');
            valido.push(false);
        }
    }

    function validar_documento(tipoDoc,numeroDoc){
        
        if ( $("#selectGrup").val() == 0 ){
            $("#selectGrup").addClass('is-invalid')
            valido.push(false);
            return false;
        }
        if(tipoDoc != 3 ){
            if (!(erDocumento.test(numeroDoc))) {
                $('#numeroDocumento').addClass('is-invalid')
                valido.push(false)
                return false;
            }

            if(tipoDoc == 1 && !(numeroDoc.length >=7 && numeroDoc.length <=8)){
                $('#numeroDocumento').addClass('is-invalid')
                valido.push(false)
                return false;
            }
            if(tipoDoc == 2 && !(numeroDoc.length >=6 && numeroDoc.length <=8)){
                $('#numeroDocumento').addClass('is-invalid')
                valido.push(false)
                return false
            }
            valido.push(true);
            return true;
        }
    }
    function validar_detalle(detalle){
        console.log("valido detalle");
        if (detalle.length >=10 && detalle.length <= 200) {
            console.log("detalle ok");
            valido.push(true)
            return true;

        } else {
            $('#infoReclamo').addClass('is-invalid')
            valido.push(false)
            return false;
        }    
    }
    function validar_correo(correo){
        if(erCorreo.test(correo)){
            if(correo.length > 3){
                console.log("correo ok");
                valido.push(true);
                return true;
            }
        }else{
            $('#correo').addClass('is-invalid')
            valido.push(false);
            return false;
        }
    }

});