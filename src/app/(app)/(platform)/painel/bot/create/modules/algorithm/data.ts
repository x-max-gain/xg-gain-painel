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
        name: 'Chamar um função',
        type: 'data',
        style: {
            backgroundColor: "#fea304",
            color: "#FFF"
        },
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
    style: {
        backgroundColor: "#909320",
        color: "#FFF"
    },
    signals: [
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
    style: {
        backgroundColor: "#125a44",
        color: "#FFF"
    },
    signals: [
        {
            signal: '+',
            name: 'Multiplica'
        },
        {
            signal: '-',
            name: 'Subtrai'
        },
        {
            signal: '*',
            name: 'Multiplica'
        },
        {
            signal: '/',
            name: 'Divide'
        },
        {
            signal: '%',
            name: 'Resto da divisão'
        }
    ],
    params: [{...DataValue, ...DataFunction(false)}]
}

const Comparison = {
    style: {
        backgroundColor: "#37192c",
        color: "#FFF"
    },
    name: 'Criar comparação',
    type: 'comparison',
    signals: [
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
    style: {
        backgroundColor: "#220315",
        color: "#FFF"
    },
    name: 'Criar lógica',
    type: 'logic',
    signals: [
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
export const continueCoparison = {
    ...Logic,
    continue: continueFunc
}
export const continueLogic = {
    ...Comparison,
    continue: continueFunc
}

export const execute = [continueCoparison, continueLogic];