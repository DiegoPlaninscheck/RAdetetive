const personagens = document.getElementById("abrirModal");
const fundo = document.getElementById("fundo");
const modal = document.getElementById("modal");

// for (const personagem of personagens) {
// };

personagens.addEventListener("click", abrirModal)

function abrirModal() {
    fundo.style.display = "block";
};

const acabouJogo = JSON.parse(localStorage.getItem("ACABOUJOGO"));

if (acabouJogo) {
    const linkFinal = document.getElementById("botaoFinal");
    linkFinal.style.display = "block";
};