const personagens = document.getElementsByClassName("containerCharacter");
const fundo = document.getElementById("fundo");
const fechar = document.getElementById("fechar");

for (const personagem of personagens) {
    personagem.addEventListener("click", abrirModal);
};

function abrirModal() {
    fundo.style.display = "block";
};

fechar.addEventListener("click", fecharModal);

function fecharModal() {
    fundo.style.display = "none";
};

const acabouJogo = JSON.parse(localStorage.getItem("ACABOUJOGO"));

if (acabouJogo) {
    const linkFinal = document.getElementById("botaoFinal");
    linkFinal.style.display = "block";
};