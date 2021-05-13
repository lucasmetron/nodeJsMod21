let calc = require("./calc")

let args = process.argv.slice(2);

let a = Number(args[1]);
let b = Number(args[2]);
let c;


if (args[0] === 'soma') {
    c = calc.soma(a, b);
} else if (args[0] === 'div') {
    c = calc.div(a, b);
} else if (args[0] === 'sub') {
    c = calc.sub(a, b);
} else if (args[0] === 'mult') {
    c = calc.mult(a, b);
} else {
    c = calc.erro;
}

console.log(c);
