const recebeDados = async () => {

    resumo = document.getElementById("resumo").value;
    resultado = document.getElementById("resultado");
    resultado.style.display = 'block';
    resultado.disabled = false;
    resultado.innerHTML = `
    Prezados, 
    Segue o breve relato do pronta resposta em andamento.

    
    Resumo: ${resumo}
    `;
}

function copiar() {
    const outputTextarea = document.getElementById('resultado');
    outputTextarea.select();
    outputTextarea.setSelectionRange(0, 99999); 
    document.execCommand('copy');
  }

function limpar() {
    resultado.innerHTML = ``;
    resultado.disabled = true;
    resultado.style.display = 'none';
}

