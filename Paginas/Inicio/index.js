localStorage.setItem("ACABOUJOGO", "false")

const nomeMorto = localStorage.getItem("MORTO")
const paragrafoNomeMorto = document.getElementById("vitima")
paragrafoNomeMorto.innerText = "A vítima foi " + nomeMorto