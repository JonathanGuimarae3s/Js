const userController = require('./controllers/UserController')

// array de objetos  que representa cada endpoint(rotas) da nossa API 
module.exports = [{
    // endpoint com os users
    endpoint: '/users',
    method: 'GET',
    handler: userController.listUsers
},
{
    // endpoint paraa filtra o user com id
    
    endpoint: '/users/:id',
    method: 'GET',
    handler: userController.getUserById
},]