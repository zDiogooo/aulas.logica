const prompt = require('prompt-sync')();

for (let x = 3; x > 0; x--) {
    let nome = prompt('qual é seu nome?')
    Saudacoes()
    function Saudacoes() {
        console.log('${nome} (tenha um bom dia')
    }
}