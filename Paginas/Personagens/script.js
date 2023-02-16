const infoPersonagens = [
    {
        foto: "https://st.depositphotos.com/1075946/3664/i/600/depositphotos_36647513-stock-photo-handsome-mature-man.jpg",
        nome: "Sr. Jailson Harrington",
        profissao: "Dono da casa",
        idade: "49 anos",
        aracteristica1: "Sala preferida é a de jogos",
        caracteristica1: "É duro com seus empregados"
    },
    {
        foto: "https://st2.depositphotos.com/1075946/7097/i/600/depositphotos_70978559-stock-photo-peaceful-middle-aged-woman.jpg",
        nome: "Sr. Jailson Harrington",
        profissao: "Esposa di Jailson",
        idade: "39 anos",
        caracteristica1: "Sala preferida é a biblioteca",
        caracteristica1: "Bem espalhafatosa"
    },
    {
        foto: "https://i.pinimg.com/736x/84/4b/51/844b51c3e288b767404b39b454e01c60.jpg",
        nome: "Jered Harrington",
        profissao: "Filho do casal",
        idade: "19 anos",
        caracteristica1: "Gosta de basquete",
        caracteristica1: "Tem um estilo meio gótico"
    },
    {
        foto: "https://img.freepik.com/fotos-premium/jovem-jardineiro-cuida-de-plantas-perenes-no-centro-de-jardinagem_175086-1538.jpg",
        nome: "Cleyton",
        profissao: "Jardineiro",
        idade: "33 anos",
        caracteristica1: "Tem um carro com todas as ferramentas para uso no jardim",
        caracteristica1: "Careca"
    },
    {
        foto: "https://cptstatic.s3.amazonaws.com/imagens/enviadas/materias/materia14301/motorista-particular-cursos-cpt.jpg",
        nome: "Antônio",
        profissao: "Motorista particular",
        idade: "25 anos",
        caracteristica1: "Na hora dos intervalos costuma fumar",
        caracteristica1: "Finais de semana vive em balada"
    },
    {
        foto: "https://img3.stockfresh.com/files/s/stockyimages/m/45/4955402_stock-photo-handsome-old-man-in-suit.jpg",
        nome: "Hortêncio",
        profissao: "Mordomo",
        idade: "80 anos",
        caracteristica1: "Trabalha para família à 15 anos",
        caracteristica1: "Usa uma aliança de ouro bem grossa no dedo anelar esquerdo"
    }
];

const personagens = document.getElementsByClassName("containerCharacter");
const fundo = document.getElementById("fundo");
const fechar = document.getElementById("fechar");

for (const personagem of personagens) {
    personagem.addEventListener("click", abrirModal(personagem));
};

function abrirModal(personagem) {
    fundo.style.display = "flex";
    
    // if(personagem == infoPersonagens[0]) {
    //     alert("É o Jailson")
    // }
};

fechar.addEventListener("click", fecharModal);

function fecharModal() {
    fundo.style.display = "none";
};

const acabouJogo = JSON.parse(localStorage.getItem("ACABOUJOGO"));

if (acabouJogo) {
    const linkFinal = document.getElementById("botaoFinal");
    linkFinal.style.display = "block";
};