let args = process.argv.slice(2);

// console.log(args)

let a = Number(args[1]);
let b = Number(args[2]);
let c = "";

if (args[0] === "s" || args[0] === "S") {
    c = soma(a, b);
} else if (args[0] === "m" || args[0] === "M") {
    c = mult(a, b);
} else {
    c = "Opção invalida"
}

function soma(x, y) {
    return x + y;
}

function mult(x, y) {
    return x * y;
}


console.log(c)




