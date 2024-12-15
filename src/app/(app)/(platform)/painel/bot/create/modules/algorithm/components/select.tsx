"use client";
import { useState } from "react";
import "./select.css";

// ICONS
import { Code, Plus, X, Info } from "lucide-react";

type CreateBotAlgorithmSelectType = {
    title: string;
    options: Array<any>,
    setElementSelect: (element: any) => void
}
export default function CreateBotAlgorithmSelect({ title, options, setElementSelect }: CreateBotAlgorithmSelectType) {
    const [open, setOpen] = useState<boolean>(false);

    return <div className="select-bot">
        <div onClick={() => setOpen(!open)} className="min-w-64 bg-background-secondary text-text-primary px-4 py-2 rounded-md flex items-center cursor-pointer">
        { !open ? <Plus className="mr-4 size-4" /> : <X className="mr-4 size-4" /> }
            <p>{title}</p>
        </div>
        
        {
            open && <div className="select-bot-list bg-background-primary border border-gray-500 w-full rounded-md">
            <ul>
                {
                    options.map((item, index) => (
                        <li 
                            key={index}
                            onClick={() => {setElementSelect(item); setOpen(false);}}
                            className="flex items-center justify-between bg-background-secondary hover:bg-background-deep border border-gray-200 text-text-primary px-4 py-2 cursor-pointer rounded-md"
                        >
                            <div>
                                <Code className="mr-2 size-4 text-text-primary2" /> {item.name}
                            </div>
                            <div>
                                <Info className="mr-2 size-4 text-text-primary2" />
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
        }
    </div>
}
