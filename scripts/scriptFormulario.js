const fetchDados = async (url) => (await fetch(url)).json();

const carregarEstados = async () => {
  const estados = await fetchDados('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
  const opcao = estados.sort((a, b) => a.nome.localeCompare(b.nome))
    .map(estado => `<option value="${estado.id}">${estado.nome}</option>`).join('');

    const estadoSelecionado = ['estado1','estado2','estado3'].forEach(id => {
        document.getElementById(id).innerHTML += opcao;
    });
};

const carregarMunicipios = async (estadoId, municipioId) => {
    const estado = document.getElementById(estadoId).value;
    const municipioSelecionado = document.getElementById(municipioId);
    console.log(estado);
    console.log(municipioId);
    if(!estado){
        municipioSelecionado.innerHTML = '<option value="">Selecione um municipio</option>';
        return;
    }

    const municipios = await fetchDados(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado}/municipios`);
    municipioSelecionado.innerHTML = '<option value="">Selecione um município</option>' + 
    municipios.map(municipio => `<option value="${municipio.id}">${municipio.nome}</option>`).join('');

}

function habilitaHoraData(){
    const rouboConfirmado = document.getElementById(roubo);
    console.log(rouboConfirmado);
}







