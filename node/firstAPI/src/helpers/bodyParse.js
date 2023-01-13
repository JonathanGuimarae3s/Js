function bodyParser(request,callback) {
    let body = '';
    request.on('data', (chunk) => {
        // ouve as mensagens,conforme for chegando novas strigns vms concatenando-as
        body += chunk;

    })

    request.on('end', () => {
        // apos o termino da mensagem ,fazemos o parse do body para transformar a
        // string em objeto
        // injeto o objt na prop bodye chamos a função handler que esta
        // de callback
        body = JSON.parse(body)

        request.body = body;
        callback()
    })

}

module.exports = bodyParser;