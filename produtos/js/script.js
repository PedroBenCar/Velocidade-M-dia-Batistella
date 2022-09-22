let distância = document.querySelector("#distância")
let tempo = document.querySelector("#tempo")
let velocidade = document.querySelector("velocidade")
let resultado = document.querySelector("#resultado")
let arrayVelocidade = []

const calcular = function() {
    velocidade.value = (distância.value / tempo.value).toFixed(2)
    arrayVelocidade.push(["[ ", distância.value, tempo.value, velocidade.value, "]",])
    resultado.value = arrayVelocidade
    

}

