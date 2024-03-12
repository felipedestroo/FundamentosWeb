// // 1 - setTimeout
// console.log("Ainda não executou");

// setTimeout(function() {
//     console.log("Requisição Assíncrona")
// }, 2000);    

// console.log("Ainda não executou 2");

// // 2 - setInterval

// console.log("Ainda não executou");

// // setInterval(function() {
// //     console.log("Intervalo Assíncrono")
// // }, 3000);

// console.log("Ainda não executou 2");

// // 3 - Promises
// const promessa = Promise.resolve(5 + 5)

// console.log("Algum código")

// promessa
//     .then(value => {
//     console.log(`A soma é ${value}`)
//     return value;
//     });
//     promessa.then((value) => value - 1)
//     .then((value) => console.log(`Agora é ${value}`));
// console.log("Outro código")

// // 4 - Falha na promise
// Promise.resolve(4 * "Asd")
// .then((n) => {
//     if(Number.isNaN(n)) {
//         throw new Error("Valores Inválidos")
//     }
// })
// .catch((err) => console.log(`Um erro ocorreu: ${err}`));

// 5 - Rejeitando Promises
function checkNumber(n) {
    return new Promise((resolve, reject) => {
        if(n > 10) {
            resolve(`O número é maior que 10`);
        } else {
            reject(new Error(`Número muito baixo`));
        }
    });
}

const a = checkNumber(20);
const b = checkNumber(10);

a.then((v) => console.log(`O resultado é ${v}`)).catch((err) => console.log(`Um erro ocorreu: ${err}`));

b.then((v) => console.log(`O resultado é ${v}`)).catch((err) => console.log(`Um erro ocorreu: ${err}`));