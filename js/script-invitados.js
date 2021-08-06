//Array de invitados, la idea es más adelante pasarlo a un JSON externo y completar toda la lista de invitados

const invitados = [
    {nombre : "Franco", apellido : "Silva", documento : "39999999", dire : "Calle tal 546", menu : "Clasico", confirma : "si", id : 1},
    {nombre : "Mariana", apellido : "Torreblanca", documento : "38999999", dire : "Calle tal 546", menu : "Clasico", confirma : "si", id : 2},
    {nombre : "Fabricio", apellido : "Silva", documento : "40999999", dire : "", menu : "", confirma : "", id : 3},
    {nombre : "Roxana", apellido : "Podesta", documento : "", dire : "", menu : "", confirma : "", id : 4},
    {nombre : "Sergio", apellido : "Torreblanca", documento : "", dire : "", menu : "", confirma : "", id : 5},
    {nombre : "Cecilia", apellido : "Apellido", documento : "", dire : "", menu : "", confirma : "", id : 6},
    {nombre : "Facundo", apellido : "Torreblanca", documento : "", dire : "", menu : "", confirma : "", id : 7},
    {nombre : "Omar", apellido : "Torreblanca", documento : "", dire : "", menu : "", confirma : "", id : 8},
    {nombre : "Agostina", apellido : "Torreblanca", documento : "", dire : "", menu : "", confirma : "", id : 9},
    {nombre : "Mama de facu", apellido : "Hinojosa", documento : "", dire : "", menu : "", confirma : "", id : 10},
    {nombre : "Katia", apellido : "Itin", documento : "", dire : "", menu : "", confirma : "", id : 11},
    {nombre : "Giovanni", apellido : "Casali", documento : "", dire : "", menu : "", confirma : "", id : 12},
    {nombre : "Joaquín", apellido : "Weiss", documento : "37608601", dire : "Juramento 3675", menu : "Clasico", confirma : "si", id : 13}
];



const addInvitado = document.getElementById('checkInvitado');
console.dir(addInvitado);//Para ver la salida en consola

// Determinar elemento a escuchar

addInvitado.addEventListener("click", checkInvitado);