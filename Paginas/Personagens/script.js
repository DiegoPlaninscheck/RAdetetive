const personagens = document.getElementsByClassName("containerCharacter");
const fundo = document.getElementById("fundo");
const modal = document.getElementById("modal");

for(const personagem of personagens){
    personagem.addEventListener("click", abrirModal());
}

function abrirModal() {
    fundo.style.visibility="visible";
    modal.style.visibility="visible";
};