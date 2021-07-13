class Invitado{
    constructor (nombre, apellido, documento, dire, menu, confirma) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.documento = 0;
        this.dire = '';
        this.menu = '';
        this.confirma = '';
    }
    comer(){
        console.log(this.nombre + ' ' + this.apellido + ' comerá el menú ' + this.menu);
    }
    mostrarInvitado(){
        document.getElementById("resultados").innerHTML+=`<h4>Se agregó a ${this.nombre} ${this.apellido} a lista de invitados</h4>`;
    }
}

const invitado1 = new Invitado(document.getElementById("nombre").value, document.getElementById("apellido").value);
console.log(invitado1);

invitado1.comer();

// acá debería ir un for que cicle por todo el JSON para saber cuantos elementos contiene y devuelva una variable N + 1 para ser el número del nuevo invitado

function agregarInvitado(){
    const invitadoN = new Invitado (document.getElementById("nombre").value, document.getElementById("apellido").value);
    invitadoN.mostrarInvitado();
}