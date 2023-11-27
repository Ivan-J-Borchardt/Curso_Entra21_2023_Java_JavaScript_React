const somar = require("./soma.js")
const subtrair = require("./subtracao.js")

const mate = require("./mate2.js")

const {div, mult} = require("./mate.js")

console.log(somar(2, 3));
console.log(subtrair(5, 2))

console.log(mate.div(6, 3))
console.log(mate.mult(2, 4));

console.log(div(6, 3))
console.log(mult(2, 4));