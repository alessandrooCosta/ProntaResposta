const fetchDados = async (url) => (await fetch(url)).json();

const carregarEstados = async () => {
    const estados = await fetchDados('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
    const opcao = estados.sort((a, b) => a.nome.localeCompare(b.sigla))
        .map(estado => `<option value="${estado.id}">${estado.sigla}</option>`).join('');
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

const habilitarNomeGR = async () => {
    const grAciona = document.getElementById("grAciona").value;
    const nomeGr = document.getElementById("gr");
    if(grAciona === "Sim"){
        nomeGr.disabled = false;
    }else{
        nomeGr.disabled = true;
    }
}

// addEventListener! Função do botão subir ERROR
/*
const botaoSubir = document.querySelector("#botaoSubir");
const form = document.querySelector("#form");
botaoSubir.addEventListener("click", () => {n  n 
    form.scrollBy({top: 0, behavior: "smooth"});
});
*/

const recebeDados = async () => {
    const input = document.getElementsByTagName("input");
    const select = document.getElementsByTagName("select");
    const estado1 = document.getElementById("estado1").value;
    const estadoAPI1 = await fetchDados(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado1}`);
    const estadoSelecionado1 = estadoAPI1.sigla;
    const estado2 = document.getElementById("estado2").value;
    const estadoAPI2 = await fetchDados(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado2}`);
    const estadoSelecionado2 = estadoAPI2.sigla;
    const estado3 = document.getElementById("estado3").value;
    const estadoAPI3 = await fetchDados(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado3}`);
    const estadoSelecionado3 = estadoAPI3.sigla;
    const municipio1 = document.getElementById("municipio1").value;
    const municipioAPI1 = await fetchDados(`https://servicodados.ibge.gov.br/api/v1/localidades/municipios/${municipio1}`);
    const municipioSelecionado1 = municipioAPI1.nome;
    const municipio2 = document.getElementById("municipio2").value;
    const municipioAPI2 = await fetchDados(`https://servicodados.ibge.gov.br/api/v1/localidades/municipios/${municipio2}`);
    const municipioSelecionado2 = municipioAPI2.nome;
    const municipio3 = document.getElementById("municipio3").value;
    const municipioAPI3 = await fetchDados(`https://servicodados.ibge.gov.br/api/v1/localidades/municipios/${municipio3}`);
    const municipioSelecionado3 = municipioAPI3.nome;
    data = document.getElementById("data").value;
    const dataOjb = new Date(data);
    const dia = dataOjb.getDate().toString().padStart(2, '0');
    const mes = (dataOjb.getMonth() + 1).toString().padStart(2, '0');
    const ano = dataOjb.getFullYear();
    if(data !== ""){
        Dataformatada = `${dia}/${mes}/${ano}`;   
    }else{
        Dataformatada = ""; 
    } 
    breveRelato = document.getElementById("breveRelato").value;
    resultado = document.getElementById("resultado");
    resultado.style.display = 'block';
    resultado.disabled = false;
    resultado.innerHTML = `
    Prezados, 
    Segue o breve relato do pronta resposta em andamento.

    Equipamento Principal: ${input[13].value}
    Satélite: ${input[14].value}
    Solicitante: ${input[0].value}
    Contato: ${input[1].value}
    Proprietário: ${input[2].value}
    OS de abertura: ${input[15].value}
    OS MOVA: ${input[16].value}
    Protocolo da Ligação: ${input[17].value}
    GR acionou o serviço: ${select[12].value}
    Nome da GR: ${input[18].value}
    GR irá arcar com os custos: ${select[13].value}
    Roubo confirmado: ${select[6].value}
    Data: ${Dataformatada}
    Horário: ${input[4].value}
    Placa do Cavalo: ${input[5].value}
    Placa da Carreta: ${input[6].value}
    Marca: ${input[7].value}
    Modelo: ${input[8].value}
    Ano: ${input[9].value}
    Cor: ${input[10].value}
    Possui SmartBox: ${select[10].value}
    Outros equipamentos(localizadores ou acessórios): ${select[11].value}
    Tipo de Veiculo: ${select[7].value}
    Tipo de Carroceria: ${select[8].value}
    Carregado: ${select[9].value}
    Carga: ${input[12].value}
    Detalhes no Veiculo: ${input[11].value}
    Local da Ocorrência: ${municipioSelecionado1} - ${estadoSelecionado1}
    Origem: ${municipioSelecionado2} - ${estadoSelecionado2}
    Destino: ${municipioSelecionado3} - ${estadoSelecionado3}
    Equipamento de Terceiros: ${select[12].value}
    Envio o comando de bloqueio: ${select[14].value}
    Motorista: ${input[19].value}
    Telefone: ${input[20].value}
    Breve relato: ${breveRelato}
    `;
}
    


