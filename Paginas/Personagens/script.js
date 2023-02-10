const personagens = document.getElementsByClassName("containerCharacter");
const fundo = document.getElementById("fundo");
const modal = document.getElementById("modal");

for(const personagem of personagens){
    personagem.addEventListener("click", abrirModal(fundo, modal));
}

function abrirModal(fundo, modal) {
    fundo.style.visibility="visible";
    modal.style.visibility="visible";
};