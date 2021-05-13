let calc = require("./calc");

let args = process.argv.slice(2); //corta os dois primeiros elementos da array

let a = Number(args[1]);
let b = Number(args[2]);
let c = "";

if (args[0] === "s" || args[0] === "S") {
    c = calc.soma(a, b);
} else if (args[0] === "m" || args[0] === "M") {
    c = calc.mult(a, b);

} else {
    c = calc.erro;
}


console.log(c)




