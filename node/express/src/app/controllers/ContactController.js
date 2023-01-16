const { response,request } = require("express");

class ContactController {
  index(request, response) {
    // serve par listar todos os registros
    response.send('send from conatact controller')
  }
  show() {
    // obter Um registro
  }
  store() {
    // CRIAR NOVO REGISTRO
  }
  update() {
    // editar um registro
  }
  delete() {
    // deletar um registro
  }
}
module.exports = new ContactController();


