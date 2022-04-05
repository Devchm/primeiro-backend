const express = require('express');
//const crypto = require('crypto'); //pacote que vem junto com nodemon, gerar string aleatorio

const empresacontroller = require ('./controllers/empresacontroller');
const promocaocontroller = require ('./controllers/promocaocontroller');
const profilecontroller = require ('./controllers/profilecontroller');
const sessioncontroler = require ('./controllers/sessioncontroller');
//const connection = require('./database/connection');

const routes = express.Router();

//listagem
routes.get('/empresas', empresacontroller.index);
//routes.get('/empresas', async(request, response) => {
// const empresas = await connection('empresas').select('*');

// return response.json(empresas);)};

//cadastro
 routes.post('/empresas', empresacontroller.create);
/*routes.post('/empresas',async (request, response) => {
    //const data = request.body;
    const { name, email, whatsapp, city, uf } = request.body;

    const id = crypto.randomBytes(4).toString('HEX'); // gerar string aleatorio
    //console.log(data);
    await connection('empresas').insert({ //await vai aguarda os dados preenchidos
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    })
  */

    //const body = request.body;
    //console.log(body);
  
    //console.log(params);
    // return response.send('HELLO')
       /////////////return response.json({ id }); //({
       // evento: 'estudos',
       // aluno: 'Claudioo'
    // });
 // });

  routes.post('/sessions', sessioncontroler.create );

  routes.get('/profile', profilecontroller.index);


  routes.get('/promocoes', promocaocontroller.index);
  routes.post('/promocoes', promocaocontroller.create); 
  routes.delete('/promocoes/:id', promocaocontroller.delete);

  module.exports = routes;
  