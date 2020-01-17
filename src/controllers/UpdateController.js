const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    async update(request, response) {
        let { github_username,  name, techs, latitude, longitude, bio } = request.body;
        
        let dev = await Dev.findOne({ github_username });
        console.log(dev);
               
        if(dev) {
            let location = dev.location;
            let techsArray = dev.techs;
            if(!bio){
               bio = dev.bio;
            }; 
            if(techs){
                techsArray =  parseStringAsArray(techs);
            };
            if(longitude && latitude){
                    location = {
                    type: 'Point',
                    coordinates: [longitude, latitude]
                };
            };            
            dev = await Dev.updateOne({
                name,
                techs: techsArray,
                bio,
                location
            });
        }
        return response.json(dev);
    }
}