let linguagens = Array()

linguagens[0] = 'Dart'
linguagens[1] = 'PHP'
linguagens[2] = 'Assembly'
linguagens[3] = 'Java'
linguagens[4] = 'Python'
linguagens[5] = 'Perl'
linguagens[6] = 'TypeScript'

function mostrarLinguagens(){
    const container = document.getElementById('minha-div')
    for (let i = 0; i < linguagens.length; i++) {
        container.innerHTML += '<h5>' + i + ' - ' + linguagens[i] + '</h5>'
    }
}

function posicaoLinguagem(){
    const indice = prompt("Qual indice vc deseja consultar?")
    alert(linguagens[indice])
}

let frutas = ['Laranja','Maçã','Melancia','Uva','Pera','Amora','Morango']

function mostrarFrutas(){
    const container = document.getElementById('minha-div-2')
    for (let i = 0; i < frutas.length; i++) {
        container.innerHTML += '<h5>' + i + ' - ' + frutas[i] + '</h5>'
    }
}

function posicaoFrutas(){
    const indice = prompt("Qual indice vc deseja consultar?")
    alert(frutas[indice])
}