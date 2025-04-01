const prompt = require("prompt-sync") ()

let num = prompt('qual é o numero?')
 
if (num %2 == 0) {
    console.log ('esse numero é par')

} else {
    console.log('esse numero é impar')
}