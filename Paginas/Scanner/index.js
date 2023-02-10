
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

//testes
const pistasVistas = [true, false, false, false, false]
console.log(verPista(3))
 
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
    if(valorMarcador == 1){
        return false
    }


    //ARRUMA ESSA LÒGICO PQP
    for (let i = valorMarcador; i > 0; i--) {
        console.log(pistasVistas[i - 2]);
        if (pistasVistas[i - 2]) {
            return false
        }
    }

    return true
}
