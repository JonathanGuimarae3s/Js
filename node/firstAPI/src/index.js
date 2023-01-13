const http = require("http");
const url = require("url");
const bodyParser = require("./helpers/bodyParse");
const routes = require("./routes");

const server = http.createServer((request, response) => {
  /**
   * fazendo o parsee da url para extrair o query params
   * apos isso injetamos no requesst quando encontra uma rota
   * */
  const parsedUrl = url.parse(request.url, true);

  console.log(
    `Request method: ${request.method} | Endpoint: ${parsedUrl.pathname} `
  );
  // ===========
  // pegando o paramentros da url

  let { pathname } = parsedUrl;
  let id = null;
  const splitEndpoint = pathname.split("/").filter(Boolean);
  /* split para verificar quando o usuario esta fazendo uma requisição com 
    id
    */
  if (splitEndpoint.length > 1) {
    pathname = `/${splitEndpoint[0]}/:id`;
    id = splitEndpoint[1];
    // salvamos o id na var id 
    // para injetar na propiedade param do objeto request
  }

  // ===========
  // condiçao para ver se a rota existe
  const route = routes.find(
    (routeObj) =>
      // se o method e o endpoint forem iguais a algum valor da rota quer dizer que a rota existe
      routeObj.endpoint === pathname && routeObj.method === request.method
  );
  if (route) {
    request.query = parsedUrl.query;
    request.params = { id };
    response.send = (statusCode, body) => {
      response.writeHead(statusCode, { "Content-Type": "application/json" });
      response.end(JSON.stringify(body));
    };
    // se a rota existir chamara a função handler passando o request e response como parametro
    if (["POST", "PUT", "PATCH"].includes(request.method)) {
        /**verifica se o methodo da requisição que contenha body
         * 
         * 
         */
      bodyParser(request, () => route.handler(request, response));
    } else {
      route.handler(request, response);
    }
  } else {
    // se nao existe return error
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
