

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


function gerarNumAleatorio(){
    const numAleatorio = Math.floor((Math.random() * 10) + 1);
    return numAleatorio
}

function jogar(){
    const respostaPessoa = gerarNumAleatorio()
    do{
        const palpite = document.getElementById("resposta").value;
    }while(numAleatorio != palpite)

        if(numAleatorio === palpite){
            paragrafo.innerText = `O número aleatório é ${numAleatorio} você errou!`
        }else{
        paragrafo.innerText = `O número aleatório é ${numAleatorio} você errou!`
        }
}
jogar()

