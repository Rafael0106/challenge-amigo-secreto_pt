//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let = amigos = [];

function adicionarAmigo(){
    nomeAmigo = document.getElementById('amigo').value;
    if (nomeAmigo == ''){
        alert('Por favor, insira um nome!')
    } else if (amigos.includes(nomeAmigo)) {
        alert('Nome já incluso na lista')
    } else {
        amigos.push(nomeAmigo);
        nomeAmigo = document.querySelector('input');
        nomeAmigo.value = '';
        atualizarLista();
    }
}

function atualizarLista(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    for (let i = 0; i < amigos.length; i++){
        let item = document.createElement('li');
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}
