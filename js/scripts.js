$(document).ready(function () {
    console.log('DOM is ready');
    if("invitado" in localStorage){
        const invitadoChequeado = JSON.parse(localStorage.getItem("invitado"));
    };

    //CARGA ASINCRONA DE INFORMACION DE PRODUCTOS DE ORIGEN LOCAL (producto.json)
    $.get('../data/lista.json',function(datos, estado){
        console.log(datos);
        console.log(estado);
        if(estado == 'success'){
            for (const literal of datos) {
                invitados.push(new Invitado(literal.nombre, literal.apellido, literal.documento, literal.dire, literal.menu, literal.confirma, literal.id));
            }
            for ( const invitado of invitados) {
                let tr = document.createElement("tr");
                tr.innerHTML = `<td>${invitado.nombre}</td>
                                <td>${invitado.apellido}</td>
                                <td>${invitado.documento}</td>
                                <td>${invitado.dire}</td>
                                <td>${invitado.menu}</td>
                                <td>${invitado.confirma}</td>
                                <td><button id="btnEditar"><i class="far fa-edit"></i></button></td>
                                <td><button id="eliminarInvitado"><i class="fas fa-user-slash"></i></button></td>`;
                document.getElementById('lista').appendChild(tr);
            }
        }
        
    });

    $('#eliminarInivtado').click(eliminarInvitado);

    
});


window.addEventListener('load', ()=>{
    console.log('Imagenes cargadas');
    $('#indicadorCarga').remove();

    $('#lista').fadeIn("slow");
});

$('#login').click(logIn);

$('#CheckInvitado').click(checkInvitado);

$('#addInvitado').click(agregarInvitado);