const prompt = require('prompt-sync')();

let somaIdadeM = 0;
let qtdeM = 0;
let somaIdadeF = 0;
let qtdeF = 0;
for (let x =1; x <= 10; x++) {
    let idade = number(prompt('digite sua idade:'));
    let sexo = prompt('digite seu sexo: (m/f) ');

    if (sexo =='m') {
       qtdeM++;
        somaIdadeM = somaIdadeM + idade;

    }else if (sexo == 's') {
        qtdeF++;
        somaIdadeF = somaIdadeF + idade;

    }
}
console.log (`a media do sexo é M é de ${somaIdadeM / qtdeM}`)
console.log (`a media do sexo é M é de ${somaIdadeF / qtdef}`)
console.log (`a media do sexo é M é de ${(somaIdadeM + somaIdadeF) / 10}`)
