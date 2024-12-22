export type FunctionsOptionsType = {
    _id: string;
    title: string;
    type: 'category';
    functions: Array<ModelFunctionSelectType>
}
type ModelFunctionSelectInputNumber = {
    type: 'number',
}
type ModelFunctionSelectInputSelect = {
    type: 'select',
    options: Array<{
        name: string,
        type: 'string' | 'boolean' | 'number'
        value: any
    }>
}
export type ModelFunctionSelectInput = ModelFunctionSelectInputNumber | ModelFunctionSelectInputSelect;
export type ModelFunctionSelectType = {
    signal: string;
    title: string;
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
        title: string;
        input: ModelFunctionSelectInput;
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