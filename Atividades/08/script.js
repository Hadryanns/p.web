let listaPessoa = []
const inputPessoa = document.getElementById("input-add-pessoa")
inputPessoa.addEventListener("keypress", adicionarPessoas)

input.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        const minhaDiv = document.getElementById("minha-div")
        minhaDiv.innerHTML = ""
        const pessoaValue = document.getElementById("input-add-pessoa").value
        listaPessoa.push(pessoaValue)
        for (let i = 0; i < listaPessoa.length; i++) {
            minhaDiv.innerHTML += '<h5>' + i + ' - ' + listaPessoa[i] + '</h5>'

        }
    }
});

function adicionarPessoas() {
    const minhaDiv = document.getElementById("minha-div")
    minhaDiv.innerHTML = ""
    const pessoaValue = document.getElementById("input-add-pessoa").value
    listaPessoa.push(pessoaValue)
    for (let i = 0; i < listaPessoa.length; i++) {
        minhaDiv.innerHTML += '<h5>' + i + ' - ' + listaPessoa[i] + '</h5>'

    }
}

function removePessoas() {
    const minhaDiv = document.getElementById("minha-div")
    minhaDiv.innerHTML = ""
    alert(listaPessoa[listaPessoa.length - 1] + " foi removido(a)")
    listaPessoa.pop()
    for (let i = 0; i < listaPessoa.length; i++) {
        minhaDiv.innerHTML += '<h5>' + i + ' - ' + listaPessoa[i] + '</h5>'

    }
}

