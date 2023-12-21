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

// let p = 0;

// while(p < 5) {
//     console.log(`Repetindo ${p}`)
//     p = p + 1
// }

// loop infinito

// let x = 10;

// while(x > 5) {
//     console.log(`imprimindo ${x}`)
// }

// 11 - Do while
// let o = 10;

// do {
//     console.log(`Valor de o: ${o}`)
//     o--
// } while (o > 1);

// 12 - For
// for (let t = 0; t < 10; t++) {
//     console.log("Repetindo a mensagem")
// }

// let r = 10;

// for(r; r > 0; r = r - 1) {
//     console.log(`O r está diminuindo: ${r}`)
// }

// 13 - Identação
for (let u = 0; u < 10; u++){
    if (u * 2 > 10) {
        console.log(`Maior que 10! ${u}`)
    } else {
        if (u / 2 === 0) {
            console.log("Deu 0")
        }
    }
}

// 14 - Break
for(let g = 20; g > 10; g --){
    console.log(`O valor de g é: ${g}`)

    if ( g == 15) {
        console.log("O g é 15");
        break
    }
}

for(let f = 0; f < 10; f++){
    console.log(`O valor de f é: ${f}`)

    if(f === 6) {
        console.log("O valor de f é 6")
        break
    }
}

// 15 - continue
for(let s = 1; s <= 10; s++){
    // operador resto = %
    if(s % 2 === 0) {
        console.log("Número par!")
        continue;
    }

    console.log(s)
}

// 16 - Switch
const job = "médico"

switch (job) {
    case "Adovado":
        console.log("Você é um advogado");
        break;
    case "it":
        console.log("Você é um it");
        break;
    case "médico":
        console.log("Você é um médico");
        break;
    default:
        console.log("Profissão não encontrada");
}

// switch "errado" pois não tem break

const l = 100;

switch (l) {
    case 200:
        console.log("O Valor de L é 200")
    case 100:
        console.log("O Valor de L é 100")
    case 10:
        console.log("O Valor de L é 10")
    default:
        console.log("L não foi encontrado")
}
