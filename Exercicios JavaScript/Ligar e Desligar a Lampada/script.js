// Obtém a referência para a lâmpada e a imagem da lâmpada
const lamp = document.getElementById('lamp');
const lampImage = document.getElementById('lampImage');

// Adiciona um evento para o clique na imagem da lâmpada
lampImage.addEventListener('click', toggleLamp);

// Adiciona um evento para o clique na lâmpada
function toggleLamp() {
    // Verifica se a classe 'lamp-off' está presente na lâmpada
    const isLampOff = lamp.classList.contains('lamp-off');

    // Altera a imagem e a classe com base no estado atual da lâmpada
    if (isLampOff) {
        turnOnLamp();
    } else {
        turnOffLamp();
    }
}

// Função para ligar a lâmpada
function turnOnLamp() {
    lampImage.src = 'imgs/Lampada_Apagada.jpg';
    lamp.classList.remove('lamp-off');
}

// Função para desligar a lâmpada
function turnOffLamp() {
    lampImage.src = 'imgs/Lampada_Acessa.jpg';
    lamp.classList.add('lamp-off');
}