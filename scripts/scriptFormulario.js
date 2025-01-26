const fetchDados = async (url) => (await fetch(url)).json();

const carregarEstados = async () => {
    const estados = await fetchDados('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
    const opcao = estados.sort((a, b) => a.nome.localeCompare(b.nome))
        .map(estado => `<option value="${estado.id}">${estado.nome}</option>`).join('');
    const estadoSelecionado = ['estado1', 'estado2', 'estado3'].forEach(id => {
        document.getElementById(id).innerHTML += opcao;
    });
};

const carregarMunicipios = async (estadoId, municipioId) => {
    const estado = document.getElementById(estadoId).value;
    const municipioSelecionado = document.getElementById(municipioId);
    if (!estado) {
        municipioSelecionado.innerHTML = '<option value="">Selecione um municipio</option>';
        return;
    }
    const municipios = await fetchDados(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado}/municipios`);
    municipioSelecionado.innerHTML = '<option value="">Selecione um município</option>' +
        municipios.map(municipio => `<option value="${municipio.id}">${municipio.nome}</option>`).join('');
}

const habilitarHoraData = async () => {
    const rouboConfirmado = document.getElementById("roubo").value;
    const recebe1 = document.getElementById("data");
    const recebe2 = document.getElementById("horario");
    if (rouboConfirmado === "Sim") {
        recebe1.disabled = false;
        recebe2.disabled = false;
    } else {
        recebe1.disabled = true;
        recebe2.disabled = true;
    }
}

const habilitarCarga = async () => {
    const veiculoCarregado = document.getElementById("carregado").value;
    const tipoCarga = document.getElementById("carga");
    if(veiculoCarregado === "Sim"){
        tipoCarga.disabled = false;
    }else{
        tipoCarga.disabled = true;
    }
}


const recebeDados = async () => {
    breveRelato = document.getElementById("breveRelato");
    const select = document.getElementsByTagName("select");
    const estado = document.getElementById("estado1").value;
    const input = document.getElementsByTagName("input");
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
    Local da Ocorrência: ${input[8].value} - ${select[9].value}
    Origem: ${select[10].value} - ${select[11].value}
    Destino: ${select[12].value} - ${select[13].value}
    Equipamento de Terceiros: ${select[14].value}
    Envio o comando de bloqueio: ${select[15].value}
    Motorista: ${input[18].value}
    Telefone: ${input[19].value}
    Breve relato: ${breveRelato}
    `;
}


