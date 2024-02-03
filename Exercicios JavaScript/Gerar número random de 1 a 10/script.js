document.getElementById('botaoAleatorio').addEventListener('click', function() {
    // Gera um número aleatório entre 1 e 10
    var numeroAleatorio = Math.floor(Math.random() * 10) + 1;

    // Exibe a mensagem com o número aleatório
    alert('Número Aleatório: ' + numeroAleatorio);
});