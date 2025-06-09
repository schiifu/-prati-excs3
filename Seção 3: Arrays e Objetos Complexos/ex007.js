function nomesOrdenadosPorPreco(musicas) {
  return musicas
    .sort((a, b) => a.ano - b.ano)
    .map(produto => produto.nome)
}
const musicas = [
  {nome: "Cara Estranho - Los Hermanos", ano: 2003, banda: "Los hermanos"},
  {nome: "The Invisible Man - Maruja", ano: 2024, banda: "Maruja"},
  {nome: "Marlene Dietrich - black midi", ano: 2021, banda: "black midi"}
]
console.log(nomesOrdenadosPorPreco(musicas))