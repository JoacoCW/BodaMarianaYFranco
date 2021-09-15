// Objeto invidato

class Invitado{
    constructor (nombre, apellido, documento, dire, menu, confirma, id) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.documento = documento;
        this.dire = dire;
        this.menu = menu;
        this.confirma = confirma;
        this.id = id;
    }
    comer(){
        console.log(this.nombre + ' ' + this.apellido + ' comerá el menú ' + this.menu);
    }
    mostrarInvitado(){
        document.getElementById("resultados").innerHTML+=`<h4>Se agregó a ${this.nombre} ${this.apellido} a lista de invitados</h4>`;
    }
}