// 1 - Métodos

// const animal = {
//     nome: "Max",
//     latir: function() {
//         console.log("Au au")
//     },  
// };

// console.log(animal.nome);

// animal.latir();

// // 2 - Aprofundando em métodos

// const pessoa = {
    
//     nome: "Felipe",

//     getNome: function () {
//         return this.nome
//     },      

//     setNome: function(novoNome) {
//         this.nome = novoNome;
//     },

// };

// console.log(pessoa.nome);
// console.log(pessoa.getNome());

// pessoa.setNome("Destro");

// console.log(pessoa.getNome());

// // 3  - Prototype

// const text = "abc"

// console.log(Object.getPrototypeOf(text));

// const bool = true;

// console.log(Object.getPrototypeOf(bool));

// const arr = [];

// console.log(arr.lenght);

// console.log(Object.getPrototypeOf(arr));

// // 4 - Continuação prototype

// const myObject = {
//     a: "b",
// }

// console.log(Object.getPrototypeOf(myObject));

// console.log(Object.getPrototypeOf(myObject) === Object.prototype);

// const mySecondObject = Object.create(myObject);

// console.log(mySecondObject);

// console.log(mySecondObject.a);

// console.log(Object.getPrototypeOf(mySecondObject) === myObject);

// 5 - Classes básicas

const cachorro = {
    raca: null,
    patas: 4,
};

const pastorAlemao = Object.create(cachorro);

pastorAlemao.raca = "Pastor Alemão"

console.log(pastorAlemao);

console.log(pastorAlemao.patas);

const bulldog = Object.create(cachorro);

bulldog.raca = "Bulldog";

console.log(bulldog);

// 6 - Funções construtoras

function criarCachorro(nome, raca) {
    const cachorro = Object.create({})

    cachorro.nome = nome
    cachorro.raca = raca

    return cachorro;

}

const bob = criarCachorro("Max", "Husky");

console.log(bob);

const thor = criarCachorro("Thor", "Pinscher");

console.log(thor);

console.log(Object.getPrototypeOf(thor));

// 7 - Funções como classes
function Cachorro(nome, raca) {
    this.nome = nome;
    this.raca = raca;
}

const husky = new Cachorro("Max", "Husky");

console.log(husky);

// 8 - Classes de função com métodos
Cachorro.prototype.uivar = function() {
    console.log("Auuuu!")
};

console.log(cachorro.prototype);
husky.uivar();