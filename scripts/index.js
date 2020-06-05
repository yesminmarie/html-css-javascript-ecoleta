const buttonSearch = document.querySelector("#page-home main a") //seleciona o botão "Pesquisar pontos de coleta"
const modal = document.querySelector("#modal")
const close = document.querySelector("#modal .header a") //seleciona o botão "Fechar"

//quando o botão "Pesquisar pontos de coleta" for clicado, o modal vai aparecer (remove a classe hide)
buttonSearch.addEventListener("click", () => {
    modal.classList.remove("hide")
})

//quando o botão "Fechar" for clicado, o modal some
close.addEventListener("click", () => {
    modal.classList.add("hide")
})