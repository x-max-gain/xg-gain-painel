export type ModelFunctionSelectType = {
    signal: string;
    name: string;
    type: string;
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
        description: string;
        validations: {
            required: boolean;
        }
    }>
}
export type ModelFunctionSelectEndType = {
    signal: string;
    params: Array<any>
}