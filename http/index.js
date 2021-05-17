const http = require('http');
const url = require('url');
const fs = require('fs')

http.createServer((request, response) => {

    let path = url.parse(request.url).pathname;
    if (path == "" || path == "/") { //caso não seja digitado a página especifica, redireciona para a index
        path = "/index.html"
    }
    let fileName = "." + path;



    fs.readFile(fileName, (erro, data) => {
        if (erro) {
            response.writeHead(404, { "Content-Type": "text/html; charset=utf8" })
            response.end("<h1>Página não encontrada</h1>")
        } else {
            response.writeHead(200, { "Content-Type": "text/html" })
            response.write(data);
            response.end();
        }


    })

}).listen(3000, erro => {
    if (erro) {
        console.log(erro)
    } else {
        console.log("servidor rodando na porta 3000")
    }

})