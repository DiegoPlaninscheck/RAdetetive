const pistasVistas = JSON.parse(localStorage.getItem("PISTASVISTAS"))
const assassino = JSON.parse(localStorage.getItem("ASSASSINO"))
const morto = localStorage.getItem("MORTO");
const quemAchouMorto = localStorage.getItem("QUEMACHOUMORTO")
let pistaTexto = assassino.dicasAssassino[0]
pistaTexto = pistaTexto.replace("PESSOAMORTA", morto)

if (assassino.alguemAchou) {
    pistaTexto = pistaTexto.replace('PESSOA', quemAchouMorto)
}

const texto1 = document.getElementById("texto1")
const texto2 = document.getElementById("texto2")
const texto3 = document.getElementById("texto3")
const texto4 = document.getElementById("texto4")
const texto5 = document.getElementById("texto5")


function condicoesNormais() {
    texto1.setAttribute("value", pistaTexto)
    texto2.setAttribute("value", assassino.dicasAssassino[1])
    texto3.setAttribute("value", assassino.dicasAssassino[2])
    texto4.setAttribute("value", assassino.dicasAssassino[3])
    texto5.setAttribute("value", assassino.dicasAssassino[4])
}

function getVariavelTexto(idMarcador) {
    let texto = null

    switch (idMarcador) {
        case '1': 
            texto = document.getElementById("texto1")
            break
        case '2': 
            texto = document.getElementById("texto2")
            break
        case '3': 
            texto = document.getElementById("texto3")
            break
        case '4': 
            texto = document.getElementById("texto4")
            break
        case '5': 
            texto = document.getElementById("texto5")
            break
    }

    return texto
}

function checarPistasAnteriores(idMarcador) {

    switch (idMarcador) {
        case '1': {
            return false
        }
        case '2': {
            if (pistasVistas[0]) {
                return false
            }
        }
        case '3': {
            if (pistasVistas[0] && pistasVistas[1]) {
                return false
            }
        }
        case '4': {
            if (pistasVistas[0] && pistasVistas[1] && pistasVistas[2]) {
                return false
            }
        }
        case '5': {
            if (pistasVistas[0] && pistasVistas[1] && pistasVistas[2] && pistasVistas[3]) {
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

function markerfound(idMarcador) {
    const verPistaResultado = verPista(idMarcador)

    if (verPistaResultado != null) {
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