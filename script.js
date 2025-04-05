// PARTE 1: Lista de perguntas e respostas
perguntas = [
    {
        pergunta: "Quantos moedas de ouro sao necessarias para da o valor de R$ 100,00?",
        respostas: [
            { opcao: "20 Moedas", correto: false },
            { opcao: "150 Moedas", correto: false },
            { opcao: "5 Moedas", correto: true },
        ]
    },
    {
        pergunta: "Qual é a ordem certa do Jokepon Rpg?",
        respostas: [
            { opcao: "🗡️ ASSASSINO ➔ 🔮 MAGO ➔ ⚔️ GUERREIRO ➔ 🗡️ ASSISSINO", correto: true },
            { opcao: "🗡️ ASSASSINO  ➔ ⚔️ GUERREIRO ➔ 🔮 MAGO ➔ 🗡️ ASSISSINO ", correto: false },
            { opcao: "⚔️ GUERREIRO ➔ ✝️ Padre ➔ 🔮 MAGO ➔ 🗡️ ASSASSINO ", correto: false }
        ]
    },
    {
        pergunta: "Quem roubou a lendaria espada de Koaland ?",
        respostas: [
            { opcao: "Lich o Overlord 💀🔥", correto: false },
            { opcao: "O guerreiro bebado ⚔️🍻 ", correto: false },
            { opcao: "Dragão Sombrio 🐉🔥", correto: true },
        ]
    },
    {
        pergunta: "Quem são os 6 herois selecionaveis do deulo de dados?",
        respostas: [
            { opcao: "Padre ⛪, Barbaro 🪓, Dragão 🐉, Coala 🐨, Sacerdotiza 🙏 e Mago 🔮", correto: false },
            { opcao: "Assassino 🗡️, Barbaro 🪓, Bardo 🎶, Coala 🐨, Guerreiro ⚔️ e Mago 🔮 ", correto: true },
            { opcao: "Paladino 🛡️, Padre ⛪, Bardo 🎶, Saserdotisa 🙏, Guerreiro ⚔️ e Mago 🔮 ", correto: false }
        ]
    },
    {
        pergunta: "Qual palavra eu errei duas vezes nesse quiz a forma de escrever?",
        respostas: [
            { opcao: "Sacerdotisa 🙏 (Saserdotisa e Sacerdotiza)", correto: true },
            { opcao: "Guerreiro ⚔️ (Guirreiro e Guereiro)", correto: false },
            { opcao: "Coala 🐨 (Koala e Koalha)", correto: false }
        ]
    }
];

// PARTE 2: Pegando os elementos do HTML
const perguntaElemento = document.querySelector(".pergunta");
const opcoesElemento = document.querySelector(".opcoes"); // Alterado para .opcoes
const progressoElemento = document.querySelector(".progresso");
const textoFinal = document.querySelector(".fim span");
const conteudo = document.querySelector(".conteudo");
const conteudoFinal = document.querySelector(".fim");
const recomecarBotao = document.getElementById("recomecar-botao"); // Novo: Seleciona o botão

// PARTE 3: Variáveis para controle do jogo
let indiceAtual = 0; // Índice da pergunta atual
let acertos = 0; // Contador de acertos

// PARTE 7: Função para reiniciar o quiz
function reiniciarQuiz() {
    indiceAtual = 0;
    acertos = 0;
    conteudoFinal.style.display = "none";
    conteudo.style.display = "block";
    carregarPergunta();
}

// PARTE 8: Adiciona o evento de clique ao botão de recomeçar
recomecarBotao.addEventListener("click", reiniciarQuiz);

// PARTE 4: Função para carregar uma nova pergunta
function carregarPergunta() {
    progressoElemento.innerHTML = `${indiceAtual + 1}/${perguntas.length}`; // Atualiza o progresso
    const perguntaAtual = perguntas[indiceAtual]; // Pega a pergunta atual
    perguntaElemento.innerHTML = perguntaAtual.pergunta; // Exibe a pergunta

    opcoesElemento.innerHTML = ""; // Limpa as opções anteriores

    // Percorre todas as respostas da pergunta atual
    for (let i = 0; i < perguntaAtual.respostas.length; i++) {
        // Pega a resposta atual com base no índice 'i'
        const resposta = perguntaAtual.respostas[i];
        // Cria um novo elemento 'button' (botão)
        const botao = document.createElement("button");
        // Adiciona a classe CSS 'botao-resposta' ao botão para estilizar
        botao.classList.add("botao-resposta");
        // Define o texto do botão com a opção de resposta (resposta.opcao)
        botao.innerText = resposta.opcao;
        // Adiciona um evento de clique no botão
        botao.onclick = function () {
            // Se a resposta for correta (resposta.correto === true), incrementa o número de acertos
            if (resposta.correto) {
                acertos++; // Incrementa o contador de acertos
            }

            // Avança para a próxima pergunta
            indiceAtual++;

            // Se ainda houver perguntas, carrega a próxima pergunta
            if (indiceAtual < perguntas.length) {
                carregarPergunta(); // Carrega a próxima pergunta
            } else {
                // Se não houver mais perguntas, finaliza o jogo
                finalizarJogo();
            }
        };

        // Adiciona o botão de resposta à tela, dentro do elemento 'opcoesElemento'
        opcoesElemento.appendChild(botao);
    }
}

// PARTE 5: Função para mostrar a tela final
function finalizarJogo() {
    textoFinal.innerHTML = `Você acertou ${acertos} de ${perguntas.length}`; // Exibe o resultado
    conteudo.style.display = "none"; // Esconde as perguntas
    conteudoFinal.style.display = "flex"; // Mostra a tela final
}

// PARTE 6: Iniciando o jogo pela primeira vez
carregarPergunta();