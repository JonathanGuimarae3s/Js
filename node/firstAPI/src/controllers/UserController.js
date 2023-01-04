//controlador é responsavel por armazenar toda regra de negocio da aplicação
const users = require('../mock/users');
module.exports = {
    listUsers(request, response) {
        const { order } = request.query;
        const sortUsers = users.sort((a, b) => {
            if (order === 'desc') {
                return a.id < b.id ? 1 : -1;

            }
            return a.id > b.id ? 1 : -1;


        })
        response.writeHead(200, { "Content-Type": "application/json" });
        response.end(JSON.stringify(users));

    },
    getUserById(request, response) {
        // peguei o id do objto criado no index e comparei com o id do usuario no mock
        // se sao iguais aparecera no response, caso nao seja aparecerá mensagem de err
        const { id } = request.params;
        response.writeHead(200, { "Content-Type": "application/json" });
        response.end(JSON.stringify({ id }));

    }
}
