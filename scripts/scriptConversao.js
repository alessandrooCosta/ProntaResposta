function conversao(){
  const coord = document.getElementById("coordenadas").value;
  const linhas = coord.split('\n');
  linhas.forEach((line, index) => {
    console.log(`Linha ${index +1} : ${line}`);
  });
  document.getElementById('output').innerHTML = linhas.map((line, index) => `<p>${line}</p>`).join('');
}