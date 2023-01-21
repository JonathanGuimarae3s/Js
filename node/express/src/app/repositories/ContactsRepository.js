/* eslint-disable no-promise-executor-return */
const { v4 } = require('uuid');

const contacts = [{
  id: v4(),
  name: 'jonathan',
  email: 'jonathan@mail.com',
  phone: '12345653234',
  category_id: v4(),
},
{
  id: v4(),
  name: 'jonathas',
  email: 'jonathas@mail.com',
  phone: '12345653234',
  category_id: v4(),
}];

class ContactRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
      // return todos os contatos existentes no db
    });
  }

  findById(id) {
    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.id === id),
    ));
  }
}
module.exports = new ContactRepository();
