const http = require('http');
const url = require('url');
const fs = require('fs')


function handleFile(req, res, callback) {

    let path = url.parse(req.url).pathname;
    let fileName = "." + path;

    fs.readFile(fileName, (erro, data) => {
        if (erro) {
            if (callback) {
                if (!callback(req, res)) {
                    res.writeHead(404, { "Content-Type": "text/html; charset=utf8" })
                    res.end("<h1>Página não encontrada</h1>")
                };
            }

        } else {
            res.writeHead(200, { "Content-Type": "text/html" })
            res.write(data);
            res.end();
        }


    })
}


function handleRequest(req, res) {
    let path = url.parse(req.url).pathname;

    if (path == "/teste") {
        res.end("teste")
        return true;
    }

    return false;
}


http.createServer((request, response) => {

    handleFile(request, response, handleRequest);


}).listen(3000, erro => {
    if (erro) {
        console.log(erro)
    } else {
        console.log("servidor rodando na porta 3000")
    }

})