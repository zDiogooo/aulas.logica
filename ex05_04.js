const prompt = require('prompt-sync')();
let inicio = number(prompt('digite o número de inicio '))
let fim = number(prompt('digite o numero fim: '))
let passo = number(prompt('digite o numero de passo: '))
for (let contador = inicio; contador <= fim ; contador+= passo){
    console.log(`os valores são iguais a ${contador}`)
    
}