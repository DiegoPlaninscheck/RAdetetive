localStorage.setItem("ACABOUJOGO", "false")
localStorage.setItem("PISTASVISTAS", JSON.stringify([false, false, false, false, false]))

const nomeMorto = localStorage.getItem("MORTO")
const paragrafoNomeMorto = document.getElementById("vitima")
paragrafoNomeMorto.innerText = "A vítima foi " + nomeMorto