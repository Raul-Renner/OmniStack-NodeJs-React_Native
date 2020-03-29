const crypton = require('crypto')

const connection = require('../database/connection');
module.exports = {
    async create(request, response){
        const {name, email, whatsapp, city, uf} = request.body;
        const id = crypton.randomBytes(4).toString('HEX');
       
        //quando a execucao da funcao chegar nesse ponto,
        //a execucao vai aguardar, a executar(finalizar) todo o codigo da linha 19 - 25 para depois continuar
       await connection('ongs').insert({
           id,
           name,
           email,
           whatsapp,
           city,
           uf,
        })
        //devolver com reposta ao cadastro o id da ong,pois ela deve saber qual id foi cadastrado pra ela
        return response.json({ id });     
    },
    async index(request, response){
        const list_ongs = await connection('ongs').select('*');
        return response.json(list_ongs);
    }    
};