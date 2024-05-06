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