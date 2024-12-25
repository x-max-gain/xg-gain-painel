"use client";
import { ChangeEvent, useEffect, useState } from "react";
import "./select.css";

// ICONS
import { ModelDataSelectType } from "./types";
type CreateBotAlgorithmModelFuncType = {
    data: ModelDataSelectType;
}

export default function CreateBotAlgorithmModelData(
    { data }: CreateBotAlgorithmModelFuncType,
) {
    const [dataInput, setDataInput] = useState<any>();
    const [dataInputType, setDataInputType] = useState<string>();

    useEffect(() => {
        setDataInputType(data.signals[0].signal)
    }, [])

    const maskNumber = (value: string) => {
        let input = value.replace(/[^0-9.]/g, '');

        // Remove pontos extras, mantendo apenas o primeiro
        const parts = input.split('.');
        if (parts.length > 2) {
            input = parts[0] + '.' + parts.slice(1).join('');
        }

        // Remove zeros à esquerda, mas mantém "0." válido
        if (input.startsWith('0') && input[1] !== '.' && input.length > 1) {
            input = parseFloat(input).toString();
        }

        return input;
    }

    const mask = (value: any) => {
        if (dataInputType === "number") {
            const response = maskNumber(value);
            console.log(response)
            setDataInput(response)
        }
        if (dataInputType === "boolean") {
            setDataInput(value)
        }
    }

    const selectFormatMask = (event: ChangeEvent<HTMLSelectElement>) => {
        if (event?.target?.value) {
            setDataInputType(event.target.value)
        }
    }

    return <div className="select-bot relative">
        {
            data && (
                <div className="min-w-80 bg-background-secondary text-text-primary px-4 py-2 rounded-md flex flex-col cursor-pointer">
                    <h2 className="font-bold pb-2">{data.name}</h2>
                    <div>
                        <div className="flex items-center">
                            <input
                                onChange={(e: ChangeEvent<HTMLInputElement>) => mask(e.target.value)}
                                value={dataInput}
                                type="text"
                                className="p-2 bg-background-primary rounded focus:outline-gray-200"
                            />
                            <select
                                onChange={selectFormatMask}
                                className="ml-2 p-2 bg-background-primary rounded focus:outline-gray-200">
                                {
                                    data.signals.map((signal, i) => (
                                        <option key={i} value={signal.signal}>{signal.name}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                    <div className="flex justify-end mt-2">
                        <button className="bg-background-main font-bold rounded text-white py-2 w-full">Salvar</button>
                    </div>
                </div>
            )
        }
    </div>
}
