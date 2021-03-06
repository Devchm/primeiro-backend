const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {

   async index (request, response)  {
  const empresas = await connection('empresas').select('*');
    
  return response.json(empresas);
   },

    async create(request, response){
         //cadastro
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

        return response.json({ id });
    }
};
      
    