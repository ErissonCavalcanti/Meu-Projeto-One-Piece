const botoes = document.querySelectorAll(".botao");
const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, indice) => {
    botao.addEventListener("mouseover", () => {
        desselecionarBotao();
        desselecionarPersonagem();

        botao.classList.add("selecionado");
        personagens[indice].classList.add("selecionado");

     
        efeitoQueda();
    });
});

function efeitoQueda() {
    const descricoes = document.querySelectorAll(".descricao");
    const nomesPersonagem = document.querySelectorAll(".nome-personagem");

    descricoes.forEach(descricao => {
        descricao.classList.add("efeito-queda");
        setTimeout(() => {
            descricao.classList.remove("efeito-queda");
        }, 500);
    });

    nomesPersonagem.forEach(nomePersonagem => {
        nomePersonagem.classList.add("efeito-queda");
        setTimeout(() => {
            nomePersonagem.classList.remove("efeito-queda");
        }, 500);
    });
}

function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}
