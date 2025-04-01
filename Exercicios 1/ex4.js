const prompt = require("prompt-sync") ();

let nota1 = prompt("Qual foi a sua 1° nota?");
let nota2 = prompt("Qual foi a sua 2° nota?");
let Media = (nota1 + nota2) / 2;
console.log("Sua nota final é: " + Media);