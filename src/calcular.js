export function calcular(primeiro, segundo, operacao) {
  if (primeiro === '' || segundo === '') return 'Preencha os dois números.'
  const a = Number(primeiro)
  const b = Number(segundo)
  if (!Number.isFinite(a) || !Number.isFinite(b)) return 'Informe números válidos.'
  if (operacao === '/' && b === 0) return 'Não é possível dividir por zero.'
  const operacoes = { '+': () => a + b, '-': () => a - b, '*': () => a * b, '/': () => a / b }
  const resultado = operacoes[operacao]?.()
  return Number.isFinite(resultado) ? resultado : 'Não foi possível calcular.'
}
