let maior = 0;
for (let i = 0; i < 5; i++) {
    let numero = parseFloat(prompt('Digite um número'));
    if (numero > maior) {
        maior = numero;
    }
}
alert('O maior número é ' + maior);