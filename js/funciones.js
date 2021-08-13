function invitadosUI(parametro){
    document.getElementById('lista').innerHTML = '';
    for ( const persona of parametro) {
        let tr = document.createElement("tr");
        tr.innerHTML = `<td>${persona.nombre}</td>
                        <td>${persona.apellido}</td>
                        <td>${persona.documento}</td>
                        <td>${persona.dire}</td>
                        <td>${persona.menu}</td>
                        <td>${persona.confirma}</td>
                        <td><button id="btnEditar"><i class="far fa-edit"></i></button></td>
                        <td><button id="eliminarInvitado"><i class="fas fa-user-slash"></i></button></td>`;
        document.getElementById('lista').appendChild(tr);
    }
}

// Función que agrega un invitado a la lista con los datos que toma por input

function agregarInvitado(){
    const invitadoN = new Invitado (document.getElementById("nombre").value, document.getElementById("apellido").value);
    invitados.push(invitadoN);  //Incluído para desafío clase de Arrays
    console.log(invitados);
    invitadoN.mostrarInvitado();
    let tr = document.createElement("tr");
    tr.innerHTML = `<td>${invitadoN.nombre}</td>
                    <td>${invitadoN.apellido}</td>
                    <td>${invitadoN.documento}</td>
                    <td>${invitadoN.dire}</td>
                    <td>${invitadoN.menu}</td>
                    <td>${invitadoN.confirma}</td>
                    <td><button id="btnEditar"><i class="far fa-edit"></i></button></td>
                    <td><button id="eliminarInvitado"><i class="fas fa-user-slash"></i></button></td>`;
    document.getElementById('lista').appendChild(tr);
    /* document.getElementById('inputInvitado').reset(); */
}

class User{
    constructor (username, password) {
        this.username = username;
        this.password = password;
    }
}


//Función que recorre la lista comparando con el nombre ingresado por input para saber si está en la lista de invitados

function checkInvitado(){
    const nombreIngresado = document.getElementById("nombre").value;
    const filtro = invitados.filter(elemento => nombreIngresado.includes(elemento.nombre) && nombreIngresado.includes(elemento.apellido));
    console.log(filtro);
    console.log(nombreIngresado);
    if(filtro != ""){
        console.log("Filtro no está vacío");
    }
    else {
        console.log("Filtro está vacío por que esa persona no está invitada");
        $('#resultadosFiltroInvitados').append(`<h4>El invitado buscado no está en la lista<br>
                                                revise acentos y mayúsculas y pruebe de nuevo</h4>`);
    }
    for (const invitadoFiltrado of filtro) {
        alert(invitadoFiltrado.nombre + " " + invitadoFiltrado.apellido + " está invitado a la boda de Mariana y Franco");
        console.log(invitadoFiltrado);
        localStorage.setItem("invitado", JSON.stringify(invitadoFiltrado));
        window.location.replace("infoInvitado.html")
    }
}

function eliminarInvitado(e){
    e.preventDefault();
    console.log(e.target.id);
    $(this).closest('tr').remove();
}


function logIn(e){
    e.preventDefault();
    usuarioIngresado.username = document.getElementById("username").value;
    usuarioIngresado.password = document.getElementById("password").value;
    const filtroUsuarios = usuarios.filter(elemento => usuarioIngresado.includes(elemento.username) && usuarioIngresado.includes(elemento.password));
    console.log(filtroUsuarios);
    console.log(usuarioIngresado);
    if(filtroUsuarios != ""){
        console.log("Filtro no está vacío");
    }
    else {
        console.log("Filtro está vacío por que el usuario existe");
        window.location.replace("novios.html")
    }
}

