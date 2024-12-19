export const SignalObjectLogicType: Array<SignalLogicType> = ['&&', '||'];
export type SignalLogicType = '&&' | '||';
export type LogicParamType = Array<MathType | ComparisonType | DataType >;
export type LogicType = {
    type: 'logic',
    signal: SignalLogicType,
    params: LogicParamType,
}

export type LogicContinue = Array<DataFunctionType | LogicMainType | ComparisonMainType>;
export interface LogicMainType extends LogicType {
    continue: LogicContinue
}
export const SignalObjectComparisonType = ['===', '!==', '>', '<', '>=', '<='];
export type SignalComparisonType = '===' | '!==' | '>' | '<' | '>=' | '<=';
export type ComparisonParamsType = Array<MathType | DataType>;
export type ComparisonType = {
    type: 'comparison',
    signal: SignalComparisonType,
    params: ComparisonParamsType,
}

export type ComparisonContinue = Array<DataFunctionType | LogicMainType | ComparisonMainType>;
export interface ComparisonMainType extends ComparisonType {
    continue:  ComparisonContinue
}

export const SignalObjectMathType = ['+', '-', '*', '/', '%'];
export type SignalMathType = '+' | '-' | '*' | '/' | '%';
export type MathType = {
    type: 'math',
    signal: SignalMathType,
    params: Array<DataType>,
}

export interface MathMainType extends MathType {
    continue: Array<DataFunctionType | LogicType | ComparisonType> 
}

export type DataType = DataFunctionType | DataValuesType;

export const SignalObjectDataValuesType = ['percent', 'number', 'boolean', 'float'];
export type SignalDataValuesType = 'percent' | 'number' | 'boolean' | 'float';
export type DataValuesType = {
    type: 'data',
    signal: SignalDataValuesType,
    value: string,
}
export const SignalObjectDataFunctionType = ['func'];
export type SignalDataFunctionType = 'func';
export type DataFunctionType = {
    type: 'data',
    signal: SignalDataFunctionType,
    value: string,
    params: Array<any>
}
export type DataMainType = DataValuesMainType | DataFunctionMianType;
export interface DataValuesMainType extends DataValuesType {
    continue: Array<DataFunctionType | LogicType | ComparisonType> 
}
export interface DataFunctionMianType extends DataValuesType {
    continue: Array<DataFunctionType | LogicType | ComparisonType> 
}
export type BotType = LogicMainType | ComparisonMainType;
