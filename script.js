let ops = require("./funcoes");

let args = process.argv.slice(2);
let fileName = args[1];
let fileContent = args[2];
let op = args[0]


if (op === "criar") {
    ops.criar(fileName, fileContent)
}

else if (op === "ler") {
    ops.ler(fileName)
}

else if (op === "deletar") {
    ops.delet(fileName)
}

else if (op === "alterar") {
    ops.inserir(fileName, fileContent)
}

else if (op === "renomear") {
    ops.renomear(fileName, fileContent)
}

else {
    console.log("Opção inválida!")
}







