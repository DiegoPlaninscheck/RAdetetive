const pistasVistas = [false, false, false, false, false]
const assasino = JSON.parse(localStorage.getItem("ASSASINO"))
const morto = localStorage.getItem("MORTO");
const quemAchouMorto = localStorage.getItem("QUEMACHOUMORTO")
let pistaTexto = assasino.dicasAssasino[0]
pistaTexto = pistaTexto.replace("PESSOAMORTA", morto)

if(assasino.alguemAchou){
    pistaTexto = pistaTexto.replace('PESSOA', quemAchouMorto )
}

const texto1 = document.getElementById("texto1")
const texto2 = document.getElementById("texto2")
const texto3 = document.getElementById("texto3")
const texto4 = document.getElementById("texto4")
const texto5 = document.getElementById("texto5")
texto1.setAttribute("value", pistaTexto)
texto2.setAttribute("value", assasino.dicasAssasino[1])
texto3.setAttribute("value", assasino.dicasAssasino[2])
texto4.setAttribute("value", assasino.dicasAssasino[3])
texto5.setAttribute("value", assasino.dicasAssasino[4])
 
for (const marker of document.getElementsByClassName('game-marker')) {
    marker.addEventListener('markerFound', (e) => {
        const idMarcador = e.target.id
        const verPista = verPista(idMarcador)
        if(verPista != null){
            alert(verPista)
            return
        }

        pistasVistas[idMarcador - 1] = true
    });
}


function verPista(valorMarcador) {
    if (checarPistasAnteriores(valorMarcador)) {
        return "Você não pode ver essa pista sem antes ter encontrado as anteriores a ela"
    }

    if (valorMarcador == 5) {
        localStorage.setItem("ACABOUJOGO", "true")
    }

    return null;
}


function checarPistasAnteriores(valorMarcador) {

    switch(valorMarcador){
        case 1: {
            return false
        }
        case 2: {
            if(pistasVistas[0]){
                return false
            }
        }
        case 3: {
            if(pistasVistas[0] && pistasVistas[1]){
                return false
            }
        }
        case 4: {
            if(pistasVistas[0] && pistasVistas[1] && pistasVistas[2]){
                return false
            }
        }
        case 5: {
            if(pistasVistas[0] && pistasVistas[1] && pistasVistas[2] && pistasVistas[3]){
                return false
            }
        }
    }

    return true
}
