let botao = document.getElementById("botao")
let tentativas = 3
let res = document.getElementById("res")
let numeroSecreto = Math.floor(Math.random()*10+1)
function Chutar(){
let chute = Number(document.getElementById("valor").value)
if (numeroSecreto == chute) {
    res.innerHTML = "Você acertou, parabéns"
} else if (chute > 10 || chute < 0) {
    res.innerHTML = "Por favor, somente número entre 1 e 10."
} else if (chute > numeroSecreto || chute != numeroSecreto) {
    tentativas = tentativas - 1
    res.innerHTML = `Você errou, agora restam ${tentativas} tentativas.`
} else if (chute < numeroSecreto) {
    tentativas = tentativas - 1
    res.innerHTML = `Você errou, agora restam ${tentativas} tentativas. <br> Tente um número maior.`
}
if (tentativas == 0) {
    botao.disabled = true;
} 
}
