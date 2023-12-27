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

const users = ["Felipe", "Nicolas", "Pedro", "Henrique"]

for(let i = 0; i < users.length; i++) {
    console.log(`Listando o usuário: ${users[i]}`);
}

// 11 - Push e pop


// Push e pop correspondem ao fim 

const array = ["a", "b", "c"]

array.push("d");

console.log(array);
console.log(array.length);

array.pop();

console.log(array);

const itemRemovido = array.pop()

console.log(itemRemovido);

console.log(array);

array.push("z", "x", "y");

console.log(array);

// 12 - Shift e unshift

// Shift e unshift corresponde ao início

const letters = ["a", "b", "c", "d"]

const letter = letters.shift();

console.log(letter);
console.log(letters);

letters.unshift("f", "g", "h");

letters.unshift("z");

console.log(letters);

