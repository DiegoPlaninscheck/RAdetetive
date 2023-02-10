const pistasVistas = JSON.parse(localStorage.getItem("PISTASVISTAS"))
const assasino = JSON.parse(localStorage.getItem("ASSASINO"))
const morto = localStorage.getItem("MORTO");
const quemAchouMorto = localStorage.getItem("QUEMACHOUMORTO")
let pistaTexto = assasino.dicasAssasino[0]
pistaTexto = pistaTexto.replace("PESSOAMORTA", morto)

if (assasino.alguemAchou) {
    pistaTexto = pistaTexto.replace('PESSOA', quemAchouMorto)
}

const texto1 = document.getElementById("texto1")
const texto2 = document.getElementById("texto2")
const texto3 = document.getElementById("texto3")
const texto4 = document.getElementById("texto4")
const texto5 = document.getElementById("texto5")


function condicoesNormais() {
    texto1.setAttribute("value", pistaTexto)
    texto2.setAttribute("value", assasino.dicasAssasino[1])
    texto3.setAttribute("value", assasino.dicasAssasino[2])
    texto4.setAttribute("value", assasino.dicasAssasino[3])
    texto5.setAttribute("value", assasino.dicasAssasino[4])
}

function getVariavelTexto(idMarcador){
    switch(idMarcador){
        case 1: return texto1
        case 2: return texto2
        case 3: return texto3
        case 4: return texto4
        case 5: return texto5
    }
}

function checarPistasAnteriores(idMarcador) {

    switch (idMarcador) {
        case 1: {
            alert("1");

            return false
        }
        case 2: {
            if (pistasVistas[0]) {
                alert("2");
                return false
            }
        }
        case 3: {
            if (pistasVistas[0] && pistasVistas[1]) {
                alert("3");
                return false
            }
        }
        case 4: {
            if (pistasVistas[0] && pistasVistas[1] && pistasVistas[2]) {
                alert("4");
                return false
            }
        }
        case 5: {
            if (pistasVistas[0] && pistasVistas[1] && pistasVistas[2] && pistasVistas[3]) {
                alert("5");
                return false
            }
        }
    }

    return true
}

function verPista(idMarcador) {
    if (checarPistasAnteriores(idMarcador)) {
        return "Você não pode ver essa pista sem antes ter encontrado as anteriores a ela"
    }

    if (idMarcador == 5) {
        localStorage.setItem("ACABOUJOGO", "true")
    }

    return null;
}

function markerfound(idMarcador){
    alert(idMarcador);

    const verPistaResultado = verPista(idMarcador)

    alert(verPistaResultado)

    if (verPistaResultado != null) {
        alert("NÃO PODE")
        const texto = getVariavelTexto(idMarcador)
        texto.setAttribute("value", verPistaResultado)
        return
    }

    pistasVistas[idMarcador - 1] = true
    localStorage.setItem("PISTASVISTAS", JSON.stringify(pistasVistas))
}

for (const marker of document.getElementsByClassName('game-marker')) {
    marker.addEventListener('markerFound', (e) => {
        markerfound(e.target.id)
    });
    marker.addEventListener('markerLost', (e) => {
        condicoesNormais()
    })
}

const botao1 = document.getElementById("botao1")
botao1.addEventListener('click', (e) => {
    markerfound(1)
})

const botao2 = document.getElementById("botao2")
botao2.addEventListener('click', (e) => {
    markerfound(2)
})

const botao3 = document.getElementById("botao3")
botao3.addEventListener('click', (e) => {
    markerfound(3)
})

const botao4 = document.getElementById("botao4")
botao4.addEventListener('click', (e) => {
    markerfound(4)
})

const botao5 = document.getElementById("botao5")
botao5.addEventListener('click', (e) => {
    markerfound(5)
})

condicoesNormais()