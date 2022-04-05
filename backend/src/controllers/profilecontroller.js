const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const empresas_id = request.headers.authorization;

        const promocoes = await connection('promocoes')
        .where('empresas_id', empresas_id)
        .select('*');

        return response.json(promocoes);
    }
}