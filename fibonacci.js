function fibs(num) {
    if (num == 1) return [0];
    if (num == 2) return [0, 1];
    const arr = [0, 1];
    for (let i = 2; i < num; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr;
}

function fibsRec(num, arr = []) {
    if (arr[num - 1] != undefined) return arr; //Memoization. Se o valor para aquela posição já estiver calculado, não calcula de novo

    if (num == 1) {
        arr[0] = 0; //É possível remover essa linha se inicializar o arr com [0]
        return arr;
    }
    if (num == 2) {
        arr[0] = 0; //É possível remover essa linha se inicializar o arr com [0]
        arr[1] = 1;
        return arr;
    }
    arr[num - 1] = fibsRec(num - 1, arr)[num - 2] + fibsRec(num - 2, arr)[num - 3];
    return arr;
}

module.exports = {fibs, fibsRec};

const NUM_OF_FIBS = 150;
// console.log(fibs(NUM_OF_FIBS));
// console.log(fibsRec(4));
