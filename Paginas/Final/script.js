let venceu = null;

function confirmarEscolha() {
    const select = document.getElementById("nomes")

    const assasino = localStorage.getItem("ASSASINO")

    if (assasino == select.value) {
        venceu = true
    } else {
        venceu = false
    }

}