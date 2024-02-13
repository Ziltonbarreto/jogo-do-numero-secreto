let listaDeNumeroSorteado = [];
let quantidadeMaxima = 100;
let numeroAleatorio = gerarNumeroAleatorio();
let tentavivas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'US English Male', {rate:0.8});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Secret number game');
    exibirTextoNaTela('p', 'Match the number from 1 to 100');
}

exibirMensagemInicial();

function verificarKick() {
    let chute = document.querySelector('input').value
    if(chute == numeroAleatorio){

        exibirTextoNaTela('h1', 'Congratulations');
        let palavreTentavivas = tentavivas > 1 ? 'Attempts' : 'Attempt';
        let mensagemTentativa = `You got the secret number a ${tentavivas} ${palavreTentavivas}!`;
        exibirTextoNaTela('p',`${mensagemTentativa}`);
        document.getElementById ('restart').removeAttribute('disabled');
    } else {
            if(chute > numeroAleatorio) {
                exibirTextoNaTela('p', 'The secret number is smaller');
            } else {
                exibirTextoNaTela('p', 'The secret number is bigger');
            }
            tentavivas++;
            limparChute();
        }
        }
    
function gerarNumeroAleatorio() {
    let numeroSorteado = parseInt(Math.random() * quantidadeMaxima + 1);
    let quantidadeDeNumerosSorteados =  listaDeNumeroSorteado.length;

    if(quantidadeDeNumerosSorteados == quantidadeMaxima) {
        listaDeNumeroSorteado = [];
    }

    if(listaDeNumeroSorteado.includes(numeroSorteado)) {
        return gerarNumeroAleatorio ();
    }
    else {
        listaDeNumeroSorteado.push(numeroSorteado);
        console.log(listaDeNumeroSorteado);
        return numeroSorteado;
    }
}

function limparChute() {
    chute =  document.querySelector('input')
    chute.value = '';
}

function clearGame() {
    numeroAleatorio = gerarNumeroAleatorio();
    limparChute();
    tentavivas = 1;
    exibirMensagemInicial();
    document.getElementById("restart").setAttribute("disabled", "true");
}