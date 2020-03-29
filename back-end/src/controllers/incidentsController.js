const connection = require('../database/connection');

module.exports = {
    async create(request, response){
       const { titulo, descricao, value } = request.body;
       const ong_id = request.headers.authorization;

       const [id] = await connection('incidemts').insert({
           titulo,
           descricao,
           value,
           ong_id
       });
        return response.json({ id });

    },
    async index(request, response){
        const { page = 1} = request.query;
        const [count] = await connection('incidemts').count();
            console.log(count);
        const list_incidents = await connection('incidemts')
            .join('ongs', 'ongs.id', '=','incidemts.ong_id')
            .limit(5)
            .offset((page - 1) * 5)
            .select([
                'incidemts.*',
                'ongs.name',
                'ongs.email',
                'ongs.whatsapp',
                'ongs.city',
                'ongs.uf'
            ]);
        
        response.header("X-Total-Count", count['count(*)']);
        return response.json(list_incidents);
    },

    async delete(request, response){
        const { id } = request.params;
        const ong_id = request.headers.authorization;

        const incidents = await connection('incidemts')
        .where('id', id)
        .select('ong_id')
        .first();

        if(incidents.ong_id != ong_id){
            return response.status(401).json({error: 'Operation not permited.    '});
        }

        await connection('incidemts').where('id', id).delete();
        return response.status(204).send();
    }
    
    
  };