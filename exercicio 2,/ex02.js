const prompt = require("prompt-sync") ()

let n1 = Number(prompt('Qual é o primeiro número?'))
let n2 = Number(prompt('Qual é o segundo número?'))

if ( n1 > n2) {
    console.log(`o numero ${n1} é maior que o número ${n2} `);
    
} else {
 console.log(`o numero ${n1} é menor que o número ${n2} `)   
}
