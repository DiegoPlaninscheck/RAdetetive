const personagens = document.getElementsByClassName("containerCharacter");
const fundo = document.getElementById("fundo");

for(const personagem of personagens){
    personagem.addEventListener("click", abrirModal(fundo, modal));
}

function abrirModal(fundo, modal) {
    fundo.style.visibility="visible";
};