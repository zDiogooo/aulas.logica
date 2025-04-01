const prompt = require('prompt-sync')();//criando nossa primeira variavel
//uma variavel serve para armazenar uma informação/valor
//o memória crie um espaço com o nome curso e receba o valor 'desenvolvimento'
var curso = 'desenvolvimento de sistemas';

console.log('curso')
var idade = 37; //inteira //integer
var temperatura = 24.5; //real // float
var nome = 'diogo'; //string
console.log('olá + ' +
 nome +
 ' você tem ' +
 idade )
console.log('está cursando ' +
 curso +
 'hoje faz ' +
 temperatura +
 '°c')
//declarando uma variável lógica/boolean/boleano (true/false)
var podedirigir = true;
var estáchovendo = false;

//declarando uma variavel nula
var escola;
//exercicio
//nota1 válido
//nota2 valido
//nota3 invalido
//nota4 invalido
//nota5 invalido
//nota6 valido
//nota7 invalido
//nota8 valido
//nota9 ianvalido
//nota10 invalido
//nota11 invalido
//nota12 valido
//nota13 valido
//nota14 valido
let cidade = 'andradina'
var turma = '2°b'
const ano = 2025'

console.log(turma); 
turma = '3°B' //reatribuindo o valor de uma variavel
console.log(turma);
ano = 2026;
//criem duas variaveis num1 e num2 e recebeam as informaçoes pelo prompt
var num1 = prompt('digite o primeiro n°;')
var num2 = prompt('digite o segundo n°;')
console.log (num1 + num2);

//receber uma informação já convertendo seu tipo de dados
console.log(typeof num1); //string
num1 = Number(num1);      //convertendo a variavel do tipo string para number
console.log (num1 + num2) ;

//convertendo os dados de uma variavel
nr1 = '100.14';           //string
nr1 = Number("100.14");   //convertendo string para number
nr1 = parseInt("100.14"); //convertendo string para integer
nr1 = parseFloat("100");  //convertendo string para float 100.00
nr1 = String(100.14);     //convertendo um number para string
 
_nome = prompt('qual é o nome');   //string
_idade = parseInt(prompt('qual é a idade?'));   //int
_peso = parseFloat(prompt('qual é o peso?'))

//criações de variaveis
var nome = 'diogo'
var altura = '1,74'
var escola = 'sesi'
var anos = 'segundo'

nome = prompt('qual seu nome?')
altura = prompt('qual sua altura?')
escola = prompt('qual sua escola?')
anos = prompt('qual seu ano escolar?')
