const personagens = document.getElementsByClassName("containerCharacter");
const fundo = document.getElementById("fundo");
const modal = document.getElementById("modal");

// for (const personagem of personagens) {
// };

personagens.onclick = abrirModal();

function abrirModal() {
    fundo.style.display = "block";
    // modal.style.display = "block";
    fundo.style.visibility = "visible";
};

const acabouJogo = JSON.parse(localStorage.getItem("ACABOUJOGO"));

if (acabouJogo) {
    const linkFinal = document.getElementById("botaoFinal");
    linkFinal.style.display = "block";
};