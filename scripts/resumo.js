const recebeDados = async () => {
    const input = document.getElementsByTagName("input");
    const select = document.getElementsByTagName("select");
    resumo = document.getElementById("resumo").value;
    resultado = document.getElementById("resultado");
    resultado.style.display = 'block';
    resultado.disabled = false;
    responsavelPorLocalizar = select[5].value;
    console.log(responsavelPorLocalizar);
    if(responsavelPorLocalizar == "Cliente"){
        responsavelPorLocalizar = `pelo cliente`;   
    }else{
        responsavelPorLocalizar = `pela RNS`;
    } 
    resultado.innerHTML = `
Prezados, 

Segue o breve relato do pronta resposta encerrado com o veiculo localizado ${responsavelPorLocalizar}:
    
Resumo: ${resumo}

Tempo de Deslocamento: ${input[0].value} 
Chegada no Marco Zero: ${input[1].value} 
Encerramento do Atendimento: ${input[2].value} 
Hora Adicional: ${select[0].value}
Horas inseridas na OS: ${select[1].value}
Carga intacta: ${select[2].value}
Motorista fora de perigo: ${select[3].value}
Veículo localizado: ${select[4].value}

Cliente ciente dos valores e do envio da cópia do B.O em até 48 horas. Orientado que não enviado no prazo o valor R$ 1.089,00 será faturado.
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

