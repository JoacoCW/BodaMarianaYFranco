let cantidadDeInvitados = parseInt(prompt('Ingrese la cantidad de invitados'));

console.log(cantidadDeInvitados);

for (let i = 1; i <= cantidadDeInvitados; i++){
    let nombre = prompt('Ingrese nombre completo del '+i+'° invitado');
    let menu = '';
    do {
        menu = prompt('Eliga menu vegetariano o regular, ingrese V o R según correspoda');
        if(menu != 'V' && menu != 'R'){
            alert(nombre+' se va a quedar sin comer por boludo. Ingrese V para menú vegetariano o R para menú regular');
        }
    } while (menu != "V" && menu != "R"){
        if(menu == 'V'){
            alert(nombre+' eligió menú vegetariano');
        }
        else {
            alert(nombre+' eligió menú regular');
            }
        }
    }