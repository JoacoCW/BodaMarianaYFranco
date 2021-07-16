/*
let cantidadDeInvitados = prompt('Ingrese la cantidad de invitados que quiere confirmar');

function getInfoInvitados(number){
    console.log(number);
    for (let i = 1; i <= number; i++){
        let nombre = prompt('Ingrese nombre completo del '+i+'° invitado');
        let menu = '';
        function getMenu(nombre){
            do {
                menu = prompt('Eliga menu vegetariano o regular, ingrese V o R según correspoda');
                if(menu == 'V' || menu == 'R'){
                    if (menu == 'V') {
                        alert(nombre+' eligió menú vegetariano');
                    } else {
                        alert(nombre+' eligió menú regular');
                    }
                    document.getElementById("resultados").innerHTML+=`<h4>${nombre} eligió el menú</h4><p>${menu}</P>`;
                } else {
                    alert(nombre+' se va a quedar sin comer por boludo. Ingrese V para menú vegetariano o R para menú regular');
                }
            } while (menu != "V" && menu != "R")
        }
        getMenu(nombre);
    }
}

getInfoInvitados(cantidadDeInvitados);
*/

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
