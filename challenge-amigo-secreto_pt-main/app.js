let amigos = []; // Lista que vai armanezar os nomes dos amigos

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    let nomeAmigo = document.getElementById ('amigo').value.trim(); // Captura o valor digitado no campo e usa trim() para remover espaços extras
   // Verifica se o campo está vazio
    if (nomeAmigo == "") {
        alert ('Por favor, insira um nome.');
    } else {
        amigos.push (nomeAmigo); // Adiciona o nome à lista de amigos
    }

    limparCampo(); // Limpa o campo de entrada após a adição
    console.log (amigos); // Exibe a lista de amigos no console (para verificação)
}

// Função para limpar o campo de entrada
function limparCampo() {
    document.getElementById('amigo').value = '';
}