export type FunctionsOptionsType = {
    _id: string;
    name: string;
    type: 'category';
    functions: Array<ModelFunctionSelectType>
}
export type ModelFunctionSelectType = {
    signal: string;
    name: string;
    type: 'function';
    info: {
        description: string;
        code: {
            body: string;
            language: string;
        },
        technical: string;
    },
    params: Array<{
        index: number;
        name: string;
        type: string;
        info: {
            description: string;
        };
        validations: {
            required: boolean;
        }
    }>
}
export type ModelFunctionSelectEndType = {
    signal: string;
    params: Array<any>
}