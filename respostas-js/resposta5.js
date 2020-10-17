let paisA = parseFloat(prompt('Digite a quantidade da população A'));
let paisB = parseFloat(prompt('Digite a quantidade da população B'));
let anos = 0;
const taxaAnualA = parseFloat(prompt('Digite a taxa anual de crescimento A'));
const taxaAnualB = parseFloat(prompt('Digite a taxa anual de crescimento B'));
let calculoA = taxaAnualA / 100;
let calculoB = taxaAnualB / 100;


    for (let i = 1; i < 100; i++) {

        paisA += paisA * calculoA;
        paisB += paisB * calculoB;
        if (paisA >= paisB) {
            anos = i;
            break;
        } 
    }
    alert('População A: ' + paisA + ' \n' + 'População B: ' + paisB + '\n' + 'Quantidade de anos: ' + anos);