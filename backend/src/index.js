const express = require('express'); //pacote
const cors = require('cors');
const routes = require('./routes')  //arquivo

const app = express();

app.use(cors());
app.use(express.json()); //antes de todas as requisições ,Converte Json em objeto do javascript,
app.use(routes);


/*

Métodos HTTP:

GET : Buscar/LISTAR  uma informação do Backend
POST: Criar uma informação no Backend
PUT: Alterar uma informação no Backend
DELETE: Deletar uma informação do Backend

Tipos de Parâmetros:

Query PAarams: Parâmetros nomeados enviados na rota após "?" (filtros e paginação)
Route Params: Parâmetros utilizados para identificar recursos
Request Body: Corpo da requisição, usado para criar ou alterar recursos

Bancos de dados

SQL: MySQL,SQLite, PostgreSQL, Oracle, Microsoft SQL Serve
NoSQL: MongoDE, CouchDB, etc...

Drive: SELECT * FROM users
Query Builder: table('users').select('*').where()

*/


app.listen(3333);





