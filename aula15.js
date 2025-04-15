//escopo de variaveis
//variavel global pode ser acessada em qualquer lugar
//variavel local só pode ser acessada dentro do bloco
function nomeEscola(){
    let escola = 'sesi';
    console.log(`valor dentro da função: ${escola}`);
}

let escola = 'senai'
console.log(`valor fora da função: ${escola}`);
nomeEscola();
console.log(`valor apos a função: ${escola}`);

//documentando funções usando o jsdoc

function soma(a,b);
/**
 * soma de dois numeros
 * @param {number} a - primeiro numero
 * @param {number} b - segundo numero
 * @returns {number} - soma dos dois numeros
 */