const peronagem = document.getElementsByClassName("containerCharacter");
const fundo = document.getElementById("fundo");
const modal = document.getElementById("modal");

peronagem.addEventListener("click", abrirModal(fundo, modal));

function abrirModal(fundo, modal) {
    fundo.style.visibility="visible";
    modal.style.visibility="visible";
}