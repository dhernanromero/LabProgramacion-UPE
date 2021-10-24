$(document).ready(function (){
    let valido = [];
    $("#selectGrup").change(function(){
        if($(this).val()==1){
            $("#selectFac").removeClass("oculto");
            $("#selectHadz").addClass("oculto");
            $("#formRevision").addClass("oculto");
        }else if ($(this).val()==2) {
            $("#selectHadz").removeClass("oculto");
            $("#selectFac").addClass("oculto");
            $("#formRevision").addClass("oculto");
        }
    });

    $("#selectFac").change(function(){
        $("#formRevision").removeClass("oculto");
    });

    $("#selectHadz").change(function(){
        $("#formRevision").removeClass("oculto");
    });

    $("#cancelarModal").click(function(){
        $("#errorMensajeModal").modal("hide");
    });

    // $("cancelarModal").click(function(){
    //     $("#errorModal").modal("hide");
    // });
    
    $('input, textarea').focus( function(){
        $(this).removeClass('is-invalid');
    })

    $('#formRevision').submit(function (event) {
        event.preventDefault();
        event.stopPropagation()
        if (validar_formulario(event)){ 
            valido=[];
            event.target.addClass('was-validated');
            event.target.submit();
        }else{
            $("#errorMensajeModal").modal("show");
        }
    })

    // $( "#test" ).click(function() {
    // //     if(validar_formulario())
    // //    {
    // //        $("#mensajeErrorModal").show();
    // //    }else{
    // //         $("#mensajeErrorModal").show();
    // //    }
    //     if(validar_formulario()){   
    //         limpiar_form()
    //     }
    // });

    // function limpiar_form(){
    //     $('#formRevision').find('input').removeClass('is-invalid')
    //     $('#formRevision').find('input').removeAttr('disabled')
    //     $('#formRevision').find('input').val(" ");
    // }

    function validar_formulario(){
        if(!(validar_fecha($("#fechaRevision").val()))){
            valido.push(false)
            $('#fechaRevision').addClass('is-invalid')
            // $("#error_fecha_mayor").removeClass("oculto");
        }
        if($("#horainicio").val()==""){
            $('#horainicio').addClass('is-invalid');
        }
        if($("#horafin").val()==""){
            $('#horafin').addClass('is-invalid');
        }

        if(!(validar_hora($("#horainicio").val(),$("#horafin").val()))){
            valido.push(false)
            $('#horafin').addClass('is-invalid')
            // $("#error_hora_diferente").removeClass("oculto");
        }

        if (!(validar_descripcion($("#revisionDescripcion").val()))) {
            valido.push(false)
            $('#revisionDescripcion').addClass('is-invalid')
            // $("#error_descripcion").removeClass("oculto");
        }
        console.log(valido);
        if( !valido.includes(false) ) {
            $("#errorMensajeModal").modal("show");
        }
        
    }
    
    function validar_fecha(fechaForm){
        console.log(fechaForm);
        var hoy = new Date();
        if(fechaForm>hoy || fechaForm == ""){
            valido.push(false)
            return false;
        }else{
            valido.push(true)
            return true;
        }
    }

    function validar_hora(horaInicio, horaFin){
        let hora1 = horaInicio.slice(0, 2);
        let min1 = parseInt(horaInicio.slice(3, 5));
      
        let hora2 = horaFin.slice(0, 2);
        let min2 = parseInt(horaFin.slice(3, 5));
        // Solo comparo los minutos si es la misma hora
        if (hora1 == hora2) {
          diferencia = min2 - min1;
          if(diferencia>=10){
                valido.push(true)
                return true;
            }else{
                valido.push(false)
                return false;
            }
        }else{
            valido.push(true)
            return true;
        }
        
    }

    function validar_descripcion(descripcion){
        var arrayDescripcion = descripcion.trim().split(" ");
        if (descripcion.length < 5) {
            if(!(arrayDescripcion.length>=5)){
                valido.push(false)
                return false;
            }
        }
    }
});






