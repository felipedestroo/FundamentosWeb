// 1 - movendo-se pelo DOM

console.log(document.body);

console.log(document.body.childNodes[1]);

console.log(document.body.childNodes[1].childNodes);

console.log(document.body.childNodes[1].childNodes[1].textContent);

// 2- Selecionando por tag

const listItens = document.getElementsByTagName("li");

console.log(listItens);

// 3 - getElementById

const title = document.getElementById("title");

console.log(title);

// 4 - Selecionando elementos por classe
const products = document.getElementsByClassName("product");

console.log(products);

// 5 - querySelectorAll (Seletor de CSS)

// Para selecionar vários elementos utilizamos o querySelectorAll, e com o querySelector apenas um elemento com base no seletor de CSS.

const productsQuery = document.querySelectorAll(".product");

console.log(productsQuery);

const mainContainer = document.querySelector("#main-container");

console.log(mainContainer);