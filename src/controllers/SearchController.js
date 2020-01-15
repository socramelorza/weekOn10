const Dev = require('../models/Dev');

module.exports = {
    async index(request, response){
        //buscar todos os devs num raio 10km e por tecnologia
        console.log(request.query);
        return response.json({devs: [] });
    }
}