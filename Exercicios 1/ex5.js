const prompt = require("prompt-sync") ();

let metros = prompt("Qual é o valor de metros?");
let centimetros = metros * 100;
let milimetros = metros * 1000;
let quilometros = metros / 1000;
console.log(`A sua quantidade de metros é igual a ${metros}, convertendo eles para centimetros fica ${centimetros},
convertendo para milimetros fica ${milimetros}, e convertendo para quilometros fica ${quilometros}.`);