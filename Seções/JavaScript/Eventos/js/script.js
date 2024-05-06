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