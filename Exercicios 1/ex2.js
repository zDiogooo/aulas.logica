const prompt = require("prompt-sync") (); 

let numero = parseInt(prompt('Qual é o seu número?')) 
let sucessor = numero + 1 
let antecessor = numero 1 

console.log(`${antecessor} ${numero} ${sucessor}`) 