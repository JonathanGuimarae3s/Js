const userController = require("./controllers/UserController");

// array de objetos  que representa cada endpoint(rotas) da nossa API
module.exports = [
  {
    // endpoint com os users
    endpoint: "/users",
    method: "GET",
    handler: userController.listUsers,
  },
  {
    // endpoint paraa filtra o user com id

    endpoint: "/users/:id",
    method: "GET",
    handler: userController.getUserById,
  },
  {
    //endpoint para registrar um usuario na API
    // apenas nas requisções do tipo pos, put recebemos body
    endpoint: "/users",
    method: "POST",
    handler: userController.createUser,
  },
  {
    //endpoint para editar um usuario na API
    // apenas nas requisções do tipo pos, put recebemos body
    endpoint: "/users/:id",
    method: "PUT",
    handler: userController.updateUser,
  },
  {
    //endpoint para editar um usuario na API
    // apenas nas requisções do tipo pos, put recebemos body
    endpoint: "/users/:id",
    method: "DELETE",
    handler: userController.deleteUser,
  },
];
