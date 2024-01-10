// 1 - Métodos

const animal = {
    nome: "Max",
    latir: function() {
        console.log("Au au")
    },  
};

console.log(animal.nome);

animal.latir();

// 2 - Aprofundando em métodos

const pessoa = {
    
    nome: "Felipe",

    getNome: function () {
        return this.nome
    },      

    setNome: function(novoNome) {
        this.nome = novoNome;
    },

};

console.log(pessoa.nome);
console.log(pessoa.getNome());

pessoa.setNome("Destro");

console.log(pessoa.getNome());