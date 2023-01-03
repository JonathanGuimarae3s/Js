const http = require("http");
const {URL} = require('url')

const routes = require("./routes");



const server = http.createServer((request, response) => {
    const parsedUrl = new URL(`http://localhost:3000${request.url}`)
   
    console.log(`Request method: ${request.method} | Endpoint: ${parsedUrl.pathname} `);
    const route = routes.find((routeObj) => (
        // se o method e o endpoint forem iguais a algum valor da rota quer dizer que a rota existe
        routeObj.endpoint === parsedUrl.pathname && routeObj.method === request.method)
    )
    if (route) {
        request.query = Object.fromEntries(parsedUrl.searchParams)
        // se a rota existir chamara a função handler passando o request e response como parametro
        route.handler(request, response);
    } else {
        response.writeHead(404, { "Content-Type": "text/html" });

        response.end(`Cannot ${request.method} ${parsedUrl.pathname}`);
    }
    /*
    response -> retorna o status do server
     writeHead(statusCode,header ) -> escrever no header 
     end(message)-> Mensagem  a ser retornada ao client
    */
});
/*
  .listen(port,callback)->evento que vai escutar o servidor, param fazer o
  upload
 
 */
server.listen(3000, () => {
    console.log("🔥Server started at http://localhost:3000");
});