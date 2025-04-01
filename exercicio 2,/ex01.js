const prompt = require("prompt-sync")()

let nota1 = Number(prompt('qual foi a sua primeira nota?')) 
let nota2 = Number(prompt('qual foi a sua segunda nota?')) 
let media = (nota1 + nota2) / 2

if (media < 7) {
    console.log('você está reprovado')
} else {
    console.log('você está aprovado')
}
