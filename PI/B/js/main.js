const erNombre = /[A-Za-zñáéíóú]{4,}/;
const erDocumento = /[0-9]/;

$(document).ready(function(){
    var tipodoc;
    let valido = [];

    $("#btnAgregarAlumno").click(function(){
        $('#agregarAlumnoModal').modal('toggle');
        limpiar_form();
    })
    $("#selectGrup").change(function(){
        tipodoc = $(this).val();

    });
    
    $("#lblNombre").mouseover(function(){
        $("#nombre").focus();
    });

    $("#lblTipoDoc").mouseover(function(){
        $("#selectGrup").focus();
    });
    $("#lblNrooDoc").mouseover(function(){
        $("#numeroDocumento").focus();
    });
    $("#lblPriParcial").mouseover(function(){
        $("#primerParcial").focus();
    });
    $("#lblSegParcial").mouseover(function(){
        $("#segundoParcial").focus();
    });
    $("#lblPriRec").mouseover(function(){
        $("#primerRecuperatorio").focus();
    });
    $("#lblSecRec").mouseover(function(){
        $("#segundoRecuperatorio").focus();
    });

    $("#primerParcial").change(function(){
        console.log($(this).val());
        if ($(this).val()>=4) {
            $("#primerRecuperatorio").attr('disabled','disabled');
            $("#primerRecuperatorio").val(" ");
        }else{
            $("#primerRecuperatorio").removeAttr('disabled');
        }
    });

    $("#segundoParcial").change(function(){
        if ($(this).val()>=4) {
            $("#segundoRecuperatorio").attr('disabled','disabled');
            $("#segundoRecuperatorio").val(" ");
        }else{
            $("#segundoRecuperatorio").removeAttr('disabled');
        }
    });

    $("#cancelarModal").click(function(){
        $("#agregarAlumnoModal").modal('hide');
        valido = []
    })

    $("#guardarAlumno").click(function(){
        if(validar_form()){
            agregar_fila();
            limpiar_form();
        }
        
    })
    agregar_colores();
    
    $('#btn_ordenar').click(function(){
        ordenarlista()
    });

    $('input, select').focus( function(){
        $(this).removeClass('is-invalid');
    })

    function limpiar_form(){
        $('#formRevision').find('input').removeClass('is-invalid')
        $('#formRevision').find('input').removeAttr('disabled')
        $('#formRevision').find('input').val(" ");
    }

    function validar_form(){

        validar_nombre($("#nombre").val());
        var nrodocumento = $("#numeroDocumento").val();
        validar_documento(tipodoc,nrodocumento);


        if ( !validar_nota($('#primerParcial').val()) ){
            $('#primerParcial').addClass('is-invalid')
        }

        if ( !validar_nota($('#segundoParcial').val()) ){
            $('#segundoParcial').addClass('is-invalid')
        }

        if ( !validar_nota($('#primerRecuperatorio').val())){
            console.log($('#primerRecuperatorio').val());
            $('#primerRecuperatorio').addClass('is-invalid')    
            
        }

        if ( !validar_nota($('#segundoRecuperatorio').val())){
            $('#segundoRecuperatorio').addClass('is-invalid')
        }
        if( !valido.includes(false) ) {
            agregarFila();
            $('#agregarAlumnoModal').modal('hide');

        } else {
            $('#errorMensajeModal').modal("show");
        }
        console.log(valido)

        valido = []


    }

    function validar_nota(nota){
        if( (nota >= 1 && nota <= 10) || nota == " "){
            valido.push(true)
            return true;

        } else {
            valido.push(false)
            return false;
        }
    }

    function validar_nombre(nombreCompleto){
       
        nombreCompleto = nombreCompleto.split(" ");

        if(!(nombreCompleto.length >= 2)){
            $("#nombre").addClass('is-invalid');
            var text = "Debe contener al menos dos palabras.";
            $('#error_nombre').html(text);
            valido.push(false);
        }
    
        for(palabra of nombreCompleto ){
            if(!(erNombre.test(palabra))){
                $("#nombre").addClass('is-invalid');
                var text = "Debe contener al menos dos palabras de 4 caracteres cada una. Solo se permiter letras y tildes";
                $('#error_nombre').html(text);
                valido.push(false);
            }
        }
    
        if (!(nombreCompleto.length <= 30)) {
            $("#nombre").addClass('is-invalid');
            var text = "El largo total no debe exceder de 30 caracteres.";
            $('#error_nombre').html(text);
            valido.push(false);
        }
    }

    function validar_documento(tipoDoc,numeroDoc){
        
        if ( $("#selectGrup").val() == 0 ){
            $("#selectGrup").addClass('is-invalid')
            valido.push(false);
        }

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
    }

    function agregar_fila(){
        let notaFinal;
        let notaResultado = "AUSENTE";
        let nombreCompleto = $('#nombre').val();
        let tipoDocumento =$("#tipodoc").val() == 1 ? 'DNI ': 'LC/LE';
        let numeroDocumento = $('#numeroDocumento').val();
        let notaPrimerParcial = $("#primerParcial").val() != " " ? $("#primerParcial").val() : "-";
        let notaSegundoParcial =  $("#segundoParcial").val() != " " ?$("#segundoParcial").val() : "-";
        let notaPrimerRecu = $("#primerRecuperatorio").val() != " " ?$("#primerRecuperatorio").val() : "-";
        let notaSegundoRecu =  $("#segundoRecuperatorio").val() != " " ?$("#segundoRecuperatorio").val() : "-";

        let tbody = $("#tablaAlumnos").find('tbody').first();
        let tr = $("<tr></tr>");
        
        tr.append($(`<td>${nombreCompleto}</td>`));
        tr.append($(`<td>${tipoDocumento}</td>`));
        tr.append($(`<td>${numeroDocumento}</td>`));
        tr.append($(`<td>${notaPrimerParcial}</td>`));
        tr.append($(`<td>${notaSegundoParcial}</td>`));
        tr.append($(`<td>${notaPrimerRecu}</td>`));
        tr.append($(`<td>${notaSegundoRecu}</td>`));

        if(notaPrimerParcial == "-"){
            notaPrimerParcial= "A";
        }
        if(notaSegundoParcial == "-"){
            notaSegundoParcial = "A";
        }
        if(notaPrimerParcial == "A" && notaPrimerRecu == "-"){
            notaFinal = "A";
        }
        if(notaSegundoParcial == "A" && notaSegundoRecu == "-"){
            notaFinal = "A";
        }
        if (notaPrimerRecu=="-") {
            if(notaSegundoRecu=="-"){
                if (notaPrimerParcial == "A") {
                    notaFinal = "A";
                }
                else{
                    if (notaSegundoParcial == "A") {
                        notaFinal = "A";
                    }
                    else{
                        notaFinal=((parseFloat(notaPrimerParcial)+parseFloat(notaSegundoParcial))/2);
                    }
                }
            }
            else{
                if (notaPrimerParcial == "A") {
                    notaFinal = "A";
                }
                else{
                    notaFinal=((parseFloat(notaPrimerParcial)+parseFloat(notaSegundoRecu))/2);
                }
            }
        }
        else{
            if(notaSegundoRecu=="-"){
                if (notaSegundoParcial == "A") {
                    notaFinal = "A";
                }
                else{
                    notaFinal=((parseFloat(notaPrimerRecu)+parseFloat(notaSegundoParcial))/2);
                }
            }
            else{
                notaFinal=((parseFloat(notaPrimerRecu)+parseFloat(notaSegundoRecu))/2);
            }
        }

        //calcular
        if(notaFinal >= 1 && notaFinal < 3.5){
            notaResultado = "RECURSA";
        }
        if(notaFinal >=3.5  && notaFinal < 6.5){
            notaResultado = "A FINAL";
        }
        if(notaFinal >=6.5){
            notaResultado = "PROMOCIONA";
        }
        tr.append($(`<td>${notaFinal}</td>`));
        value = $("#primerParcial").val();
        tr.append($(`<td>${notaResultado}</td>`));
        
        $(tbody).append(tr);
    }

    function agregar_colores(){
        var filas = $("tr");
        $(filas).each(function(i){
            var celda = $(this).children("td");
            for(var i = 3; i <= 6 ; i++ ){
                var value = $(celda[i]).html();
                if(value >= 1 && value < 3.5){
                    $(celda[i]).addClass("td_nota_reprobado");
                }
                if(value >=3.5  && value < 6.5){
                    $(celda[i]).addClass("td_nota_aprobado");
                }
                if(value >= 6.5){
                    $(celda[i]).addClass("td_nota_promocionado");
                }
                if (value == " " || value == '-') {
                    $(celda[i]).addClass("td_nota_ausente");
                }
            }       
        })
    }

    function ordenarlista(){
        
        var aux;
        var filas = $("tr");
        $(filas).each(function(i){
            for ( var x = 1 ; x < filas.length -(i); x++ ){         
                
                if ($($(filas[x]).children("td")[0]).html() > $($(filas[x+1]).children("td")[0]).html()){
                    aux=filas[x];
                    filas[x]=filas[x+1];
                    filas[x+1]=aux;
                }
            }
        })
        var tbody = $("#tbody");
        tbody.html(filas);
    }

});