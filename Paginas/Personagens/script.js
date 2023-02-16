const personagens = document.getElementsByClassName("containerCharacter");
const fundo = document.getElementById("fundo");

for (const personagem of personagens) {
    personagem.addEventListener("click", abrirModal(fundo, modal));
};

function abrirModal(fundo, modal) {
    fundo.style.display = "block";
    modal.style.display = "block";
};

const acabouJogo = JSON.parse(localStorage.getItem("ACABOUJOGO"));

if (acabouJogo) {
    const linkFinal = document.getElementById("botaoFinal");
    linkFinal.style.display = "block";
};