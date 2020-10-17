let paisA = 80000;
let paisB = 200000;
let anos = 0;
const taxaAnualA = 3 / 100;
const taxaAnualB = 1.5 / 100;

    for (let i = 1; i < 100; i++) {
        paisA += paisA * taxaAnualA;
        paisB += paisB * taxaAnualB;
        if (paisA >= paisB) {
            anos = i;
            break;
        } 
    }
    alert('População A: ' + paisA + ' \n' + 'População B: ' + paisB + '\n' + 'Quantidade de anos: ' + anos);