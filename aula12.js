//variaveis compostas / vetores / arrays

//variavel simples, cabe apenas 1 dado por vez
let frut = 'maçã'
fruta = 'banana'

//variavel composta
let frutas = ['maçã, banana, abacaxi, uva'];

console.log(frutas);
console.log(frutas[1]);

//declarando uma lista vazia
let listaVazia = [];

//declaração de uma lista de números
let numeros = [1, 2, 8, 5, 9];

//declaração de uma lista de strings
let nomes = ['ana', 'joão', 'maria'];

//declaração de uma lista mista
let listaMista = [4, 'feijão', true, 7.55];

//declaração de uma lista com outras listas
let listaDeVetores = [['coca-cola', 'hot dog'], [5.00, 10.00]]

console.log (frutas)
frutas[3]= 'melancia';
console.log (frutas);

//inserindo um novo item
frutas.push('laranja')
frutas = [...frutas, 'laranja'] //os dois são a mesma coisa

//inserindo um novo item em posição especifica
frutas.splice(2,0,'morango')
// 2- posição
// 0- quantidade de itens a serem removidos

//excluindo um item da lista
frutas.splice(3,1) // excluindo 3 posições um item a ser removido
frutas.shift () // remove o primeiro item da lista
frutas.pop () //remove o ultimo item da lista

frutas = ['maçã', 'banana', 'morango', 'abacaxi','melancia', 'laranja' ,'uva']
console.log(frutas [4]) //) //vai mostrar a quarta posição
console.log (frutas.slice(0,4)) // do primeiro ao quarto
console.log (frutas.slice(1)) // do primeiro ao ultimo
console.log (frutas.slice)


