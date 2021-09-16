const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');


router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../index.html'))
})

router.get('/loginNovios', function(req, res) {
    res.sendFile(path.join(__dirname, '../pages/loginNovios.html'))
})


router.post('/loginNovios', function(req, res) {
    const usuarios = [
        {username : "FranYMuffa", password : "1234"},
        {username : "Marco", password : "1234"},
        {username : "Joaco", password : "1234"}
    ]
    for(let i = 0; i<usuarios.length; i++) {
        if(req.body.username == usuarios[i].username && req.body.password == usuarios[i].password) {
        }
        res.redirect('/novios')
    } 
})

router.get('/novios', function(req, res) {
    res.sendFile(path.join(__dirname, '../pages/novios.html'))
})

router.post('/novios', function(req, res) {
    let invitades= fs.readFileSync(path.join(__dirname, '../public/data/lista.json'), "utf-8");
    let invitadesArray = JSON.parse(invitades);
    invitadesArray.push({
        nombre: req.body.nombre,
        apellido: req.body.apellido
    }); fs.writeFileSync(path.join(__dirname, '../public/data/lista.json'), JSON.stringify(invitadesArray))
    res.redirect('/')
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

module.exports = router;