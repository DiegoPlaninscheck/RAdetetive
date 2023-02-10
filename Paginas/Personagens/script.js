const personagem = document.getElementsByClassName("containerCharacter");
const fundo = document.getElementById("fundo");
const modal = document.getElementById("modal");

personagem.addEventListener("click", abrirModal());

function abrirModal() {
    fundo.style.visibility="visible";
    modal.style.visibility="visible";
}