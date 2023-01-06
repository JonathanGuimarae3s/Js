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

        response.send(200, sortUsers);

    },
    getUserById(request, response) {
        // peguei o id do objto criado no index e comparei com o id do usuario no mock
        // se sao iguais aparecera no response, caso nao seja aparecerá mensagem de err
        const { id } = request.params;
        const user = users.find((user) => user.id === Number(id))
        if (!user) {
            return response.send(400, { error: 'user not found' });


        }
        response.send(200, user);



    }
    ,
    createUser(request, response) {
        let body = '';
        request.on('data', (chunk) => {
            body += chunk;

        })

        request.on('end', () => {
            body = JSON.parse(body)
            let lastUserId = users[users.length - 1].id
                ;
            let newUser = {
                id: lastUserId + 1,
                name: body.name,

            }
            users.push(newUser);
            response.send(200, newUser)
        })



    }
}
