// Array de invitados. Más adelante quiero que sea un JSON al que se pueda acceder desde los diferentes scripts

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

// Generar interfaz de lista de invitados

for ( const invitado of invitados) {
    let tr = document.createElement("tr");
    tr.innerHTML = `<td>${invitado.nombre}</td>
                    <td>${invitado.apellido}</td>
                    <td>${invitado.documento}</td>
                    <td>${invitado.dire}</td>
                    <td>${invitado.menu}</td>
                    <td>${invitado.confirma}</td>
                    <td><button id="btnEditar"><i class="far fa-edit"></i></button></td>`;
    document.getElementById('lista').appendChild(tr);
}

const addInvitado = document.getElementById('addInvitado');
console.dir(addInvitado);//Para ver la salida en consola

// Determinar elemento a escuchar


addInvitado.addEventListener("click", agregarInvitado);