constprompt= require('prompt-sync')
//estrutura de laço de repetição while
let resposta = 's';

while (resposta == 's') {
    console.log('você está dentro do bloco');
    resposta = prompt ('deseja continuar? s/n')
    
}
let total = 0
let qntd = 0
while (true){
    let valor = number (prompt("qual o valor do produto?"))
    if (valor == 0){
        break
    }else{
        total = valor
    }
    
}
