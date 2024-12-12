const createOperation = {
    signal: 'createOperation',
    name: 'Abrir operação',
    params: [
        {
            index: 0,
            type: 'select',
            name: 'Tipo de pagamento',
            options: [
                {
                    text: 'Contrato',
                    value: 'contract',
                    type: 'number'
                },
                {
                    text: 'Valor fixo',
                    value: 'value',
                    type: 'price'
                }
            ],
            validations: {
                required: true
            }
        },
        {
            index: 1,
            relation: 0,
            type: 'option',
            validations: {
                required: true
            }
        }
    ]
}

const FunctionsOptions = [
    {
        name: 'Indicadores',
        functions: [
            {
                signal: 'valueFibonnaci',
                name: 'Valor do fibonacci',
                params: [
                    {
                        index: 0,
                        name: 'Quantidades de velas',
                        type: 'number',
                        validations: {
                            required: true
                        }
                    }
                ]
            },
        ]
    },
    {
        name: 'Buscar dados',
        functions: [
            {
                signal: 'valueCurrent',
                name: 'Valor atual',
                params: []
            },
            {
                signal: 'averagesDays',
                name: 'Média dos últimos dias',
                params: [
                    {
                        index: 0,
                        name: 'Quantidades de dias',
                        type: 'number',
                        validations: {
                            required: true
                        }
                    }
                ]
            }
        ]
    }
]

const DataFunction = (continueOption: boolean) => {
    return {
        name: 'Adicionar dados',
        type: 'data',
        signais: [
            {
                signal: 'Funções',
                name: 'func'
            },
        ],
        params: continueOption ? [createOperation] : FunctionsOptions
    }
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
    params: [{...DataValue, ...DataFunction(false)}]
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
    params: [MathOptions, {...DataValue, ...DataFunction(false)}]
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
    params: [MathOptions, Comparison, {...DataValue, ...DataFunction(false)}]
}
const continueFunc = () => {
    const logicC = { ...Logic, continue: continueFunc };
    const CoparisonC = { ...Comparison, continue: continueFunc }
    return [logicC, CoparisonC, DataFunction(true)]
}
const continueCoparison = {
    ...Logic,
    continue: continueFunc
}
const continueLogic = {
    ...Comparison,
    continue: continueFunc
}

export const execute = [continueCoparison, continueLogic];