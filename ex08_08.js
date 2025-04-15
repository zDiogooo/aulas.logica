function SenhaAleatoria(qtdeCaracteres) {
    let listaCaracteres = ['!', 'a', 5, 'r', '$', '#'];
    let senha = '';

    let posSorteada = Math.floor(Math.random() * 6)
    senha = senha + listaCaracteres[posSorteada];
     
}
return senha;
