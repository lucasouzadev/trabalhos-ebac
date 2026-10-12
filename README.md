# Trabalhos EBAC

Exercícios organizados em uma branch para cada tarefa.

| Exercício | Branch | Projeto |
| --- | --- | --- |
| 1 | [exercicio-01-vue-calculadora](https://github.com/lucasouzadev/trabalhos-ebac/tree/exercicio-01-vue-calculadora) | Calculadora aritmética com Vue |
| 2 | [exercicio-02-react-imc](https://github.com/lucasouzadev/trabalhos-ebac/tree/exercicio-02-react-imc) | Formulário e classificação de IMC com React |
| 3 | [exercicio-03-styled-components](https://github.com/lucasouzadev/trabalhos-ebac/tree/exercicio-03-styled-components) | EBAC Jobs com Styled Components |
| 4 | [exercicio-04-redux](https://github.com/lucasouzadev/trabalhos-ebac/tree/exercicio-04-redux) | EBAC Sports com Redux Toolkit e RTK Query |

Cada branch contém o código completo do exercício e as instruções para executar o projeto. A branch `main` reúne os links; para abrir um projeto, selecione a branch correspondente.

## Forks exigidos nos exercícios

- Exercício 3: [base_exercicio_css_in_js](https://github.com/lucasouzadev/base_exercicio_css_in_js), fork de [ogiansouza/base_exercicio_css_in_js](https://github.com/ogiansouza/base_exercicio_css_in_js).
- Exercício 4: [ebac_sports](https://github.com/lucasouzadev/ebac_sports), fork de [havokkmorands/ebac_sports](https://github.com/havokkmorands/ebac_sports).

Os forks também têm a branch de cada exercício, e suas branches `main` contêm as alterações finalizadas, prontas para entregar os links.

## Executar um exercício

```sh
git clone https://github.com/lucasouzadev/trabalhos-ebac.git
cd trabalhos-ebac
git switch exercicio-01-vue-calculadora
npm ci
npm run dev
```

Troque o nome da branch pelo exercício desejado. Os exercícios 1 e 2 usam `npm run dev`; os exercícios 3 e 4 usam `npm start`. Antes de trocar de projeto, pare o servidor e execute `npm ci` na branch escolhida.

## Verificações realizadas

- `npm run build` passou nos quatro exercícios.
- Testes da calculadora: quatro operações, campos vazios, números inválidos e divisão por zero.
- Testes de IMC: fórmula, limites de classificação e entradas inválidas.
- Testes de integração Redux: carrinho, total, prevenção de repetição, favoritos, carregamento e erro da consulta.
- Conferência no navegador: cálculo automático, resultado de IMC na tabela, pesquisa de vagas e loja com produtos da API original.

Os exercícios 3 e 4 preservam a aparência e o conteúdo dos respectivos projetos de apoio. O exercício 3 usa os mesmos links de candidatura de exemplo, e o exercício 4 depende da API pública original da EBAC.
