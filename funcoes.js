let fs = require('fs');


module.exports.criar = function (name, content) {

    fs.writeFile(name, content, (arq) => {
        if (arq) {
            console.log(arq)
        } else {
            console.log("Arquivo criado")
        }
    })

}

module.exports.ler = function (nome) {
    fs.readFile(nome, "UTF8", (erro, data) => {
        if (erro) {
            throw erro;
        } else {
            console.log(data)
        }
    })
}

module.exports.delet = function (nome) {
    fs.unlink(nome, (erro) => {
        if (erro) {
            console.log(erro)
        } else {
            console.log("Arquivo deletado.")
        }
    })
}

module.exports.inserir = function (nome, conteudo) {
    fs.appendFile(nome, "\n" + conteudo, erro => {
        if (erro) {
            console.log(erro)
        } else {
            console.log("Arquivo alterado.")
        }
    })
}

module.exports.renomear = function (nomeAtual, novoNome) {
    fs.rename(nomeAtual, novoNome, erro => {
        if (erro) {
            console.log(erro)
        } else {
            console.log("Arquivo renomeado.")
        }
    })
}