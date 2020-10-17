for (let i = 0; i < 100; i++) {
    let nome = prompt('Qual o seu nome');
    if (nome.length >= 3) {
        alert('Ok');
        break;
    }else {
        alert('Digite mais que 3 palavras');
    }
}

for (let i = 0; i < 100; i++) {
    let idade = prompt('Qual a sua idade');
    idade = parseInt(idade)
    if (idade > 0 && idade <= 150) {
        alert('Ok');
        break;
    } else {
        alert('Digite um número entre 0 e 150');
    }
}
    
    for (let i = 0; i < 100; i++) {
    let salario = prompt('Quanto é o seu salário');
    if (salario > 0) {
        alert('Ok');
        break;
    } else {
        alert('O salário tem que ser maior que 0');
    }
}

for (let i = 0; i < 100; i++) {
    let sexo = prompt('Qual o seu sexo? digite f para feminino ou m para masculino');
    
    sexo = sexo.toLowerCase().charAt(0).trim();
    
   if (sexo == 'f' || sexo == 'm') {
       alert('Ok');
       break;
   } else {
       alert('Erro,digite novamente');
   }
}

for (let i = 0; i < 100; i++) {
    let estadoCivil = prompt('Qual o seu estado civil');   

    estadoCivil = estadoCivil.toLowerCase().charAt(0).trim();

    if (estadoCivil == 's' || estadoCivil == 'c' || estadoCivil == 'v' || estadoCivil == 'd') {
        alert('Ok');
        break;
    } else {
        alert('Erro,digite novamente');
    }
}