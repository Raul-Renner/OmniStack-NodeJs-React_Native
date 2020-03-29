//importando o express
const express = require('express');
const OngController = require('./controllers/OngController');
const incidentsController = require('./controllers/incidentsController');
const ProfileController = require('./controllers/ProfileController');

const sessionController = require('./controllers/sessionController');



//const connection = require('./database/connection');
//estou desacomplado o modulo de rotas o express para uma variavel
const routes = express.Router();

//async: estou dizendo que essa funcao irá roda de forma asincrona,ou seja, todo de uma vez
routes.post('/ongs', OngController.create);
routes.get('/ongs',OngController.index);



routes.post('/incidemts', incidentsController.create);
routes.get('/incidemts', incidentsController.index);

routes.delete('/incidemts/:id', incidentsController.delete);
routes.get('/profile', ProfileController.index);

routes.post('/session',sessionController.create);

//routes.post('/ongs', async(request, response) => {
    // const param = request.query;
     //request.params;
     //const params = request.body;
   //  const {name, email, whatsapp, city, uf} = request.body;
    // const id = crypton.randomBytes(4).toString('HEX');
    
     //quando a execucao da funcao chegar nesse ponto,
     //a execucao vai aguardar, a executar(finalizar) todo o codigo da linha 19 - 25 para depois continuar
  //  await connection('ongs').insert({
   //     id,
        /**name,
        email,
        whatsapp,
        city,
        uf,
     })
     //devolver com reposta ao cadastro o id da ong,pois ela deve saber qual id foi cadastrado pra ela
     return response.json({ id });
 });
//deixando as rotas disponiveis para serem usadas na aplicacao atraves desse modulo de rotas
//exportanto a variavel routes para ser importanto pela aplicacao disponibilizando as rotas
*/
 module.exports = routes;