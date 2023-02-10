const peronagem = document.getElementsByClassName("containerCharacter");
const fundo = document.getElementsByClassName("fundo");
const modal = document.getElementsByClassName("modal")

peronagem.addEventListener("click", abrirModal(fundo, modal));

function abrirModal(fundo, modal) {
    fundo.style.visibility="visible";
    modal.style.visibility="visible";
}