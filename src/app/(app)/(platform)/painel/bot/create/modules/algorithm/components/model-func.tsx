"use client";
import { useRef, useState } from "react";
import "./select.css";

// ICONS
import { Plus, X, ChevronDown, Code, Info } from "lucide-react";
import BotInfo from "./info";
type CreateBotAlgorithmModelFuncType = {
    data: Array<any>;
    setElementSelect: (element: any) => void
}

export default function CreateBotAlgorithmModelFunc(
    { data, setElementSelect }: CreateBotAlgorithmModelFuncType
) {
    const [selectInfo, setSelectInfo] = useState("");
    const [open, setOpen] = useState<boolean>(false);
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

    return <div className="select-bot">
        <div onClick={() => setOpen(!open)} className="min-w-80 bg-background-secondary text-text-primary px-4 py-2 rounded-md flex items-center cursor-pointer">
            { !open ? <Plus className="mr-4 size-4" /> : <X className="mr-4 size-4" /> }
            <p>Selecione uma função</p>
        </div>
        
        {
            open && <div className="max-h-96 overflow-y-auto select-bot-list bg-background-primary border border-gray-500 w-full rounded-md">
            <ul>
                {
                    data.map((item, index) => (
                        <>
                            {
                                item.type == "function" ? (
                                    <li 
                                        key={index}
                                        onClick={() => {setElementSelect(item); setOpen(false);}}
                                        className="bg-background-secondary hover:bg-background-deep border border-gray-200 text-text-primary px-4 py-2 cursor-pointer rounded-md"
                                    >{item.name}</li>
                                ) : (
                                    <li key={index}>
                                        <div 
                                            onClick={(event) => clickCategory(event, item._id)}
                                            className="flex justify-between items-center bg-background-secondaryDark hover:bg-background-secondaryDarkBig border border-gray-200 text-text-primary px-4 py-2 cursor-pointer rounded-md">
                                            <p>{item.name}</p>
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
                                                            onClick={() => {setElementSelect(item); setOpen(false);}} 
                                                            className="w-full flex items-center px-4 py-2 hover:bg-background-secondary"
                                                        >
                                                            <Code className="mr-2 size-4 text-text-primary2" />{func.name}
                                                        </div>
                                                        <div 
                                                            onClick={() => setSelectInfo(`${index}${index2}`)}
                                                            className="relative border border-background-secondaryDark px-2 py-2 hover:bg-background-secondary"
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
