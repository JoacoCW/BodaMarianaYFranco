let cantidadDeInvitados = prompt('Ingrese la cantidad de invitados que quiere confirmar');

function getInfoInvitados(number){
    console.log(number);
    for (let i = 1; i <= number; i++){
        let nombre = prompt('Ingrese nombre completo del '+i+'° invitado');
        let menu = '';
        function getMenu(nombre){
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
        getMenu(nombre);
        /*document.getElementById("resultados").innerHTML="<h4>El nvitado</h4><h6>nombre</h6><p>Eligió el menú</p><p>MENÚ</P>";*/
        //Lo dejo comentado hasta que sepa como resolverlo.
    }
}

getInfoInvitados(cantidadDeInvitados);