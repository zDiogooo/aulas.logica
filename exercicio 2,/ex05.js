const prompt = require("prompt-sync") ()

let ano = prompt('qual seu ano de nascimento?')
let idade = 2025 - ano

if (idade <18) {
    
    console.log('menor de idade')

} else {
    console.log('maior de idade')
}