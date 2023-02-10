const pistasVistas = [false, false, false, false, false]
const assasino = JSON.parse(localStorage.getItem("ASSASINO"))

const texto1 = document.getElementById("texto1")
texto1.value = assasino.dicasAssasino[0]

 
for (const marker of document.getElementsByClassName('game-marker')) {
    marker.addEventListener('markerFound', (e) => {
        // verPista(e.target.id)
    });
}


function verPista(valorMarcador) {
    if (checarPistasAnteriores(valorMarcador)) {
        return "Você não pode ver essa pista sem antes ter encontrado as anteriores a ela"
    }

    pistaMostrar = assasino.dicasAssasino[valorMarcador - 1]

    if (valorMarcador == 5) {
        localStorage.setItem("ACABOUJOGO", "true")
    }
}


function checarPistasAnteriores(valorMarcador) {
    for (let i = valorMarcador; i > 0; i--) {
        if (!pistasVistas[i - 2]) {
            return false
        }
    }

    return true
}
