let venceu = null;
const morto = localStorage.getItem("MORTO")

function confirmarEscolha() {
    const select = document.getElementById("nomes")
    const div = document.getElementById("textoFinal")
    const link = document.createElement("a")
    let textoFinal = "";

    const assasino = JSON.parse(localStorage.getItem("ASSASINO"))
    const mensagemAssasino = assasino.menssagemFinal

    if (assasino.nome == select.value) {
        venceu = true
        textoFinal += "Parabéns você acertou\n\n" + mensagemAssasino.replace("PESSOAMORTA", morto)
    } else {
        venceu = false
        textoFinal += "Parabéns você é inutil"
    }

    link.href = "../../index.html"
    link.innerText = "Voltar ao menu inicial"
    link.id = "link"

    div.innerText = textoFinal;
    div.appendChild(link)
}

function checarOpcoes() {
    for (const opcao of document.getElementsByClassName("option")) {
        if (opcao.value == morto) {
            opcao.style.display = "none"
        }
    }
}

checarOpcoes()