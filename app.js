//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let = amigos = [];

function adicionarAmigo(){
    nomeAmigo = document.getElementById('amigo').value;
    if (nomeAmigo == ''){
        alert('Por favor, insira um nome!')
    } else {
        amigos.push(nomeAmigo);
        nomeAmigo = document.querySelector('input');
        nomeAmigo.value = '';
        console.log(amigos);
    }
}
