import { FunctionsOptionsType } from "./components/types"

const createOperation = {
    signal: 'createOperation',
    name: 'Abrir operação',
    type: 'function',
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

export const FunctionsOptions: Array<FunctionsOptionsType> = [
    {
        _id: 'd1d121dd1111',
        name: 'Indicadores',
        type: 'category',
        functions: [
            {
                signal: 'valueFibonnaci',
                name: 'Valor do fibonacci',
                type: 'function',
                info: {
                    description: "Busca em qual posição do fibonacci o valor atual do ativo está",
                    code: {
                        body: `function valueFibonnaci(candles: number){
    return candles * 2;
}`,
                        language: "JavaScript",
                    },
                    technical: "O indicador é criado a partir da soma de tal"
                },
                params: [
                    {
                        index: 0,
                        name: 'Quantidades de velas',
                        info: {
                            description: 'Aqui você diz a quantidade de velas que você quer buscar a informação',
                        },
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
        _id: 'd1d121dd1123',
        name: 'Buscar dados',
        type: 'category',
        functions: [
            {
                signal: 'valueCurrent',
                name: 'Valor atual',
                type: 'function',
                info: {
                    description: "Busca em qual posição do fibonacci o valor atual do ativo está",
                    code: {
                        body: "(candles: number) => {return candles * 2}",
                        language: "JavaScript",
                    },
                    technical: "O indicador é criado a partir da soma de tal"
                },
                params: []
            },
            {
                signal: 'averagesDays',
                name: 'Média dos últimos dias',
                type: 'function',
                info: {
                    description: "Busca em qual posição do fibonacci o valor atual do ativo está",
                    code: {
                        body: "(candles: number) => {return candles * 2}",
                        language: "JavaScript",
                    },
                    technical: "O indicador é criado a partir da soma de tal"
                },
                params: [
                    {
                        index: 0,
                        name: 'Quantidades de dias',
                        type: 'number',
                        info: {
                            description: 'Aqui você diz a quantidade de velas que você quer buscar a informação',
                        },
                        validations: {
                            required: true
                        }
                    }
                ]
            },
            {
                signal: 'averagesDays',
                name: 'Média dos últimos dias',
                type: 'function',
                info: {
                    description: "Busca em qual posição do fibonacci o valor atual do ativo está",
                    code: {
                        body: "(candles: number) => {return candles * 2}",
                        language: "JavaScript",
                    },
                    technical: "O indicador é criado a partir da soma de tal"
                },
                params: [
                    {
                        index: 0,
                        name: 'Quantidades de dias',
                        type: 'number',
                        info: {
                            description: 'Aqui você diz a quantidade de velas que você quer buscar a informação',
                        },
                        validations: {
                            required: true
                        }
                    }
                ]
            },
            {
                signal: 'averagesDays',
                name: 'Média dos últimos dias',
                type: 'function',
                info: {
                    description: "Busca em qual posição do fibonacci o valor atual do ativo está",
                    code: {
                        body: "(candles: number) => {return candles * 2}",
                        language: "JavaScript",
                    },
                    technical: "O indicador é criado a partir da soma de tal"
                },
                params: [
                    {
                        index: 0,
                        name: 'Quantidades de dias',
                        type: 'number',
                        info: {
                            description: 'Aqui você diz a quantidade de velas que você quer buscar a informação',
                        },
                        validations: {
                            required: true
                        }
                    }
                ]
            },
            {
                signal: 'averagesDays',
                name: 'Média dos últimos dias',
                type: 'function',
                info: {
                    description: "Busca em qual posição do fibonacci o valor atual do ativo está",
                    code: {
                        body: "(candles: number) => {return candles * 2}",
                        language: "JavaScript",
                    },
                    technical: "O indicador é criado a partir da soma de tal"
                },
                params: [
                    {
                        index: 0,
                        name: 'Quantidades de dias',
                        type: 'number',
                        info: {
                            description: 'Aqui você diz a quantidade de velas que você quer buscar a informação',
                        },
                        validations: {
                            required: true
                        }
                    }
                ]
            },
            {
                signal: 'averagesDays',
                name: 'Média dos últimos dias',
                type: 'function',
                info: {
                    description: "Busca em qual posição do fibonacci o valor atual do ativo está",
                    code: {
                        body: "(candles: number) => {return candles * 2}",
                        language: "JavaScript",
                    },
                    technical: "O indicador é criado a partir da soma de tal"
                },
                params: [
                    {
                        index: 0,
                        name: 'Quantidades de dias',
                        type: 'number',
                        info: {
                            description: 'Aqui você diz a quantidade de velas que você quer buscar a informação',
                        },
                        validations: {
                            required: true
                        }
                    }
                ]
            },
            {
                signal: 'averagesDays',
                name: 'Média dos últimos dias',
                type: 'function',
                info: {
                    description: "Busca em qual posição do fibonacci o valor atual do ativo está",
                    code: {
                        body: "(candles: number) => {return candles * 2}",
                        language: "JavaScript",
                    },
                    technical: "O indicador é criado a partir da soma de tal"
                },
                params: [
                    {
                        index: 0,
                        name: 'Quantidades de dias',
                        type: 'number',
                        info: {
                            description: 'Aqui você diz a quantidade de velas que você quer buscar a informação',
                        },
                        validations: {
                            required: true
                        }
                    }
                ]
            },
            {
                signal: 'averagesDays',
                name: 'Média dos últimos dias',
                type: 'function',
                info: {
                    description: "Busca em qual posição do fibonacci o valor atual do ativo está",
                    code: {
                        body: "(candles: number) => {return candles * 2}",
                        language: "JavaScript",
                    },
                    technical: "O indicador é criado a partir da soma de tal"
                },
                params: [
                    {
                        index: 0,
                        name: 'Quantidades de dias',
                        type: 'number',
                        info: {
                            description: 'Aqui você diz a quantidade de velas que você quer buscar a informação',
                        },
                        validations: {
                            required: true
                        }
                    }
                ]
            },
            {
                signal: 'averagesDays',
                name: 'Média dos últimos dias',
                type: 'function',
                info: {
                    description: "Busca em qual posição do fibonacci o valor atual do ativo está",
                    code: {
                        body: "(candles: number) => {return candles * 2}",
                        language: "JavaScript",
                    },
                    technical: "O indicador é criado a partir da soma de tal"
                },
                params: [
                    {
                        index: 0,
                        name: 'Quantidades de dias',
                        type: 'number',
                        info: {
                            description: 'Aqui você diz a quantidade de velas que você quer buscar a informação',
                        },
                        validations: {
                            required: true
                        }
                    }
                ]
            }
        ]
    }
]

export const DataFunction = (continueOption: boolean) => {
    return {
        name: 'Buscar dados',
        type: 'func',
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
            signal: 'percent',
            name: 'Porcentagem'
        },
        {
            signal: 'number',
            name: 'Número'
        },
        {
            signal: 'float',
            name: 'Decimal'
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
    params: [MathOptions, DataValue, DataFunction(false)]
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
    params: [MathOptions, Comparison, DataValue, DataFunction(false)]
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