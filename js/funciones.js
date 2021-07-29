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
                    <td><button id="btnEditar"><i class="far fa-edit"></i></button></td>`;
    document.getElementById('lista').appendChild(tr);
    /* document.getElementById('inputInvitado').reset(); */
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
    }
    for (const invitadoFiltrado of filtro) {
        alert(invitadoFiltrado.nombre + " " + invitadoFiltrado.apellido + " está invitado a la boda de Mariana y Franco");
        console.log(invitadoFiltrado);
        localStorage.setItem("invitado", JSON.stringify(invitadoFiltrado));
        window.location.replace("infoInvitado.html")
    }
}