const prompt = require("prompt-sync") ()
let numero = parseInt(prompt('Qual é o seu número?')) 

let dobro = numero * 2 ;
let triplo = numero * 3 ;
let cubo = numero ** 3 ;
console.log(`O seu número é ${numero}, o dobro dele é ${dobro},
o triplo é ${triplo}, e elevada ao cubo é ${cubo}`);