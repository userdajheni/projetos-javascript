let valor = document.getElementById('valor')
let cont = 0

function resetar() {
    valor.innerHTML = 0
}

function diminuir() {
    valor.innerHTML = valor.innerHTML - 1
}

function aumentar() {
    valor.innerHTML = Number(valor.innerHTML) + 1
}