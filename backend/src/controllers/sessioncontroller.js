const connection = require('../database/connection');

module.exports = {
 async create(request, response){
     const { id } = request.body;

     const empresas = await connection('empresas')
     .where('id', id)
     .select('name')
     .first();

    if (!empresas) {
        return response.status(400).json ({ error: 'no Empresa found with this ID'});
    } 

   return response.json(empresas); 
 }
}