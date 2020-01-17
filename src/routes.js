const { Router } = require('express');
const DevController = require('./controllers/DevControllers');
const SeachController = require('./controllers/SearchController');
const UpdateController = require('./controllers/UpdateController');

const routes = Router();

//métodos RestFull HTTP: GET, POST, PUT, DELETE
//Query Params: request.query (filtros, ordenação, paginação, ...)
//Route Params: request.params (Identificar um recurso na alteração ou remoção)
//Body
routes.get('/', (request, response) => {
    //return response.json({ message: 'Hello Worlds'});
    return response.send('<h1>Hello Worlds');
});
routes.post('/', (request, response) => {
    return response.json({ message: 'Hello Worlds'});
    //return response.send('<h1>Hello Worlds');
});
routes.get('/users', (request, response) => {
    console.log(request.query);
    return response.send('busca get query');
});
routes.delete('/users/:id', (request, response) => {
    console.log(request.params);
    return response.send('busca delete params');
});
routes.put('/users', (request, response) => {
    console.log(request.body);
    return response.send('<h1>busca put body json</h1>');
});
routes.get('/devs', DevController.index);
routes.put('/devs', DevController.store);
routes.get('/search', SeachController.index);
routes.put('/update', UpdateController.update);

module.exports = routes;
