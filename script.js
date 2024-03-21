const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");


// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
}

function encriptar(string) {
    const resultado = string
        .replaceAll("e", "enter")
        .replaceAll("i", "imes")
        .replaceAll("a", "ai")
        .replaceAll("o", "ober")
        .replaceAll("u", "ufat");
        
        return resultado;
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = "";
}

function desencriptar(string) {
    const resultado = string
        .replaceAll("enter", "e")
        .replaceAll("imes", "i") 
        .replaceAll("ai", "a") 
        .replaceAll("ober", "o")
        .replaceAll("ufat", "u");

        return resultado;
}


function btnCopiar() {
    const mensagem = document.querySelector(".mensagem");
    
    // Seleciona o texto dentro da caixa de texto
    mensagem.select();
    
    // Copia o texto selecionado para a área de transferência
    document.execCommand('copy');
    
    // Deseleciona o texto
    mensagem.blur();
    
    // Exibe uma mensagem para o usuário
    // alert("Texto copiado para a área de transferência!");
}
