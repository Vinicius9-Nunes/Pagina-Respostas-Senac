function PegarTagHtml(seletor){
    let tagHtml = document.getElementById(seletor)
    if(tagHtml == null){
        throw('Erro ao pegar Tag Html')
    }
    return tagHtml
}

function ApresentarTexto(){
    let tagHtml = PegarTagHtml(seletorRaiz)
    tagHtml.innerHTML = ''
    for (const dado of this.dados) {
        let id = dado.id.replaceAll(' ', '_')
        tagHtml.innerHTML += `
        <div class='caixa row'>
            <span id='${id}' class='col-4' span-caixa>
                ${dado.id}
            </span>
            <button id='${id}Botao' onclick='Copiar(${id})' type="button" class="col-1 btn btn-outline-warning btn-sm ">
                Copiar
            </button>
        </div>`
    }
}

function Copiar(seletor){
    let seletorFormatado = seletor.id.replaceAll('_', ' ')
    const response = this.dados.find(obj => obj.id == seletorFormatado)
    
    navigator.clipboard.writeText(response.texto)
}

function PegarBaseDados(){
    return GetArrayTexts()
}

function Iniciar()
{
    ApresentarTexto()
}

onload = () =>{
    this.dados = PegarBaseDados()
    Iniciar()
}

const seletorRaiz = 'body'
const dados = []
