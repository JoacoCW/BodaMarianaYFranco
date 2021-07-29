//Array de invitados, la idea es más adelante pasarlo a un JSON externo y completar toda la lista de invitados

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



const addInvitado = document.getElementById('checkInvitado');
console.dir(addInvitado);//Para ver la salida en consola

// Determinar elemento a escuchar

addInvitado.addEventListener("click", checkInvitado);