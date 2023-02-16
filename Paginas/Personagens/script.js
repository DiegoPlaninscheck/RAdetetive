const personagens = document.getElementsByClassName("containerCharacter");
const fundo = document.getElementById("fundo");

for (const personagem of personagens) {
    personagem.addEventListener("click", abrirModal)
};


function abrirModal() {
    fundo.style.display = "block";
};

const acabouJogo = JSON.parse(localStorage.getItem("ACABOUJOGO"));

if (acabouJogo) {
    const linkFinal = document.getElementById("botaoFinal");
    linkFinal.style.display = "block";
};