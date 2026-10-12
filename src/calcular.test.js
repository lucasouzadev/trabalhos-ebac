import { test } from 'node:test'
import assert from 'node:assert/strict'
import { calcular } from './calcular.js'

test('realiza as quatro operações com zero, negativos e decimais', () => {
  assert.equal(calcular(0, 4, '+'), 4)
  assert.equal(calcular(2, 5, '-'), -3)
  assert.equal(calcular(-2, 1.5, '*'), -3)
  assert.equal(calcular(7, 2, '/'), 3.5)
})
test('trata campos vazios, números inválidos e divisão por zero', () => {
  assert.equal(calcular('', 2, '+'), 'Preencha os dois números.')
  assert.equal(calcular(2, '', '+'), 'Preencha os dois números.')
  assert.equal(calcular('abc', 2, '+'), 'Informe números válidos.')
  assert.equal(calcular(1, 0, '/'), 'Não é possível dividir por zero.')
})
