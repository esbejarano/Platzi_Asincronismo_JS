function sumar(numeroUno, numeroDos) {
    return numeroUno + numeroDos;
}

function calc(numUno, numDos, callback) {
    return callback(numUno, numDos);
}

function date(callback) {
    console.log(new Date());
    setTimeout(() => {
        let date = new Date();
        callback(date);
    }, 3000);
}

function printDate(dateNow) {
    console.log(dateNow);
}

console.log(calc(2, 3, sumar));
date(printDate);