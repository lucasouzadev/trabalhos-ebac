import { useState } from 'react'
import { calcularIMC, classificacoes } from './imc'

export default function App() {
  const [altura, setAltura] = useState('')
  const [peso, setPeso] = useState('')
  const [resultado, setResultado] = useState(null)
  const [erro, setErro] = useState('')

  function calcular(event) {
    event.preventDefault()
    const novoResultado = calcularIMC(altura, peso)
    setResultado(novoResultado)
    setErro(novoResultado ? '' : 'Informe altura e peso válidos, maiores que zero.')
  }

  function alterarCampo(setter, valor) {
    setter(valor)
    setResultado(null)
    setErro('')
  }

  return (
    <main className="calculadora">
      <p className="identificacao">EXERCÍCIO 02 · REACT</p>
      <h1>Calculadora de IMC</h1>
      <p className="introducao">Informe sua altura e seu peso para calcular o índice de massa corporal.</p>
      <form onSubmit={calcular}>
        <div className="campos">
          <label htmlFor="altura">Altura (m)
            <input id="altura" type="number" min="0.01" step="any" placeholder="Ex.: 1,75" value={altura} onChange={(e) => alterarCampo(setAltura, e.target.value)} required />
          </label>
          <label htmlFor="peso">Peso (kg)
            <input id="peso" type="number" min="0.01" step="any" placeholder="Ex.: 70" value={peso} onChange={(e) => alterarCampo(setPeso, e.target.value)} required />
          </label>
        </div>
        <button type="submit">Calcular IMC</button>
      </form>
      <div className="resultado" aria-live="polite" aria-atomic="true">
        {erro && <p role="alert">{erro}</p>}
        {resultado && <p>Seu IMC: <strong>{resultado.valor.toFixed(2).replace('.', ',')}</strong><br />Classificação: <strong>{resultado.classificacao}</strong></p>}
      </div>
      <table>
        <caption>Classificação do IMC para adultos</caption>
        <thead><tr><th scope="col">IMC (kg/m²)</th><th scope="col">Classificação</th></tr></thead>
        <tbody>
          {classificacoes.map((item) => (
            <tr key={item.nome} className={resultado?.classificacao === item.nome ? 'selecionada' : ''}>
              <td>{item.faixa}</td><td>{item.nome}{resultado?.classificacao === item.nome && <span className="marcador"> · Seu resultado</span>}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
}
