let clave = prompt("Ingrese la clave 1234");

function ingresar(clave){
    if(clave != "1234"){
        clave = prompt("La clave no es correcta, ingresela otra vez");
        ingresar(clave);
    }
    else {
        alert("La clave es correcta");
    }
}

ingresar(clave);

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

const invitados = [
    {nombre : "Franco", apellido : "Silva", documento : "39999999", dire : "Calle tal 546", menu : "Clasico", confirma : "si"},
    {nombre : "Mariana", apellido : "Torreblanca", documento : "38999999", dire : "Calle tal 546", menu : "Clasico", confirma : "si"},
    {nombre : "Fabricio", apellido : "Silva", documento : "40999999", dire : "", menu : "", confirma : ""},
    {nombre : "Roxana", apellido : "Podesta", documento : "", dire : "", menu : "", confirma : ""},
    {nombre : "Sergio", apellido : "Torreblanca", documento : "", dire : "", menu : "", confirma : ""},
    {nombre : "Cecilia", apellido : "Apellido", documento : "", dire : "", menu : "", confirma : ""},
    {nombre : "Facundo", apellido : "Torreblanca", documento : "", dire : "", menu : "", confirma : ""},
    {nombre : "Omar", apellido : "Torreblanca", documento : "", dire : "", menu : "", confirma : ""},
    {nombre : "Agostina", apellido : "Torreblanca", documento : "", dire : "", menu : "", confirma : ""},
    {nombre : "Mama de facu", apellido : "Hinojosa", documento : "", dire : "", menu : "", confirma : ""},
    {nombre : "Katia", apellido : "Itin", documento : "", dire : "", menu : "", confirma : ""},
    {nombre : "Giovanni", apellido : "Casali", documento : "", dire : "", menu : "", confirma : ""},
    {nombre : "Joaquín", apellido : "Weiss", documento : "37608601", dire : "Juramento 3675", menu : "Clasico", confirma : "si"}
];

const invitado1 = new Invitado(document.getElementById("nombre").value, document.getElementById("apellido").value);
console.log(invitado1);

invitado1.comer();

// acá debería ir un for que cicle por todo el JSON para saber cuantos elementos contiene y devuelva una variable N + 1 para ser el número del nuevo invitado

function agregarInvitado(){
    const invitadoN = new Invitado (document.getElementById("nombre").value, document.getElementById("apellido").value);
    invitados.push(invitadoN);  //Incluído para desafío clase de Arrays
    console.log(invitados);
    invitadoN.mostrarInvitado();
}