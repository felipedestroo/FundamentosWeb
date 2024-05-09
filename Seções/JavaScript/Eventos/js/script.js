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

// 6 - Eventos de tecla
document.addEventListener("keyup", (e) => {
    console.log(`Soltou a tecla ${e.key}`);
});

document.addEventListener("keydown", (e) => {
    console.log(`Apertou a tecla ${e.key}`);
});

// 7 - Eventos de mouse
const mouseEvents = document.querySelector("#mouse");

mouseEvents.addEventListener("mousedown", () => {
    console.log("Pressionou o botão")
})

mouseEvents.addEventListener("mouseup", () => {
    console.log("Soltou o botão")
})

mouseEvents.addEventListener("dblclick", () => {
    console.log("Clique Duplo");
});

// 8 - Movimento do mouse
document.addEventListener("mousemove", (e) => {
    // console.log(`No eixo X: ${e.x}`);
    // console.log(`No eixo Y: ${e.y}`);
});

// 9 - Evento por scroll
window.addEventListener("scroll", (e) => {
    if(window.pageYOffset > 200) {
        console.log("Passamos de 200 pixels");
    }
})

// 10 - Evento de focus/blur
const input = document.querySelector("#my-input");

input.addEventListener("focus", (e) => {
    console.log("Entrou no input");
});

input.addEventListener("blur", (e) => {
    console.log("Saiu do input");
});

// 11 - Evento de carregamento
window.addEventListener("load", () => {
    console.log("A página carregou");
});

window.addEventListener("beforeunload", (e) => {
    e.preventDefault();
    e.returnValue = "teste";
})

// 12 - Debounce

const debounce = (f, delay) => {

    let timeout

    return (...arguments) => {
        if(timeout) {
            clearTimeout(timeout)
        }

        timeout = setTimeout(() => {
            f.apply(arguments)
        }, delay);
    };
};

window.addEventListener(
    "mousemove",
    debounce(() => {
        console.log("Executando a cada 400ms");
    }, 400)
);