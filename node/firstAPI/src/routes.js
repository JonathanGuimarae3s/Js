const userController = require('./controllers/UserController')

// array de objetos  que representa cada endpoint da nossa API
module.exports = [{
    endpoint: '/users',
    method: 'GET',
    handler:userController.listUsers
},]