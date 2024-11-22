function contarN(valorAtual) {
    const mainDiv = document.getElementById("main-div")
    const newDiv = document.createElement("div")
    if (valorAtual) {
        newDiv.innerHTML = `<marquee behavior="alternate" scrollamount="30"><span style="font-size: 100px; font-family: Arial;">${valorAtual}</span></marquee><br>`
        mainDiv.appendChild(newDiv)
        setTimeout(() => contarN(valorAtual - 1), 1000)
    }
    else if (valorAtual == 0) {
        return
    }
    else {
        const texto = prompt("Digite um numero")
        const numero = parseInt(texto)
        setTimeout(contarN(numero), 1000)
    }
}