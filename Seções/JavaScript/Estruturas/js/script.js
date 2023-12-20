// 1 - Variáveis
let nome = "Felipe";

console.log(nome);

nome = "Felipe Destro Munhos Silva"

console.log(nome);

const idade = 19 //Const não muda de valor

console.log(idade)

console.log(typeof nome)
console.log(typeof idade)

// 2 - Mais sobre variáveis

// let 2teste = "Inválido"
// let @teste = "Inválido"

let a = 10, b = 20, c = 30
console.log(a, b , c)

const nomecompleto = "Felipe Destro";
const nomeCompleto = "Munhos Silva";

console.log(nomecompleto)
console.log(nomeCompleto)

//simbolos permitidos para criação de variaveis 
let _teste = "ok" 
let $teste = "ok"

console.log(_teste)
console.log($teste)

// 3 - prompt

// const age = prompt("Digite a sua idade:")

// console.log(`Você tem ${age} anos`)

// 4 - Alert
// alert("Testando");

// const z = 50;
// alert(`O número é ${z}`)

// 5 - math
// console.log(Math.max(1, 4, 7, 10)); // Encontra o maior número
// console.log(Math.floor(5.14)); // Arredonda o número para baixo 
// console.log(Math.ceil(5.14)); //Arredonda o número para cima

// 6 - Console
// console.log("teste!");
// console.error("erro!")
// console.warn("Aviso");

//  7 - IF
const m = 10;

if (m > 5) {
    console.log(`O número ${m} é maior que 5`);
}

const user = "Pedro"

if(user === "João") {
    console.log(`Seu nome é ${user}`);
} else {
    console.log(`Seu nome é ${user}`);
}

// 8 - ELSE

// const loggedIn = false

// if(loggedIn) {
//     console.log("Está autenticado!");
// } else {
//     console.log("Não está autenticado!")
// }

// const q = 10
// const w = 25

// if (q > 5 && w > 20){
//     console.log("Os números são mais altos")
// } else {
//     console.log("Os números não são mais altos")
// }

// // 9 - Else If

// if(1 > 2) {
//     console.log("Teste")
// } else if (2 > 3) {
//     console.log("Teste 2")
// } else if (5 > 1) {
//     console.log("Teste 3")
// }

// const userName = "Felipe";
// const userAge = 19

// if (userName === "Roberto") {
//     console.log("Olá, Roberto!")
// } else if (userName === "Felipe" && userAge === 19) {
//     console.log("Olá, Felipe! Você tem 19 anos...")
// } else {
//     console.log("Nenhuma condição aceita!")
// }

// 10 - While

let p = 0;

while(p < 5) {
    console.log(`Repetindo ${p}`)
    p = p + 1
}

// loop infinito

let x = 10;

while(x > 5) {
    console.log(`imprimindo ${x}`)
    x = x - 1;
}
