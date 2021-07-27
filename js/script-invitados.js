
// Objeto invitado

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

//Array de invitados, la idea es más adelante pasarlo a un JSON y completar toda la lista de invitados

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
    }
}

const addInvitado = document.getElementById('checkInvitado');
console.dir(addInvitado);//Para ver la salida en consola

// Determinar elemento a escuchar

addInvitado.addEventListener("click", checkInvitado);