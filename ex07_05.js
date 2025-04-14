const prompt = require('prompt-sync')(); 
 let numero = ['2', '4', '3', '6', '9']; 
 let dobro = 0; for (let nr of numero){     
    console.log(`o nº é ${nr}`);     dobro = nr * 2;     
    console.log(`o dobro do nº é ${dobro}`);  }
