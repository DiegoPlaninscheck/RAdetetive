const peronagem = document.getElementsByClassName("containerCharacter");
const fundo = document.getElementsByClassName("fundo");
const modal = document.getElementsByClassName("modal")

peronagem.addEventListener("click", abrirModal);

function abrirModal() {
    fundo.style.visibility="visible";
    modal.style.visibility="visible";
}