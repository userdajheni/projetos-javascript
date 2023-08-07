// função mudar cor do body toda vez que clicar no botão
function mudarCor() {
    // variaveis para gerar cores aleatoriamente, seguindo padrão RGB
    // Math.floor retorna o menor numero inteiro
    let red = Math.floor(Math.random() * 256)
    let green = Math.floor(Math.random() * 256)
    let blue = Math.floor(Math.random() * 256)

    // selecionar o elemento body e ao clicar no botão ele vai mudar de cor
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`

    // mudar a palavra e sua cor do "background color"
    let color = document.querySelector('.color')
    color.innerHTML = `rgb(${red}, ${green}, ${blue})`
}