
// Objeto invidato

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