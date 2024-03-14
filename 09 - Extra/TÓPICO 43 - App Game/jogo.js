//Variáveis 
var altura = 0
var largura = 0
var vidas = 1
var tempo = 10
var nivel = window.location.search
nivel = nivel.replace('?', '')
var criaMosquitoTempo = 1500

//Seleção de níveis
if (nivel === 'normal') {
    criaMosquitoTempo = 1500
}   else if (nivel === 'dificil') {
    criaMosquitoTempo = 1000
} else {
    criaMosquitoTempo = 750
}
console.log('Nivel ' + criaMosquitoTempo)

//Altura e Largura
function ajusteTamanho(){
    altura = window.innerHeight
    largura = window.innerWidth
}

ajusteTamanho()

var cronometro = setInterval(function (){

    if (tempo < 0) {
        clearInterval(cronometro)
        
        window.location.href = 'vitoria.html'
    }  else {
        document.getElementById ('cronometro').innerHTML = tempo
        tempo -= 1
    }
},1000)

//Gera as posições randômicas
function posicaoRandomica(){
    
    //remover o mosquito anterior (caso exista)
    if (document.getElementById('mosquito')) { 
        document.getElementById('mosquito').remove()
        
        if (vidas > 3) {
            
            window.location.href = 'fim_jogo.html'
        } else {
            document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png'
            vidas++
        }
    }
    
    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90
    
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY
    
    console.log(posicaoX, posicaoY)
    //Criar o elemento html
    var mosquito = document.createElement('img')
    mosquito.src = "imagens/mosquito.png"
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio ()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = click

    document.body.appendChild(mosquito)
    
}

//Gera tamanhos aleatórios para os mosquitos
function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)
    
    switch (classe) {
        case 0:
            return 'mosquito1'

        case 1:
            return 'mosquito2'

        case 2:
            return 'mosquito3'

    }
}

//Define o lado do mosquito de forma randômica
function ladoAleatorio () {

    var classe = Math.floor(Math.random() * 2)
    
    switch (classe) {
        case 1:
            return 'ladoB'

    }

}

//Cria os mosquitos a cada 2s
var criaMosquito = setInterval (function () {
    posicaoRandomica()
}, criaMosquitoTempo)

//Remove o mosquito quando clicado
function click () {
    this.remove()
}

