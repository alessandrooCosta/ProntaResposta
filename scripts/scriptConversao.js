function formatarDados() {
  // Captura os dados colados no textarea de entrada
  const inputTextarea = document.getElementById('inputTextarea');
  const dados = inputTextarea.value;

  // Divide os dados em linhas
  const linhas = dados.split('\n');

  // Cria um array para armazenar as linhas formatadas
  const dadosFormatados = [];

  // Adiciona o cabeçalho manualmente
  dadosFormatados.push("Data da Posição\tLatitude\tLongitude");

  // Processa cada linha (ignorando o cabeçalho, se existir)
  for (let i = 1; i < linhas.length; i++) {
      const linha = linhas[i].trim(); // Remove espaços extras

      // Se a linha não estiver vazia, processa os dados
      if (linha) {
          // Divide a linha em colunas (considerando espaços ou tabulações)
          const colunas = linha.split(/\s+/);

          // Extrai os valores de Data, Latitude e Longitude
          const data = colunas[0] + ' ' + colunas[1]; // Data e Hora
          const latitudeOriginal = colunas[2]; // Latitude no formato original
          const longitudeOriginal = colunas[3]; // Longitude no formato original

          // Converte as coordenadas para o formato decimal
          const latitudeDecimal = converterCoordenada(latitudeOriginal);
          const longitudeDecimal = converterCoordenada(longitudeOriginal);

          // Adiciona a linha formatada ao array
          dadosFormatados.push(`${data}\t${latitudeDecimal}\t${longitudeDecimal}`);
      }
  }

  // Junta as linhas formatadas com quebras de linha
  const resultado = dadosFormatados.join('\n');

  // Exibe os dados formatados no textarea de saída
  const outputTextarea = document.getElementById('outputTextarea');
  outputTextarea.value = resultado;
}

// Função para converter coordenadas de "graus:minutos:segundos" para decimal
function converterCoordenada(coordenada) {
  if (!coordenada) return ''; // Se não houver coordenada, retorna vazio

  // Verifica se a coordenada já está no formato decimal
  if (!coordenada.includes(':')) {
      return coordenada; // Retorna a coordenada sem conversão
  }

  // Divide a coordenada em graus, minutos e segundos
  const partes = coordenada.split(':');
  const graus = parseFloat(partes[0]);
  const minutos = parseFloat(partes[1]);
  const segundos = parseFloat(partes[2]);

  // Calcula o valor decimal
  const decimal = graus + (minutos / 60) + (segundos / 3600);

  // Retorna o valor arredondado para 6 casas decimais (formato do Google Maps)
  return decimal.toFixed(6);
}

function copiar() {
  let copyText = document.getElementById("#outputTextarea").innerHTML;
  navigator.clipboard.writeText(copyText);
}
document.querySelector("#botaoCopiar").addEventListener("click", copiar);

function limpar() {
  inputTextarea = document.getElementById('inputTextarea');
  limpo = inputTextarea.value;
  limpo.innerHTML = ``;
}


