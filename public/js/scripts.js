$(document).ready(function () {
    console.log('DOM is ready');
    if("invitado" in localStorage){
        const invitadoChequeado = JSON.parse(localStorage.getItem("invitado"));
    };

    //CARGA ASINCRONA DE INFORMACION DE PRODUCTOS DE ORIGEN LOCAL (producto.json)
   $.get('../data/lista.json', function(datos, estado){
        console.log(datos);
        console.log(estado);
        if(estado == 'success'){
            for (const literal of datos) {
                invitados.push(new Invitado(literal.nombre, literal.apellido, literal.documento, literal.dire, literal.menu, literal.confirma, literal.id));
            }
}});

    $('#eliminarInivtado').click(eliminarInvitado);

    
});


window.addEventListener('load', ()=>{
    console.log('Imagenes cargadas');
    $('#indicadorCarga').remove();

    $('#lista').fadeIn("slow");
});

$('#login').click(logIn);

$('#checkInvitado').click(checkInvitado);

$('#addInvitado').click(agregarInvitado);


//DEFINIR EVENTOS SOBRE EL SELECT GENERADO
$('#filtroConfirmados').click(function () { 
    console.log('boton filtro confirmados seleccionado');
    //SOLUCION CON ANIMACIONES
    $('#lista').fadeOut(600,function(){
        //EL FILTRO SE REALIZA UNA VEZ OCULTO EL CONTENEDOR
        const confirmados = invitados.filter(invitado => invitado.confirma === 'si');
        console.log(confirmados);
        invitadosUI(confirmados);
        //MOSTRAR UNA VEZ GENERADOS LOS PRODUCTOS
        $('#lista').fadeIn();
    });
});