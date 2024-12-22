"use client";
import { ChangeEvent, ChangeEventHandler, FormEvent, useState } from "react";
import "./select.css";

// ICONS
import { Plus, X, ChevronDown, Code, Info } from "lucide-react";
import BotInfo from "./info";
import { FunctionsOptionsType, ModelFunctionSelectInput, ModelFunctionSelectType } from "./types";
type CreateBotAlgorithmModelFuncType = {
    data: Array<FunctionsOptionsType | ModelFunctionSelectType>;
    startOpen?: boolean
}

export default function CreateBotAlgorithmModelFunc(
    { data, startOpen = false }: CreateBotAlgorithmModelFuncType,
) {
    const [dataFunction, setDataFunction] = useState<any>({})
    const [selectOption, setSelecteOption] = useState<ModelFunctionSelectType>()
    const [selectInfo, setSelectInfo] = useState("");
    const [open, setOpen] = useState<boolean>(startOpen);
    const [opensCategories, setOpensCategories] = useState<Array<string>>([]);

    const clickCategory = (event: any, _id: string) => {
        if (event.target === event.currentTarget) {
            const exist = opensCategories.includes(_id);

            if(exist) {
                setOpensCategories(opensCategories.filter(item => item !== _id))
            } else {
                setOpensCategories([...opensCategories, _id])
            }
        }
    }

    const selectOptionFunction = (item: ModelFunctionSelectType) => {
        setSelecteOption(item)
    }

    const maskNumber = (name: string, value: string) => {
        return value;
    }

    const mask = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>, type: string) => {
        const name = event.target.name;
        const value = event.target.value;

        if(type === "number"){
            const response = maskNumber(name, value);
            console.log(response)
            setDataFunction({
                ...dataFunction,
                [name]: response
            })
        }
        if(type === "select"){
            setDataFunction({
                ...dataFunction,
                [name]: value
            })
        }
        console.log(dataFunction)
    }

    return <div className="select-bot">
        {
            !selectOption && (
                <div onClick={() => setOpen(!open)} className="min-w-80 bg-background-secondary text-text-primary px-4 py-2 rounded-md flex items-center cursor-pointer">
                    { !open ? <Plus className="mr-4 size-4" /> : <X className="mr-4 size-4" /> }
                    <p>Selecione o dado</p>
                </div>
            )
        }
        {
            selectOption && (
                <div className="min-w-80 bg-background-secondary text-text-primary px-4 py-2 rounded-md flex flex-col cursor-pointer">
                    <h2 className="font-bold">{selectOption.title}</h2>
                    <ul>
                        {
                            selectOption.params.map((param, index) => (
                                <li key={index} className="flex items-center">
                                    <p className="w-full">{param.title}: </p>
                                    {
                                        param.input.type === "number" && (
                                            <input 
                                                name={param.name}
                                                onChange={(event: ChangeEvent<HTMLInputElement>) => mask(event, param.input.type)}
                                                value={dataFunction[param.name]}
                                                type="text" 
                                                className="ml-2 p-2 bg-background-primary rounded focus:outline-gray-200"
                                            />
                                        )
                                    }
                                    {
                                        param.input.type === "select" && (
                                            <select 
                                                name={param.name} 
                                                onChange={(event: ChangeEvent<HTMLSelectElement>) => mask(event, param.input.type)}
                                                value={dataFunction[param.name]}
                                                className="ml-2 p-2 bg-background-primary rounded focus:outline-gray-200">
                                                {
                                                    param.input.options.map(item => (
                                                        <option value={item.value}>{item.name}</option>
                                                    ))
                                                }
                                            </select>
                                        )
                                    }
                                    <div 
                                        onClick={() => setSelectInfo(`${index}`)}
                                        className="border border-background-secondaryDark px-2 py-2 hover:bg-background-secondary"
                                    >
                                        <Info className="size-6 text-text-secondary" />
                                        <BotInfo setOpen={setSelectInfo} info={selectOption.info} open={selectInfo === `${index}`}  />
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                    <div className="flex justify-end mt-2">
                        <button className="bg-background-main font-bold rounded text-white py-2 w-full">Salvar</button>
                    </div>
                </div>
            )
        }
        {
            open && <div className="z-20 max-h-96 overflow-y-auto overflow-visible select-bot-list bg-background-primary border border-gray-500 w-full rounded-md">
            <ul>
                {
                    data.map((item, index) => (
                        <>
                            {
                                item.type == "function" ? (
                                    <li 
                                        key={index}
                                        onClick={() => {selectOptionFunction(item); setOpen(false);}}
                                        className="bg-background-secondary hover:bg-background-deep border border-gray-200 text-text-primary px-4 py-2 cursor-pointer rounded-md"
                                    >{item.title}</li>
                                ) : (
                                    <li key={index}>
                                        <div 
                                            onClick={(event) => clickCategory(event, item._id)}
                                            className="flex justify-between items-center bg-background-secondaryDark hover:bg-background-secondaryDarkBig border border-gray-200 text-text-primary px-4 py-2 cursor-pointer rounded-md">
                                            <p onClick={(event) => clickCategory(event, item._id)}>{item.title}</p>
                                            <ChevronDown onClick={(event) => clickCategory(event, item._id)} className="size-6 text-text-primary2" />
                                        </div>
                                        {
                                            opensCategories.includes(item._id) && <ul>
                                            {
                                                item.functions.map((func: any, index2: number) => (
                                                    <li 
                                                        key={`${index}${index2}`}
                                                        className="flex items-center justify-between border border-gray-200 text-text-primary cursor-pointer rounded-md"
                                                    >
                                                        <div 
                                                            onClick={() => {selectOptionFunction(item.functions[index2]); setOpen(false);}} 
                                                            className="w-full flex items-center px-4 py-2 hover:bg-background-secondary"
                                                        >
                                                            <Code className="mr-2 size-4 text-text-primary2" />{func.title}
                                                        </div>
                                                        <div 
                                                            onClick={() => setSelectInfo(`${index}${index2}`)}
                                                            className="border border-background-secondaryDark px-2 py-2 hover:bg-background-secondary"
                                                        >
                                                            <Info className="size-6 text-text-secondary" />
                                                            <BotInfo setOpen={setSelectInfo} info={func.info} open={selectInfo === `${index}${index2}`}  />
                                                        </div>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                        }
                                    </li>
                                )
                            }
                        </>
                    ))
                }
            </ul>
            </div>
        }
    </div>
}
