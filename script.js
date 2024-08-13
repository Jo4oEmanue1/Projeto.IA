const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está jogando um jogo de estratégia que exige planejamento e tomada de decisão rápida. Qual é o seu pensamento sobre essa experiência?",
        alternativas: [
            {
                texto: "Esses jogos são apenas uma perda de tempo.",
                afirmacao: "No entanto, pesquisas mostram que jogos de estratégia podem melhorar habilidades de planejamento e tomada de decisões."
            },
            {
                texto: "Eles ajudam a desenvolver habilidades importantes como o planejamento e a tomada de decisões.",
                afirmacao: "Reconhece que jogos de estratégia podem aprimorar suas habilidades de resolução de problemas e planejamento."
            }
        ]
    },
    {
        enunciado: "Você está participando de um jogo multiplayer online em equipe. Como você percebe a experiência de trabalhar em equipe no jogo?",
        alternativas: [
            {
                texto: "Trabalhar em equipe no jogo é uma tarefa difícil e não vejo benefícios.",
                afirmacao: "No entanto, estudos indicam que jogos multiplayer podem melhorar habilidades de comunicação e colaboração em equipe."
            },
            {
                texto: "Trabalhar em equipe no jogo fortalece minhas habilidades de comunicação e cooperação.",
                afirmacao: "Reconhece que jogos multiplayer podem promover habilidades sociais e trabalho em equipe."
            }
        ]
    },
    {
        enunciado: "Após concluir um desafio difícil em um jogo, você se sente mais motivado a enfrentar desafios na vida real?",
        alternativas: [
            {
                texto: "Não vejo como esses desafios no jogo possam influenciar minha motivação para desafios reais.",
                afirmacao: "Pesquisas mostram que superar desafios em jogos pode aumentar a confiança e motivação para enfrentar desafios na vida real."
            },
            {
                texto: "Sim, superar desafios no jogo aumenta minha confiança para enfrentar desafios na vida real.",
                afirmacao: "Reconhece que a superação de desafios em jogos pode melhorar a resiliência e a autoconfiança."
            }
        ]
    },
    {
        enunciado: "Você está jogando um jogo de simulação que ensina sobre a gestão de recursos. Qual é a sua visão sobre a utilidade desse tipo de jogo?",
        alternativas: [
            {
                texto: "Não vejo valor em aprender sobre gestão de recursos através de jogos.",
                afirmacao: "No entanto, jogos de simulação podem ajudar a aprender e praticar habilidades de gestão de recursos de maneira interativa."
            },
            {
                texto: "Jogos de simulação são úteis para aprender sobre gestão de recursos e tomar decisões financeiras.",
                afirmacao: "Reconhece que jogos de simulação podem oferecer uma forma divertida e prática de aprender habilidades de gestão de recursos."
            }
        ]
    },
    {
        enunciado: "Você está participando de um jogo que envolve a resolução de quebra-cabeças complexos. Como você avalia o impacto desses jogos na sua capacidade de resolução de problemas?",
        alternativas: [
            {
                texto: "Acredito que esses jogos não têm impacto significativo nas minhas habilidades de resolução de problemas.",
                afirmacao: "No entanto, evidências sugerem que jogos de quebra-cabeça podem melhorar a capacidade de pensamento crítico e resolução de problemas."
            },
            {
                texto: "Esses jogos ajudam a melhorar minhas habilidades de pensamento crítico e resolução de problemas.",
                afirmacao: "Reconhece que jogos de quebra-cabeça podem melhorar habilidades cognitivas e de resolução de problemas."
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em pleno 2024, ano da tecnologia...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
