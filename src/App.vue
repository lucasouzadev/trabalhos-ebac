<script setup>
import { computed, ref } from 'vue'
import { calcular } from './calcular'

const primeiro = ref('')
const segundo = ref('')
const operacao = ref('+')
const resultado = computed(() => calcular(primeiro.value, segundo.value, operacao.value))
const resultadoFormatado = computed(() =>
  typeof resultado.value === 'number'
    ? new Intl.NumberFormat('pt-BR', { maximumFractionDigits: 10 }).format(resultado.value)
    : resultado.value
)
</script>

<template>
  <main class="calculadora">
    <p class="identificacao">EXERCÍCIO 01 · VUE</p>
    <h1>Calculadora aritmética</h1>
    <p class="introducao">Informe os números e escolha uma operação.</p>
    <div class="campos">
      <label for="primeiro">Primeiro número
        <input id="primeiro" v-model.number="primeiro" type="number" step="any" placeholder="0" />
      </label>
      <label for="operacao">Operação
        <select id="operacao" v-model="operacao">
          <option value="+">Adição (+)</option>
          <option value="-">Subtração (−)</option>
          <option value="*">Multiplicação (×)</option>
          <option value="/">Divisão (÷)</option>
        </select>
      </label>
      <label for="segundo">Segundo número
        <input id="segundo" v-model.number="segundo" type="number" step="any" placeholder="0" />
      </label>
    </div>
    <div class="resultado" aria-live="polite" aria-atomic="true">
      <span>Resultado</span>
      <output for="primeiro segundo operacao">{{ resultadoFormatado }}</output>
    </div>
    <p class="nota">O resultado é atualizado automaticamente ao alterar os campos.</p>
  </main>
</template>
