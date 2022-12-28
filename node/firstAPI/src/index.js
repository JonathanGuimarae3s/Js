const http = require("http");
const { url } = require("inspector");
const { json } = require("stream/consumers");
const users = require("./mock/users");

const server = http.createServer((request, response) => {
    let html;
    console.log(`Request method: ${request.method} | Endpoint: ${request.url} `);

    if (request.url === "/users" && request.method === "GET") {
        response.writeHead(200, { "Content-Type": "application/json" });
        response.end(JSON.stringify(users));
    } else {
        response.writeHead(404, { "Content-Type": "text/html" });
        html = `Cannot ${request.method} ${request.url}`;
        response.end(JSON.stringify(html));
    }
    /**
       *  response retornar o status do server
       * writeHead(statusCode,header ) : escrever no header 
       * end(message): Mensagem  a ser retornada ao client
      //  */
    // response.writeHead(200, { 'Content-Type': 'text/html' });
    // response.end(html);
});
/**
 * .listen(port,callback):evento que vai escutar o servido, param fazer o
 * upload
 *
 */
server.listen(3000, () => {
    console.log("🔥Server started at http://localhost:3000");
});
