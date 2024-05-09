// 1 -  Adicionando eventos

const btn = document.querySelector("#my-button")

btn.addEventListener("click", function(){
    console.log("Clicou em mim");
});

// 2 - removendo evento

const secondBtn = document.querySelector("#btn");

function imprimirMensagem() {
    console.log("Click!");
};

secondBtn.addEventListener("click", imprimirMensagem);

const thirdBtn = document.querySelector("#other-btn");

thirdBtn.addEventListener("click", () => {
    console.log("Evento removido");
    secondBtn.removeEventListener("click", imprimirMensagem);
});

// 3 - Argumentos do evento

const myTitle = document.querySelector("#my-title");

myTitle.addEventListener("click", (event) => {
    console.log(event);
    console.log(event.offsetX);
    console.log(event.pointerType);
    console.log(event.target);
})

// 4 - Propagação

const containerBtn = document.querySelector("#btn-container");
const insideContainerBtn = document.querySelector("#div-btn")

containerBtn.addEventListener("click", () => {
    console.log("Click 1");
});

insideContainerBtn.addEventListener("click", (e) =>{
    e.stopPropagation();
    console.log("Click 2");
});

// 5 - Removendo evento padrão

const a = document.querySelector("a")

a.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Não mudou de página");
});

// 6 - eventos de tecla
document.addEventListener("keyup", (e) => {
    console.log(`Soltou a tecla ${e.key}`);
});

document.addEventListener("keydown", (e) => {
    console.log(`Apertou a tecla ${e.key}`);
});

