// 1 - Arrays

//  const lista = [1, 2, 3, 4, 5];

//  console.log(lista)
//  console.log(typeof lista)

//  const itens = ["Felipe", false, 2, 2.15, [2]]

//  console.log(itens);

//  2 - Mais sobre arrays
// const array = ["a", "b", "c", "d"];

// console.log(array[0]);
// console.log(array[1]);
// console.log(array[2]); 

// //  3 - propriedades
// const numbers = [5, 4, 3, 2, 1];

// console.log(numbers.length);
// console.log(numbers["length"]);

// const myName = "Felipe";

// console.log(myName.length);

// 4 - Métodos
// const otherNumbers = [1, 2, 3]

// const allNumbers = numbers.concat(otherNumbers);

// console.log(allNumbers);

// const text = "algum texto";

// console.log(text.toUpperCase());
// console.log(typeof text.toUpperCase)
// console.log(text.indexOf("t"));

// // 5 - Objetos
// const person = {
//     name: "Felipe Destro",
//     age: 31,
//     job: "Programador"
// }

// console.log(person);

// console.log(person.name);
// console.log(person.name.length);
// console.log(typeof person);

// 6 - Criando e deletando propriedades

// const car = {
//     engine: 2.0,
//     brand: "VW",
//     model: "Tiguan",
//     km: 2000,
// };

// console.log(car)

// car.doors = 4;
// console.log(car)

// delete car.km;

// console.log(car);

// // 7 - Mais sobre objetos

// const obj = {
//     a: "teste",
//     b: true,
// };

// console.log(obj instanceof Object);

// const obj2 = {
//     c: [],
// };

// Object.assign(obj2, obj)

// console.log(obj2);
// console.log(obj);

// // 8 - Conhecendo melhor os objetos 
// console.log(Object.keys(obj));
// console.log(Object.keys(obj2));
// console.log(Object.keys(car));

// console.log(Object.entries(car));

// // 9 - Mutação
// const a = {
//     name: "Felipe Destro",
// };

// const b = a;

// console.log(a);
// console.log(b);

// a.age = 19;

// console.log(a);
// console.log(b);

// delete b.age

// console.log(a);
// console.log(b);

// 10 - Loop em array

// const users = ["Felipe", "Nicolas", "Pedro", "Henrique"]

// for(let i = 0; i < users.length; i++) {
//     console.log(`Listando o usuário: ${users[i]}`);
// }

// 11 - Push e pop


// Push e pop correspondem ao fim 

// const array = ["a", "b", "c"]

// array.push("d");

// console.log(array);
// console.log(array.length);

// array.pop();

// console.log(array);

// const itemRemovido = array.pop()

// console.log(itemRemovido);

// console.log(array);

// array.push("z", "x", "y");

// console.log(array);

// 12 - Shift e unshift

// Shift e unshift corresponde ao início

// const letters = ["a", "b", "c", "d"]

// const letter = letters.shift();

// console.log(letter);
// console.log(letters);

// letters.unshift("f", "g", "h");

// letters.unshift("z");

// console.log(letters);

// 13 - indexOf e lastIndexOf

// const myElements = ["Morango", "Maça", "Abacate", "Banana", "Abacate"];

// console.log(myElements.indexOf("Maça"));
// console.log(myElements.indexOf("Abacate"));

// console.log(myElements[2]);
// console.log(myElements[myElements.indexOf("Abacate")]);

// console.log(myElements.lastIndexOf("Abacate"));

// console.log(myElements.indexOf("Mamão"));
// console.log(myElements.lastIndexOf("Mamão"));

// 14 - Slice
// É utilizado para extrair um array menor de um array maior;

// const testSlice = ["a", "b", "c", "d", "e", "f"] 

// const subArray = testSlice.slice(2, 4);

// console.log(testSlice);
// console.log(subArray);

// const subArray2 = testSlice.slice(2, 4 + 1);

// console.log(subArray2);

// const subArray3 = testSlice.slice(10, 20);

// console.log(subArray3);

// const subArray4 = testSlice.slice(2);

// console.log(subArray4);

// const subArray5 = testSlice.slice(1, 4 - 1);
// console.log(subArray5);

// 15 - forEach
// É como uma estrutura for ou while, porém é um método, ele percorre cada um dos elementos do array;

// const nums = [1, 2, 3 , 4, 5];

// nums.forEach((numero) => {
//     console.log(`O número é ${numero}`);
// });

// const posts = [
//     {title: "Primeiro post", category: "PHP"},
//     {title: "Segundo post", category: "JavaScript"},
//     {title: "Terceiro post", category: "Python"},
// ];

// posts.forEach((post) =>{
//     console.log(`Exibindo post: ${post.title}, da categoria: ${post.category}`);
// }); 

// 16 - Includes
// Ele verifica se o array tem um elemento;

// const brands = ["bmw", "volks", "fiat"];
// const search = prompt("Qual marca você deseja procurar?");

// var containBrands = brands.some(word=>search.includes(word))

// console.log(brands.includes("fiat"));
// console.log(brands.includes("mercedes"));

// if(containBrands) {
//     console.log(`Há carros da ${search}`)
// } else {
//     console.log("Fora de estoque!")
// }

// 17 - Reverse
//  inverte os elementos de um array e ele modifica o array original;

const reverseTest = [1, 2, 3, 4, 5];

reverseTest.reverse();

console.log(reverseTest);

// 18 - String
// Tbm são objetos, não pode utilizar length em uma string ou array;

// *** Métodos de String ***

// 19 - Trim
// O trim remove tudo que não é texto em uma string, como caract especial ou espaços em branco

const trimTest = "      testando \n"

console.log(trimTest);
console.log(trimTest.trim());

console.log(trimTest.length);
console.log(trimTest.trim().length);

// 20 - padstart

const testPadStart = "1"

const newNumber = testPadStart.padStart(2, "C");

console.log(testPadStart);
console.log(newNumber);

const  testePadEnd = newNumber.padEnd(10, "dx");

console.log(testePadEnd);

