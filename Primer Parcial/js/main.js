const erNombre = /[A-Za-zñáéíóú]{3,}/;
const erDocumento = /[0-9]/;
const erNumeroSinDecimales = /^[0-9]{1,3}?(.)?[0-9]{1,3}$/;

$(document).ready(function(){
    var tipodoc;
    let valido = [];

    // $("#btnAgregarAlumno").click(function(){
    //     $('#agregarAlumnoModal').modal('toggle');
    //     limpiar_form();
    // })
    $("#selectGrup").change(function(){
        tipodoc = $(this).val();

    });
    

    $("#cancelarModal").click(function(){
        $("#MensajeModal").modal('hide');
        valido = []
    })

    $("#btnValidar").click(function(){
        validar_form();
        if( !valido.includes(false) ) {
            $("#btnEnviar").removeClass("oculto");
            valido = []

        } else {
            $('#MensajeModal').modal("show");
            $("#textoMensaje").html("Los datos ingresados son incorrectos");
            valido = []
        }
      
        
        
    })
    $("#btnEnviar").click(function(){
        $("#titulomodal").removeClass('bg-warning');
        // document.getElementById("#titulomodal").classList.removeClass("bg-warning");
        $("#titulomodal").addClass('bg-success'); 
        $("#textoMensaje").html("Los datos ingresados son correctos");
        $("#MensajeModal").modal('show');
        limpiar_form();
        
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

        validar_nroCliente(nroCliente);

        validar_nombre(nombre);
        
        validar_documento(tipodoc,nrodocumento);

        validar_detalle(infoReclamo);

      
        console.log(valido)

        valido = []


    }

    function validar_nroCliente(nroCli){
        if (erNumeroSinDecimales.test(nroCli)) {
            if( (nroCli >= 1 && nroCli <= 20000) ){
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

});