//importando biblioteca para receber informação do usuário
constprompt= require('prompt-sync')

//declarando variável sem dados (undefined)
let nota;
//declarando variável com informação
let nome = "carlos";
exports.nome = nome;

//reatribuindo um valor á variável nome
nome = "roberto"
nota = 8.5;

let sobrenome = prompt('digite seu sobrenome: ');
exports.sobrenome = sobrenome;
let nota1 = Number(prompt('digite a nota da 1° prova: '));
let nota1 = Number(prompt('digite a nota da 1° prova: '));

//processamento dos dados
let media = (nota1 + nota2) / 2;
let nomeCompleto = nome + ' ' + sobrenome;
let idade = prompt('digite sua idade:')
let idadeNumero = parseInt(idade)

//saída dos dados
console.log('---Relatório final---');
console.log(`o seu nome é: ${nomeCompleto} \n sua idade ${idade}`)
console.log(`sua media é: ${media}`)

let n = 0; //0
n = n + 1; //1
n = n + 1; //2
n = n + 1; //3
n += 1;    //4
n++;       //5
n += 3;    //8
n--        //7

