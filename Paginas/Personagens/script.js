const infoPersonagens = [
    { foto: "", nome: "", profissao: "", idade: "", caracteristica1: "", caracteristica1: "" },
    { foto: "", nome: "", profissao: "", idade: "", caracteristica1: "", caracteristica1: "" },
    { foto: "", nome: "", profissao: "", idade: "", caracteristica1: "", caracteristica1: "" },
    { foto: "", nome: "", profissao: "", idade: "", caracteristica1: "", caracteristica1: "" },
    { foto: "", nome: "", profissao: "", idade: "", caracteristica1: "", caracteristica1: "" },
    { foto: "", nome: "", profissao: "", idade: "", caracteristica1: "", caracteristica1: "" }
];

const personagens = document.getElementsByClassName("containerCharacter");
const fundo = document.getElementById("fundo");
const fechar = document.getElementById("fechar");
const acabouJogo = JSON.parse(localStorage.getItem("ACABOUJOGO"));

for (const personagem of personagens) {
    personagem.addEventListener("click", abrirModal);
};

function abrirModal() {
    fundo.style.display = "flex";
};

fechar.addEventListener("click", fecharModal);

function fecharModal() {
    fundo.style.display = "none";
};

if (acabouJogo) {
    const linkFinal = document.getElementById("botaoFinal");
    linkFinal.style.display = "block";
};