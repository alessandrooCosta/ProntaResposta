function formatarDados() {
  const inputTextarea = document.getElementById('inputTextarea');
  const dados = inputTextarea.value;
  const linhas = dados.split('\n');
  const dadosFormatados = [];
  dadosFormatados.push("Data da Posição	Latitude	Longitude");
  for (let i = 1; i < linhas.length; i++) {
      const linha = linhas[i].trim(); 
      if (linha) {
          const colunas = linha.split(/\s+/);
          const data = colunas[0] + ' ' + colunas[1]; 
          const latitudeOriginal = colunas[2]; 
          const longitudeOriginal = colunas[3]; 
          const latitudeDecimal = converterCoordenada(latitudeOriginal);
          const longitudeDecimal = converterCoordenada(longitudeOriginal);
          dadosFormatados.push(`${data } \t${-latitudeDecimal} \t${-longitudeDecimal}`);
      }
  }
  const resultado = dadosFormatados.join('\n');
  const outputTextarea = document.getElementById('outputTextarea');
  outputTextarea.value = resultado;
}
function converterCoordenada(coordenada) {
  if (!coordenada) return ''; 
  if (!coordenada.includes(':')) {
      return coordenada; 
  }
  const partes = coordenada.split(':');
  const graus = parseFloat(partes[0]);
  const minutos = parseFloat(partes[1]);
  const segundos = parseFloat(partes[2]);
  const decimal = (graus * -1) + (minutos / 60) + (segundos / 3600);
  return decimal.toFixed(6);
}

function copiar() {
  const outputTextarea = document.getElementById('outputTextarea');
  outputTextarea.select();
  outputTextarea.setSelectionRange(0, 99999); 
  document.execCommand('copy');
}

function limpar() {
  const inputTextarea = document.getElementById('inputTextarea');
  const outputTextarea = document.getElementById('outputTextarea');
  inputTextarea.value = '';
  outputTextarea.value = '';
}