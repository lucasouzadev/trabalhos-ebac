export const classificacoes = [
  { limite: 18.5, faixa: 'Menor que 18,5', nome: 'Abaixo do peso' },
  { limite: 25, faixa: '18,5 a menos de 25', nome: 'Peso normal' },
  { limite: 30, faixa: '25 a menos de 30', nome: 'Sobrepeso' },
  { limite: 35, faixa: '30 a menos de 35', nome: 'Obesidade grau I' },
  { limite: 40, faixa: '35 a menos de 40', nome: 'Obesidade grau II' },
  { limite: Infinity, faixa: '40 ou mais', nome: 'Obesidade grau III' }
]

export function calcularIMC(altura, peso) {
  const alturaNumerica = Number(altura)
  const pesoNumerico = Number(peso)
  if (!Number.isFinite(alturaNumerica) || !Number.isFinite(pesoNumerico) || alturaNumerica <= 0 || pesoNumerico <= 0) {
    return null
  }
  const valor = pesoNumerico / alturaNumerica ** 2
  if (!Number.isFinite(valor)) return null
  const classificacao = classificacoes.find((item) => valor < item.limite)
  return { valor, classificacao: classificacao.nome }
}
