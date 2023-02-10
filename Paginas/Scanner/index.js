const pistasVistas = [false, false, false, false, false]
let pistaMostrar = ""
let acabouJogo = false
 
for (const marker of document.getElementsByClassName('game-marker')) {
    marker.addEventListener('markerFound', (e) => {
        alert(e.target.id);
        alert(e.id);
    });
}


function verPista(valorMarcador) {
    if (checarPistasAnteriores(valorMarcador)) {
        return "Você não pode ver essa pista sem antes ter encontrado as anteriores a ela"
    }

    pistaMostrar = assasino.dicasAssasino[valorMarcador - 1]

    if (valorMarcador == 5) {
        acabouJogo = true
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
