//estruturas condicionais aninhadas
//switch case
const prompt = require('prompt-sync')();

let valorCompra = 120;
let clienteVip = true;

if (valor_compra >= 100) {
    if (clienteVip == true) {
        console.log(`você ganhou R$ ${valorCompra * 10 / 100}`);
    }} else{ 
 let desconto = valorCompra * 5 / 100;
 console.log(`você ganhou R$ ${desconto} de desconto`)
 console.log(`você ganhou R$ ${valorCompra * 10/100}`)
    let restante = 100 - valorCompra;
    console.log(`compre mais R$ ${restante} e ganhe desconto`);

}

let idade = 30;
if (idade < 16) {
    console.log('Não pode votar');
} else {
    if ( idade >= 18 && idade <70) {
        console.log('pode votar');
    }else {
        console.log('voto facultativo')
    }

}
const prompt = require("prompt-sync") ();

let n1 = Number(prompt('Digte um número: '))

switch(n1) {
    case 1:
        console.log('Este dia é Domingo')
        break;
    case 2:
        console.log('Este dia é Sábado')
        break;
    case 3:
        console.log('Este dia é Segunda')
        break;
    case 4:
        console.log('Este dia é Terça')
        break;
    case 5:
        console.log('Este dia é Quarta')
        break;
    case 6:
        console.log('Este dia é Quinta')
        break;
    case 7:
        console.log('Este dia é Sexta')
        break;
    default:
        console.log('Este dia é inválido')
}
const prompt = require("prompt-sync") ();

let AnoDeNascimento = Number(prompt('Qual é o ano do seu nascimento?'))
let AnoAtual = 2025
let idade = AnoAtual - AnoDeNascimento
if(idade <= 10){
    console.log('Criança')
} else if( idade > 11 || idade <= 17){
    console.log('Adolescente')
} else if ( idade >= 18 || idade <= 59){
    console.log(Adulto)
} else if ( idade > 60){
    console.log('Idoso')
}
const prompt = require("prompt-sync") ();

let NomeMes = prompt('Qual é o nome do seu mês: ');

if (NomeMes == 'Janeiro' || NomeMes == 'Março' || NomeMes == 'Maio' || NomeMes == 'Julho' || NomeMes == 'Agosto' || NomeMes == 'Outubro '|| NomeMes == 'Dezembro' ){
    console.log('O mês tem 31 dias')
} else if( NomeMes == 'Fevereiro'){
    console.log('O mês tem 28 dias')
} else if ( NomeMes == 'Novemebro' || NomeMes == 'Setembro' || NomeMes == 'Junho' || NomeMes == " Abril"){
   console.log('O mês tem 30 dias')
} 
const prompt = require("prompt-sync") ();

let nota1 = Number(prompt('Digite o número da sua primeira nota: '))
let nota2 = Number(prompt('Digite o número da sua segunda nota: '))
let media = (nota1 + nota2) / 2

if ( media >= 7){
    console.log('Aprovado')

} else if ( media >= 5 && media < 7){
    console.log('Em recuperação')
} else if( media < 5 ){
    console.log('Reprovado')
}
const prompt = require("prompt-sync") ();

let salario = Number(prompt('Qual é o salário do funcionário?'))


if (salario <= 2000) {
    let desconto = (salario / 100) * 12
    console.log(`O reajuste será de R${desconto + salario} reais`)
} else if ( salario > 2000 || salario < 4000){
    let desconto1 =  (salario / 100) * 10
    console.log(`O valor de reajuste será de R$ ${desconto1 + salario} reais.`)
} else if (salario > 4000 ){
    desconto2 = (salario / 100) * 8
    console.log(`O valor de reajuste será de R$ ${desconto2 + salario} reais.`)
}



