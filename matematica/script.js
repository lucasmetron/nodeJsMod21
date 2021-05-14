const operacoesBasicas = require("./operacoesBasicas");
const areas = require("./areas");

let calc = {
    operacoesBasicas,
    areas
};


module.exports = { ...operacoesBasicas, ...areas }

console.log(operacoesBasicas.mult(5, 9))
