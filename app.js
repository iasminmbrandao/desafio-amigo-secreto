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
    atualizarLista();
}

// Função para limpar o campo de entrada
function limparCampo() {
    document.getElementById('amigo').value = '';
}

//Função para adicionar a lista na página
function atualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    //Usando o loop for para percorrer a lista
    for(let i=0; i < amigos.length; i++){  
        const li = document.createElement('li');  // Criar o elemento <li>
        li.textContent = amigos[i];   // Definir o texto do <li> como o nome do amigo
        lista.appendChild(li);  // Adicionar o <li> à lista (ul)
    }
}

function verificarLista() {
    if (amigos.length === 0) {  // Verifica se a lista está vazia
        alert('Por favor, adicione os nomes dos seus amigos antes de realizar o sorteio.');
    } else {
        sortearAmigo();  // Chama a função para sortear o amigo
    }
}

function sortearAmigo() {
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);  // Gera um índice aleatório
    let amigoSorteado = amigos[indiceAleatorio];  // Pega o nome do amigo sorteado
    document.getElementById('resultado').innerHTML = "O amigo sorteado é: " + amigoSorteado;
}


