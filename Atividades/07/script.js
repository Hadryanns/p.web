let linguagens = Array()

linguagens[0] = 'Dart'
linguagens[1] = 'PHP'
linguagens[2] = 'Assembly'
linguagens[3] = 'Java'
linguagens[4] = 'Python'
linguagens[5] = 'Perl'
linguagens[6] = 'TypeScript'

var num1 = 0
var num2 = 0

function mostrarLinguagens(){
    const container_1 = document.getElementById('minha-div-1')
    const button_1 = document.getElementById('button-1')
    if(num1 == 0){
        for (let i = 0; i < linguagens.length; i++) {
            container_1.innerHTML += '<h5>' + i + ' - ' + linguagens[i] + '</h5>'
        }
        num1 = 1
        console.log(num1)
        button_1.innerHTML = 'Esconder Array de Linguagens'
    }
    else if(num1 == 1){
        container_1.innerHTML = ''
        num1 = 0
        console.log(num1)
        button_1.innerHTML = 'Mostrar Array de Linguagens'
    }
}

function posicaoLinguagem(){
    const indice = prompt("Qual indice vc deseja consultar?")
    alert(linguagens[indice])
}

let frutas = ['Laranja','Maçã','Melancia','Uva','Pera','Amora','Morango']

function mostrarFrutas(){
    const container_2 = document.getElementById('minha-div-2')
    const button_2 = document.getElementById('button-2')
    if(num2 == 0){
        for (let i = 0; i < frutas.length; i++) {
            container_2.innerHTML += '<h5>' + i + ' - ' + frutas[i] + '</h5>'
        }
        num2 = 1
        console.log(num2)
        button_2.innerHTML = 'Esconder Array de Frutas'
    }
    else if(num2 == 1){
        container_2.innerHTML = ''
        num2 = 0
        console.log(num2)
        button_2.innerHTML = 'Mostrar Array de Frutas'
    }
}

function posicaoFrutas(){
    const indice = prompt("Qual indice vc deseja consultar?")
    alert(frutas[indice])
}