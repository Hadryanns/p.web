function TrocarPag(caminho) {
    window.location.href = caminho
}
function splitArray(array, size) {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
    }
    return result;
}
function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none'
    popup.innerHTML = '<button onclick="closePopup()" class="close-popup" id="closePopup">&times;</button>'
    document.getElementById('overlay').style.display = 'none';
}
function openPopup(tipo) {
    document.getElementById('popup').style.display = 'flex';
    contentPopup(tipo)
    document.getElementById('overlay').style.display = 'block';
}
const atividades = [
    "Atividades/01/index.html",
    "Atividades/02/index.html",
    "Atividades/03/index.html",
    "Atividades/04/index.html",
    "Atividades/05/index.html",
    "Atividades/06/index.html",
    "Atividades/07/index.html",
    "Atividades/08/index.html",
    "Atividades/09/teste1.py",
    "Atividades/10/Atividade 10.PNG",
    "Atividades/11/views.py",
    "Atividades/12/index.html",
    "Atividades/13/index.html",
    "Atividades/14/index.html"
]
const projetos = [
    "Exemplo.html",
]
const desafios = [
    "Desafios/01/index.html",
]
function contentPopup(tipo) {
    if (tipo == "Atividade") {
        const elementos = contPopupMaker(atividades, tipo)
        elementos.forEach(element => {
            document.getElementById('popup').appendChild(element)
        });
    }
    else if (tipo == "Projeto") {
        const elementos = contPopupMaker(projetos, tipo)
        elementos.forEach(element => {
            document.getElementById('popup').appendChild(element)
        });
    }
    else if (tipo == "Desafio") {
        const elementos = contPopupMaker(desafios, tipo)
        elementos.forEach(element => {
            document.getElementById('popup').appendChild(element)
        });
    }
}
function contPopupMaker(lista, tipo) {
    const totalLinks = []
    for (let i = 0; i < lista.length; i++) {
        const a = document.createElement("a")
        a.textContent = `${tipo} ${i + 1}`;

        const divLink = document.createElement("div")
        divLink.classList.add("div-link")
        divLink.appendChild(a)
        divLink.addEventListener("click", function () {
            window.location.href = lista[i]
        })
        totalLinks.push(divLink)
    }
    const splitResults = splitArray(totalLinks, 6)
    const links = []
    for (let j = 0; j < splitResults.length; j++) {
        const div = document.createElement("div")

        for (let l = 0; l < splitResults[j].length; l++) {
            div.appendChild(splitResults[j][l])
        }
        links.push(div)
    }
    return links
}
