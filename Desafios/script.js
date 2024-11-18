function contarN(){
    var texto = prompt("Digite um numero")
    numero = parseInt(texto)
    console.log(numero)
    while(numero > 0){
        document.body.innerHTML(numero,"<br>")
        numero = numero - 1
        console.log(numero)
    }
}