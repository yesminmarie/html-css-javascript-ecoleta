function populateUFs() {
    //seleciona o primeiro select que possui name=uf
    const ufSelect = document.querySelector("select[name=uf]")

    //faz uma chamada a api e retorna uma promise
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( res => res.json() ) //converte a resposta em json e retorna uma nova promise (res.json() também é uma promessa)
    .then( states => {
        //para cada estado será atribuido o valor do id do estado em "value" e o option terá o nome do estado
        for (const state of states) {
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
        }
    })
}

populateUFs() //chama a função

function getCities(event) {
    const citySelect = document.querySelector("[name=city]") //seleciona o select de name=city
    const stateInput = document.querySelector("[name=state]") //seleciona o input de name=state (type hidden)

    const ufValue = event.target.value //pega o value da uf (id do estado). Esse valor será passado na url da api

    const indexOfSelectedState = event.target.selectedIndex //pega o índice do estado selecionado
    stateInput.value = event.target.options[indexOfSelectedState].text //atribui ao value do stateInput o nome do estado selecionado

    const url =  `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML = '<option value="">Selecione a Cidade</option>'
    citySelect.disabled = true
    
    fetch(url)
    .then( res => res.json())
    .then(cities => {
        for (const city of cities){
            citySelect.innerHTML += `<option value="${city.id}">${city.nome}</option>`
        }

        citySelect.disabled = false; //após preencher o select das cidades com os nomes de todas as cidades, o campo fica habilitado novamente
    })
}

//seleciona o select de name=uf e adiciona a ele um evento que vai disparar a função getCities sempre que ele for modificado
document
    .querySelector("select[name=uf")
    .addEventListener("change", getCities)