const connection = require('../database/connection');

module.exports = {
    async index(request, response){

       const {page = 1} = request.query;

       const [count] = await connection('promocoes')
       .count();

       console.log(count);



        const promocoes = await connection('promocoes')
        .join('empresas','empresas.id','=', 'promocoes.empresas_id')  //relacionar dados de 2 tabelas
        .limit(5)
        .offset((page -1)*5)  //paginação
     // .select('*')
        .select([
            'promocoes.*',
            'empresas.name',
            'empresas.email',
            'empresas.whatsapp', 
            'empresas.city',
            'empresas.uf']);
        response.header('x-total-count', count['count(*)']);
        return response.json(promocoes);
    },

    async create(request, response) {
        const {title, description, value } = request.body;
        const empresas_id = request.headers.authorization;

        const [id] = await connection('promocoes').insert({
            title,
            description,
            value,
            empresas_id
        });

        return response.json({ id })
    },
    async delete(request, response){
        const {id} = request.params;
        const empresas_id = request.headers.authorization;

     const promocoes = await connection('promocoes')
         .where('id', id)
         .select('empresas_id')
         .first();
     if (promocoes.empresas_id === empresas_id) {
         return response.status(401).json ({ error: 'Operation not permitted.'});
     }
     await connection('promocoes').where('id', id).delete();

     return response.status(204).send();
  }
};