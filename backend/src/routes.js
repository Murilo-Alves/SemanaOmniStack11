
const express = require('express');

const OngController = require('./controller/OngController');
const IncidentsController = require('./controller/IncidentController');
const ProfileController = require('./controller/ProfileController');
const SessionController = require('./controller/SessionController');
//Conecção com o BD

const routes = express.Router();

routes.post('/sessions', SessionController.create)

//Listagem de dados ONG
routes.get('/ongs', OngController.index);

//Cadastro ONG
routes.post('/ongs', OngController.create);

//Informar casos
routes.post('/incidents',IncidentsController.create)
//Listar casos
routes.get('/incidents',IncidentsController.index)

//Deletar casos
routes.delete('/incidents/:id',IncidentsController.delete)

routes.get('/profile',ProfileController.index)

module.exports=routes;