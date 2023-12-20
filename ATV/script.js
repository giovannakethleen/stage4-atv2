let listaDeEstudantes = [
  {
    nome: "João",
    n1: 4,
    n2: 6,
  },

  {
    nome: "Ana",
    n1: 7,
    n2: 8,
  },

  {
    nome: "Sara",
    n1: 8,
    n2: 8,
  },

  {
    nome: "Giovanna",
    n1: 8,
    n2: 8,
  },
]

function calculaMedia(n1, n2) {
  let media = (n1 + n2) / 2
  return media
}

for (let estudante of listaDeEstudantes) {
  mediaIndividual = calculaMedia(estudante.n1, estudante.n2)
  let aprovadoOuNao =
    mediaIndividual < 7
      ? "Infelizmente não foi dessa vez. Estude mais"
      : "Parabéns pela sua aprovação"

  alert(`A média de ${estudante.nome} é ${mediaIndividual}.
${aprovadoOuNao}`)
}
