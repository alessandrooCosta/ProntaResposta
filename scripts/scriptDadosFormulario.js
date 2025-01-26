const recebeDados = async () => {
    breveRelato = document.getElementById("breveRelato");
    const select = document.getElementsByTagName("select");
    const input = document.getElementsByTagName("input");
    const valoresInput = {};
    const valoresSelect = {};
    /*
    for (let i = 0; i < input.length; i++) {
        valoresInput[input[i].id] = input[i].value;
    }
    for (let i = 0; i < select.length; i++) {
        valoresSelect[select[i].id] = select[i].value;
    }
    */
    //console.log(input);
    //console.log(select);
    resultado = document.getElementById("resultado");
    resultado.disabled = false;
    resultado.innerHTML = `
    Prezados, 
    Segue o breve relato do pronta resposta em andamento.

    Equipamento Principal: ${input[0].value}
    Satélite: ${input[1].value}
    Solicitante: ${input[2].value}
    Contato: ${input[3].value}
    Proprietário: ${input[4].value}
    OS de abertura: ${input[5].value}
    OS MOVA: ${input[6].value}
    Protocolo da Ligação: ${input[7].value}
    GR acionou o serviço: ${select[0].value}
    GR irá arcar com os custos: ${select[1].value}
    Roubo confirmado: ${select[2].value}
    Data: ${input[8].value}
    Horário: ${input[9].value}
    Placa do Cavalo: ${input[10].value}
    Placa da Carreta: ${input[11].value}
    Marca: ${input[12].value}
    Modelo: ${input[13].value}
    Ano: ${input[14].value}
    Cor: ${input[15].value}
    Possui SmartBox: ${select[3].value}
    Outros equipamentos(localizadores ou acessórios): ${select[4].value}
    Tipo de Veiculo: ${select[5].value}
    Tipo de Carroceria: ${select[6].value}
    Carregado: ${select[7].value}
    Carga: ${input[16].value}
    Detalhes no Veiculo: ${input[17].value}
    Local da Ocorrência: ${select[8].value} - ${select[9].value}
    Origem: ${select[10].value} - ${select[11].value}
    Destino: ${select[12].value} - ${select[13].value}
    Equipamento de Terceiros: ${select[14].value}
    Envio o comando de bloqueio: ${select[15].value}
    Motorista: ${input[18].value}
    Telefone: ${input[19].value}
    Breve relato: ${breveRelato}
    `;
}