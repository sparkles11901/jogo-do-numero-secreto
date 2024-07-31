// app.js

let numeroCorreto;
let tentativas = 0;

function iniciarJogo() {
    numeroCorreto = Math.floor(Math.random() * 10) + 1; // Número aleatório entre 1 e 10
    tentativas = 0;
    document.querySelector('.container__input').value = '';
    document.querySelector('.container__botao').disabled = false;
    document.querySelector('#reiniciar').disabled = true;
    document.querySelector('h1').textContent = 'Jogo do Número Secreto';
    document.querySelector('.texto__paragrafo').textContent = 'Escolha um número entre 1 e 10.';
    
    // Exibir o número correto no console para depuração
    console.log(`Número correto: ${numeroCorreto}`);
}

function verificarChute() {
    const chute = Number(document.querySelector('.container__input').value);
    tentativas++;

    const mensagemTentativa = tentativas === 1 ? 'tentativa' : 'tentativas';

    if (chute === numeroCorreto) {
        document.querySelector('h1').textContent = 'Parabéns!';
        document.querySelector('.texto__paragrafo').textContent = `Você acertou o número em ${tentativas} ${mensagemTentativa}!`;
        document.querySelector('.container__botao').disabled = true;
        document.querySelector('#reiniciar').disabled = false;
        responsiveVoice.speak("Parabéns! Você acertou o número!");
    } else if (chute < 1 || chute > 10) {
        document.querySelector('.texto__paragrafo').textContent = 'Escolha um número entre 1 e 10.';
        responsiveVoice.speak("Escolha um número entre 1 e 10.");
    } else {
        document.querySelector('.texto__paragrafo').textContent = chute < numeroCorreto ? 'O número é maior!' : 'O número é menor!';
        responsiveVoice.speak(chute < numeroCorreto ? "O número é maior!" : "O número é menor!");
    }
}

document.addEventListener('DOMContentLoaded', iniciarJogo);

document.querySelector('#reiniciar').addEventListener('click', iniciarJogo);
