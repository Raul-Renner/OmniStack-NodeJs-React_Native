const express = require("express");
const cons = require('cors');

//importanto as routes
const routes = require("./routes"); 
const app = express();

// to informando a express que estou utilizando JSON para as requisicoes
// to falando,"EXPRESS,TO ENVIANDO UM ARQUIVO JSON COMO REQUEST, VAI NO CORPO DA MINHA APLICACAO E CONVERTE ISSO PRA JS
// PRA QUE SEJA ENTENDIDO EM ALGO PELA APLICACAO"
app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333);

/** Rota: toda "url" Recurso: parte da url, 
 * tipo: /users, /home. /login isso tudo sao recursos para entrar nesta pagina*/
 /** METODOS HTTP
  * GET: buscar/listar uma informacao do back-end
  * POST: Criar uma informacao no back-end
  * PUT: Alterar uma informacao no back-end
  * DELETE: Remover uma informacao no back-end
  * 
  */

  /** Tipos de Parametros 
   * 
   * Query Paraments: Parametros nomeados e enviados na rota apos o simbolo "?" (filtros,paginacao)
   * ex: http://localhost:3333/users?name=Raul&idade=25
   * ex2: http://localhost:3333/users?page=2
   * 
   * Route Paraments: Paramentros utilizados para identificar Recurso
   * ex:http://localhost:3333/users/id - buscar usuarios com a id = 1
   * 
   * Request body: corpo da requisicao, utlizado para criar ou alterar recursos 
  */

  /** Banco de dados - sintaxe
   * 
   * Driver: SELECT * FROM users
   * 
   * Query Builder: table('users').select('*').where('')
   * 
   * 
   */
 
