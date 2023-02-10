const peronagem = document.getElementsByClassName("containerCharacter");
const fundo = document.getElementById("fundo");
const modal = document.getElementById("modal");

peronagem.addEventListener("click", abrirModal());

function abrirModal() {
    fundo.style.visibility="visible";
    modal.style.visibility="visible";
}