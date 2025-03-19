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

  // Processa as linhas em grupos de três (Data da Posição, Latitude e Longitude)
  // Começa da linha 3 para pular o cabeçalho
  for (let i = 3; i < linhas.length; i += 3) {
      const data = linhas[i].trim(); // Remove espaços extras da Data da Posição
      const latitudeOriginal = linhas[i + 1] ? linhas[i + 1].trim() : ''; // Latitude
      const longitudeOriginal = linhas[i + 2] ? linhas[i + 2].trim() : ''; // Longitude

      // Converte a latitude e longitude para o formato decimal
      const latitudeDecimal = converterCoordenada(latitudeOriginal);
      const longitudeDecimal = converterCoordenada(longitudeOriginal);

      // Adiciona a linha formatada ao array
      dadosFormatados.push(`${data}\t${latitudeDecimal}\t${longitudeDecimal}`);
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