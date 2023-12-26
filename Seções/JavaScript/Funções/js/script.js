// // 1 - Criando uma função

// function minhaFuncao() {
//     console.log("Testando")
// }

// minhaFuncao(); 
// minhaFuncao(); 

// const minhaFuncaoEmVariavel = function() {
//     console.log("Função em variável");
// }

// minhaFuncaoEmVariavel();

// function funcaoComParametro(txt) {
//     console.log(`Imprimindo: ${txt}`)
// }

// funcaoComParametro("Imprimindo alguma coisa")
// funcaoComParametro("Outra função")


// // function minhaSoma () {
// //     let num1 = prompt("Escolha um número: ")
// //     let num2 = prompt("Escolha outro número: ")
// //     num1 = Number(num1);
// //     num2 = Number(num2);


// //     console.log(`A soma de ${num1} e ${num2} é ${(num1 + num2)}`)
// // }

// // minhaSoma();

// // 2 - Return
// const a = 10
// const b = 20
// const c = 30
// const d = 40

// function soma(n1, n2) {
//     return n1 + n2;
// }

// const resultado = soma(a, b);

// console.log(resultado);
// console.log(soma(c,d))

// const e = 5
// const f = 9
// const g = 2

// function sub(n1, n2) {
//     return n1 - n2;
// }

// const resultadoSub = sub(e, f)

// console.log(resultadoSub)
// console.log(sub(f, g))

// function multi(n1, n2) {
//     return n1 * n2;
// }

// const resultadoMulti = multi(f, g)

// console.log(resultadoMulti)
// console.log(multi(d, g))

// function divisao (n1, n2) {
//     return n1 / n2;
// }

// const resultadoDiv = divisao(a, e) 

// console.log(resultadoDiv)
// console.log(divisao(a, e))

// // 3 - escopo da função

// let y = 10

// function testandoEscopo() {
//     let y = 20
//     console.log(`Y dentro da função é ${y}`);
// }

// y = 50;

// testandoEscopo();

// console.log(`Y fora da função é: ${y}`);

// testandoEscopo();

// //  4 - Escopo Aninhado

// let m = 10

// function escopoAninhado() {
//     let m = 20

//     if (true) {
//         let m = 30

//         if (true) {
//             let m = 40

//             console.log(m);
//         }

//         console.log(m);

//     }

//     console.log(m);
// }

// escopoAninhado();

// console.log(m);

// // 5 - Arrow function

// const testeArrow = () => {
//     console.log("Isso é uma arrow function")
// }

// testeArrow();

// const parOuImpar = (n) => {
//     if (n % 2 === 0) {
//         console.log("Número par");
//         return;
//     }

//     console.log("Ímpar");
// };

// parOuImpar(5);
// parOuImpar(10);

// // 6 - Mais sobre arrow functions

// const raizQuadrada = (x) => {
//     return x * x;
// };

// console.log(raizQuadrada(4));

// const raizQuadrada2 = (x) => x * x;

// console.log(raizQuadrada2(5));

// console.log(raizQuadrada2(12));

// const helloWorld = () => console.log("Hello world!")

// helloWorld();

// // 7 - Parâmetro opcional

// const multiplication = function(m, n) {

//     if(n === undefined) {
//         return m * 2  
//     } else {
//         return m * n
//     }
// }

// console.log(multiplication(5));
// console.log(multiplication(5, 4));

// const greeting = (name) => {
//     if (!name) {
//         console.log("Olá");
//     } else {
//         console.log(`Olá, ${name}!`);
//     }
// }

// greeting();
// greeting("Felipe");

// 8 - Valor default

// const customGreeting = (name, greet = "Olá") => {
//     return `${greet}, ${name}`;
// };

// console.log(customGreeting("Felipe"));

// console.log(customGreeting("Thais!", "Bom dia"));

// const repeatText = (text, repeat = 2) => {

//     for(let i = 0; i < repeat; i++) {
//         console.log(text);
//     }
// };

// repeatText("Testando");

// repeatText("Agora repete 5 vezes", 5);

// const customPlus = (soma = 5, resultado = 5) => {
//     for(let i = 0; i < soma; i++) {
//         resultado = resultado + resultado
//         console.log(resultado);
//     }
// }

// customPlus();

// 9 - closure

// function someFunction () {
//     let txt= "Alguma coisa"

//     function display() {
//         console.log(txt)
//     }

//     display();
// }

// someFunction();

// // 10 - Mais sobre closure
// const multiplicationClosure = (n) => {
//     return (m) => {
//         return n*m;
//     };
// };

// const c1 = multiplicationClosure(5);

// const c2 = multiplicationClosure(10);

// console.log(c1);
// console.log(c2);
// console.log(c1(5));
// console.log(c2(10));

// 11 - recursion

// const untilTen = (n, m) => {
//     if (n < 10) {
//         console.log("A função parou de executar!")
//     } else {
//         const x = n - m;

//         console.log(x);

//         untilTen(x, m);
//     };
// };

// untilTen(100, 7);


