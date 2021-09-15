const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');


router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../index.html'))
})

router.get('/invitados', function(req, res) {
    res.sendFile(path.join(__dirname, '../pages/Invitados.html'))
})

router.get('/infoInvitado', function(req, res) {
    res.sendFile(path.join(__dirname, '../pages/infoInvitado.html'))
})

router.post('/infoInvitado/enviarForm', function(req, res) {
    let invitades= fs.readFileSync(path.join(__dirname, '../public/data/lista.json'), "utf-8");
    let invitadesArray = JSON.parse(invitades);
    for(let i=0; i<invitadesArray.length; i++) { 
          if (invitadesArray[i].nombre == req.body.nombre && invitadesArray[i].apellido == req.body.apellido) {
              invitadesArray[i]= {
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                dire : req.body.direccion,
                localidad: req.body.localidad,
                celular: req.body.celular,
                documento : req.body.documento,
                edad: req.body.edad,
                silla: req.body.silla,
                vacuna: req.body.vacuna,
                menu : req.body.select,
                confirma: req.body.confirma
             }
         } fs.writeFileSync(path.join(__dirname, '../public/data/lista.json'), JSON.stringify(invitadesArray))
    } res.redirect('/')
    })


router.get('/loginNovios', function(req, res) {
    res.sendFile(path.join(__dirname, '../pages/loginNovios.html'))
})

module.exports = router;