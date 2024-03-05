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

// 9 - Classes ES6
class CachorroClasse {
    constructor(nome, raca) {
        this.nome = nome;
        this.raca = raca;   
    }
}

const jeff = new CachorroClasse("Jeff", "Labrador");

console.log(jeff);

console.log(Object.getPrototypeOf(jeff));


// 10 - Mais sobre classes

class Caminhao {
    constructor(eixos, cor) {
        this.eixos = eixos;
        this.cor = cor; 
    }

    descreverCaminhao() {
        console.log(`Este caminhão tem ${this.eixos} eixos e é da cor ${this.cor}`);
    }
}

const scania = new Caminhao(6, "Vermelha")

console.log(scania);

scania.descreverCaminhao();

const c2 = new Caminhao(4, "Preta")

console.log(c2);
console.log(c2.motor);

Caminhao.prototype.motor = 4.0;

const c3 = new Caminhao(6, "Azul");

console.log(c3.motor);

 // 11 - Override
 class Humano {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
 }

 const felipe = new Humano("Felipe", 20);
 console.log(felipe);

Humano.prototype.idade = "Não definida"

console.log(felipe.idade);

console.log(Humano.prototype.idade);