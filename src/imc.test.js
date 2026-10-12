import { test } from 'node:test'
import assert from 'node:assert/strict'
import { calcularIMC } from './imc.js'

test('calcula o IMC com altura em metros e peso em kg', () => {
  const resultado = calcularIMC(1.75, 70)
  assert.ok(Math.abs(resultado.valor - 22.857142857) < 0.000001)
  assert.equal(resultado.classificacao, 'Peso normal')
})
test('classifica corretamente os limites sem arredondar antes', () => {
  for (const [valor, nome] of [[18.49, 'Abaixo do peso'], [18.5, 'Peso normal'], [24.999, 'Peso normal'], [25, 'Sobrepeso'], [30, 'Obesidade grau I'], [35, 'Obesidade grau II'], [40, 'Obesidade grau III']]) {
    assert.equal(calcularIMC(1, valor).classificacao, nome)
  }
})
test('recusa altura e peso vazios, negativos, zero ou não numéricos', () => {
  for (const [altura, peso] of [['', 70], [1.75, ''], [0, 70], [-1, 70], [1.75, 0], [1.75, -1], ['abc', 70]]) {
    assert.equal(calcularIMC(altura, peso), null)
  }
})
