// 1 - Arrays

 const lista = [1, 2, 3, 4, 5];

 console.log(lista)
 console.log(typeof lista)

 const itens = ["Felipe", false, 2, 2.15, [2]]

 console.log(itens);

//  2 - Mais sobre arrays
const array = ["a", "b", "c", "d"];

console.log(array[0]);
console.log(array[1]);
console.log(array[2]); 

//  3 - propriedades
const numbers = [5, 4, 3, 2, 1];

console.log(numbers.length);
console.log(numbers["length"]);

const myName = "Felipe";

console.log(myName.length);

// 4 - Métodos
const otherNumbers = [1, 2, 3]

const allNumbers = numbers.concat(otherNumbers);

console.log(allNumbers);

const text = "algum texto";

console.log(text.toUpperCase());
console.log(typeof text.toUpperCase)
console.log(text.indexOf("t"));