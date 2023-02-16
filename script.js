const personagens = [
    {
        id: 1,
        nome: "Sr. Jailson Harrington",
        alguemAchou: true,
        dicasAssassino: [
            "PESSOA  encontrou o corpo de PESSOAMORTA morto em um arbusto no jardim da frente da casa durante a manha",
            "A hora da morte foi as 23:00",
            "Foi notado marcas de estrangulamento junto de varios ossos quebrados",
            "A janela do quarto do Sr e Sra Harrington esta quebrada",
            "O cofre dos Harrington esta arrombado"
        ],
        menssagemFinal: "Jailson matou a PESSOAMORTA pois estava roubando do seu cofre e aquela não era a primeira vez que isso havia acontecido, ele estrangulou a pessoa e então a jogou pra fora de seu quarto",
        pessoasImpossiveis: [1, 2]
    },
    {
        id: 2,
        nome: "Sra. Jamila Harrington",
        alguemAchou: true,
        dicasAssassino: [
            "PESSOA achou o PESSOAMORTA morto no chão da garagem da casa pela manha",
            "Foi descoberto que seu corpo estava cheio de furos feitos com uma chave de fenda",
            "No dia anterior a familia estava discutindo",
            "Antônio chega de noite vindo da cidade com varias sacolas de roupa",
            "E feito um banquete para todas as pessoas da casa mas Jamila não está mais la"
        ],
        menssagemFinal: "Jamila matou PESSOAMORTA pois estava dando em cima do seu marido, ela pediu para Antonio lhe comprar roupas novas para se livrar do sangue nas roupas em que cometeu o assassinato",
        pessoasImpossiveis: [1, 2, 3]
    },
    {
        id: 3,
        nome: "Jered Harrington",
        alguemAchou: false,
        dicasAssassino: [
            "PESSOAMORTA foi achada morta no meio do salao principal no meio da noite",
            "Foi descoberto que o corpo estava repleto de hematomas",
            "Havia restos de cinzas pela escada e corredor principal do segundo andar",
            "Hortêncio esta fazendo uma faxina pelos quartos",
            "Foi revelado de que a pessoa havia sido baleada nas costas"
        ],
        menssagemFinal: "Jered matou a PESSOAMORTA porque viu ele fumando maconha, no instante em que a viu puxou a arma de sua gaveta e atirou, mas a pessoa conseguiu correr por ter pego de raspao, mas logo depois ele a alcançou e a empurrou das escadas",
        pessoasImpossiveis: [3, 6]
    },
    {
        id: 4,
        nome: "Cleyton",
        alguemAchou: true,
        dicasAssassino: [
            "PESSOA achou PESSOAMORTA morta na cozinha em uma poça de sangue",
            "Foram achados marcas de punhaladas em suas costas",
            "Toda a familia ficou abalada",
            "Jered foi visto resmungando enquanto limpava uma parte do chao do salao principal",
            "Uma faca ensanguentada foi achada debaixo de um dos armários do salao principal"
        ],
        menssagemFinal: "Matou a PESSOAMORTA pois sempre a destratou desde que começou a trabalhar na casa dos Harrington, em mais um dos dias de abuso a Clayton enquanto o mesmo trabalhava no jardim, ele se cansou e perseguiu a PESSOA pela casa ate que a encurralou na cozinha e a apunhalou diversas vezes enquanto descarregava sua raiva",
        pessoasImpossiveis: [3, 4]
    },
    {
        id: 5,
        nome: "Antônio",
        alguemAchou: true,
        dicasAssassino: [
            "PESSOA achou PESSOAMORTA morto na sala de jogos jogado em um dos cantos da sala",
            "Havia varios itens quebrados pela sala",
            "Foi apurado que foi morto por uma forte pancada na cabeça",
            "Um taco de beisebol foi achado no meio do jardim",
            "Alguem da casa recebeu dinheiro de alguem de fora"
        ],
        menssagemFinal: "Matou a mando de JAILSON como um serviço extra, nem ele sabia o motivo",
        pessoasImpossiveis: [1, 5]
    },
    {
        id: 6,
        nome: "Hortêncio",
        alguemAchou: false,
        dicasAssassino: [
            "PESSOADAFAMILIA foi achada morta jogada no meio do salao principal no início da manha",
            "Estava com machucados pelo corpo todo",
            "O resto da familia saiu de casa",
            "A escada do salao principal estava danificada",
            "No dia seguinte foi feito uma dedetização da casa toda"
        ],
        menssagemFinal: "Hortencio matou PESSOADAFAMILIA a envenenando durante o jantar, o plano era matar todos mas nunca havia mexido com materiais tóxicos antes, o veneno demorou para fazer efeito, e quando PESSOADAFAMILIA foi para o primeiro andar em busca de remedios caiu da escada",
        pessoasImpossiveis: [4, 5, 6]
    },
];

let assassino;
let possiveisVitmas;
let morto;
let quemAchouMorto = null;

function iniciarNovoJogo() {
    const numeroAleatorio = parseInt(Math.random() * 5);
    assassino = personagens.find(p => p.id == numeroAleatorio + 1);

    localStorage.setItem("ASSASSINO", JSON.stringify(assassino));

    possiveisVitmas = personagens.filter((personagem) => {
        let impossivelPorAssassino = false;

        for (let idNaoVitmasAssassino of assassino.pessoasImpossiveis) {
            if (personagem.id == idNaoVitmasAssassino) {
                impossivelPorAssassino = true;
                break;
            };
        };

        if (!impossivelPorAssassino) {
            return personagem;
        };
    });

    const numeroAleatorio2 = parseInt(Math.random() * possiveisVitmas.length);
    morto = possiveisVitmas[numeroAleatorio2];
    possiveisVitmas.splice(numeroAleatorio2, 1);

    if (assassino.alguemAchou) {
        const numeroAleatorio3 = parseInt(Math.random() * possiveisVitmas.length);

        quemAchouMorto = possiveisVitmas[numeroAleatorio3];

        localStorage.setItem("QUEMACHOUMORTO", quemAchouMorto.nome)
    };


    console.log(morto.nome);
    localStorage.setItem("MORTO", morto.nome);
};
