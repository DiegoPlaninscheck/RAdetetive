const peronagem = document.getElementsByClassName("containerCharacter");
const modal = document.getElementsByClassName("fundo");

peronagem.addEventListener("click", abrirModal);

function abrirModal() {
    modal.style.display="flex";
}