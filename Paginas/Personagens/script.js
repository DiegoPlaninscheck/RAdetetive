const infoPersonagens = [
    {
        id: 1,
        foto: "https://st.depositphotos.com/1075946/3664/i/600/depositphotos_36647513-stock-photo-handsome-mature-man.jpg",
        nome: "Sr. Jailson Harrington",
        profissao: "Dono da casa",
        idade: "49 anos",
        aracteristica1: "Sala preferida é a de jogos",
        caracteristica1: "É duro com seus empregados"
    },
    {
        id: 2,
        foto: "https://st2.depositphotos.com/1075946/7097/i/600/depositphotos_70978559-stock-photo-peaceful-middle-aged-woman.jpg",
        nome: "Sra. Jamila Harrington",
        profissao: "Esposa di Jailson",
        idade: "39 anos",
        caracteristica1: "Sala preferida é a biblioteca",
        caracteristica1: "Bem espalhafatosa"
    },
    {
        id: 3,
        foto: "https://i.pinimg.com/736x/84/4b/51/844b51c3e288b767404b39b454e01c60.jpg",
        nome: "Jered Harrington",
        profissao: "Filho do casal",
        idade: "19 anos",
        caracteristica1: "Gosta de basquete",
        caracteristica1: "Tem um estilo meio gótico"
    },
    {
        id: 4,
        foto: "https://img.freepik.com/fotos-premium/jovem-jardineiro-cuida-de-plantas-perenes-no-centro-de-jardinagem_175086-1538.jpg",
        nome: "Cleyton",
        profissao: "Jardineiro",
        idade: "33 anos",
        caracteristica1: "Tem um carro com todas as ferramentas para uso no jardim",
        caracteristica1: "Careca"
    },
    {
        id: 5,
        foto: "https://cptstatic.s3.amazonaws.com/imagens/enviadas/materias/materia14301/motorista-particular-cursos-cpt.jpg",
        nome: "Antônio",
        profissao: "Motorista particular",
        idade: "25 anos",
        caracteristica1: "Na hora dos intervalos costuma fumar",
        caracteristica1: "Finais de semana vive em balada"
    },
    {
        id: 6,
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
const nome = document.getElementById("nome");
const idade = document.getElementById("idade");
const profissao = document.getElementById("profissao");
const caracteristica1 = document.getElementById("caracteristica1");
const caracteristica2 = document.getElementById("caracteristica2");
const fechar = document.getElementById("fechar");
const acabouJogo = JSON.parse(localStorage.getItem("ACABOUJOGO"));

for (const personagem of personagens) {
    personagem.addEventListener("click", () => {
        fundo.style.display = "flex";

        let infoPersonagem = infoPersonagens.find(pers => pers.id == personagem.id);

        nome.innerText = infoPersonagem.nome;
    });
};

fechar.addEventListener("click", () => {
    fundo.style.display = "none";
});


if (acabouJogo) {
    const linkFinal = document.getElementById("botaoFinal");
    linkFinal.style.display = "block";
};