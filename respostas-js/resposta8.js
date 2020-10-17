let resultado = 0;
for (let contador = 0; contador < 5; contador++) {
    let numero = parseFloat(prompt('Digite um número'));
    numero + contador;
    resultado += numero;
}
alert('A soma dos 5 números é: ' + resultado);