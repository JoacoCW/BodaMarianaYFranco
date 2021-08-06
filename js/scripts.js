$(document).ready(function () {
    console.log('DOM is ready');
    if("invitado" in localStorage){
        const invitadoChequeado = JSON.parse(localStorage.getItem("invitado"));
    };
});


window.addEventListener('load', ()=>{
    console.log('Imagenes cargadas');
    $('#indicadorCarga').remove();
});

$('#eliminarInivtado').click(eliminarInvitado);

$('#login').click(logIn);