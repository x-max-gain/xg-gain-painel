const FunctionsOptions = [
  {
      signal: 'valueFibonnaci',
      name: 'Valor do fibonacci',
      params: [
          {
              index: 0,
              type: 'number',
              validations: {
                  required: true
              }
          }
      ]
  },
  {
      signal: 'valueCurrent',
      name: 'Valor do fibonacci',
      params: []
  },
  {
      signal: 'createOperation',
      name: 'Abrir operação',
      params: [
          {
              index: 0,
              type: 'select',
              options: [
                  {
                      text: 'Contrato',
                      value: 'contract'
                  },
                  {
                      text: 'Valor fixo',
                      value: 'value'
                  }
              ],
              validations: {
                  required: true
              }
          },
          {
              index: 0,
              type: 'number',
              validations: {
                  required: true
              }
          }
      ]
  }
]

const DataFunction = {
  name: 'Adicionar dados',
  type: 'data',
  signais: [
      {
          signal: 'Funções',
          name: 'func'
      },
  ],
  params: FunctionsOptions
}

const DataValue = {
  name: 'Adicionar dados',
  type: 'data',
  signais: [
      {
          signal: 'Porcentagem',
          name: 'percent'
      },
      {
          signal: 'Número',
          name: 'number'
      },
      {
          signal: 'Verdadeiro/Falso',
          name: 'boolean'
      },
      {
          signal: 'Número quebrado',
          name: 'float'
      }
  ]
}

const MathOptions = {
  name: 'Criar conta matemática',
  type: 'math',
  signais: [
      {
          signal: 'Soma',
          name: '+'
      },
      {
          signal: 'Subtrair',
          name: '-'
      },
      {
          signal: 'Multiplicar',
          name: '*'
      },
      {
          signal: 'Dividir',
          name: '/'
      },
      {
          signal: 'Restante da divisão',
          name: '%'
      }
  ],
  params: [{...DataValue, ...DataFunction}]
}

const Comparison = {
  name: 'Criar comparação',
  type: 'comparison',
  signais: [
      {
          signal: '===',
          name: 'Igual'
      },
      {
          signal: '!==',
          name: 'Diferente'
      },
      {
          signal: '>',
          name: 'Maior'
      },
      {
          signal: '<',
          name: 'Menos'
      },
      {
          signal: '>=',
          name: 'Maior ou igual'
      },
      {
          signal: '<=',
          name: 'Menor ou igual'
      }
  ],
  params: [MathOptions, {...DataValue, ...DataFunction}]
}

const Logic = {
  name: 'Criar lógica',
  type: 'logic',
  sinals: [
      {
          signal: '&&',
          name: 'E'
      },
      {
          signal: '||',
          name: 'Ou'
      }
  ],
  params: [MathOptions, Comparison, {...DataValue, ...DataFunction}]
}
const continueFunc = () => {
  const logicC = { ...Logic, continue: continueFunc };
  const CoparisonC = { ...Comparison, continue: continueFunc }
  return [logicC, CoparisonC, DataFunction]
}
const continueCoparison = {
  ...Logic,
  continue: continueFunc
}
const continueLogic = {
  ...Comparison,
  continue: continueFunc
}

const execute = [continueCoparison, continueLogic];