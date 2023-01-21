/* eslint-disable*/
const { response, request } = require('express');
const ContactsRepository = require('../repositories/ContactsRepository');

class ContactController {
  async index(request, response) {
    // serve par listar todos os registros
    // async await pois essa é uma função bloqueante
    const contacts = await ContactsRepository.findAll();
    response.json(contacts);
  }

  async show(request, response) {
    // obter Um registro
    const { id } = request.params;//pegando o id do user
    const contact = await ContactsRepository.findById(id);//chamando a função que puxara o user do db
    if (!contact) {
      // 404 -> not found
      return response.status(404).json({ error: 'user not found' });
      // se nao achar o user retorna um error
    }
    response.json(contact);
    // retorna o user com respectivo id
  }

  store() {
    // CRIAR NOVO REGISTRO
  }

  update() {
    // editar um registro
  }

  async delete(request) {
    // deletar um registro
    const { id } = request.params;//pegando o id do user
    const contact = await ContactsRepository.delete(id);
    this.index()


  }
}
module.exports = new ContactController();
