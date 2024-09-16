

// function gerarNumAleatorio(){
//     const numAleatorio = Math.floor((Math.random() * 10) + 1);
//     const respostaPessoa = document.getElementById("resposta").value;
//     const paragrafo = document.getElementById("resultado");

//     if(numAleatorio === respostaPessoa){
//         paragrafo.innerText = `O número aleatório é ${numAleatorio} você acertou!`
//     }else{
//         paragrafo.innerText = `O número aleatório é ${numAleatorio} você errou!`
//     }
// }


function gerarNumAleatorio() {
    const numAleatorio = Math.floor((Math.random() * 10) + 1);
    return numAleatorio
}

function jogar() {
    const numero = gerarNumAleatorio()// Guardar o valor do numero aleatório
    let palpite = ""// primeiro crio o valor vazio, para depois o valor ser agreagado no loop
    let numeroDeTentativas = 3
    do {
        palpite = parseInt(prompt("Adivinhe o número: "))
        if (numero != palpite) {
            numeroDeTentativas--
            alert(`Você errou, você ainda tem ${numeroDeTentativas} tentativas`)
        } else if (numero === palpite) {
            alert(`Parabéns, você acertou!`)
            return
        }
    } while (numeroDeTentativas > 0)
}
jogar()

