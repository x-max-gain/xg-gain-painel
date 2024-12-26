/* eslint-disable react/no-children-prop */
"use client";
import { useState } from "react";
import "./algorithm.css";
import CreateBotAlgorithmModelMain from "./components/model-main";

// MODULES
import CreateBotAlgorithmSelect from "./components/select";
import { execute } from "./data";
import { InformationsSelectedActiveType } from "./type";
import { generateKeyRandom } from "@/utils/generate";

export default function CreateBotAlgorithm() {
    const [informationsActiveSelected] = useState<InformationsSelectedActiveType>({
        selectedActive: {
            coin: {
                location: 'pt-br',
                signal: 'R$'
            }
        }
    })
    const [conditions, setConditions] = useState<Array<any>>([]);

    const setElementSelectMain = (element: any) => {
        const data = [...conditions, { ...element, id: generateKeyRandom(), options: { left: null, right: null, continue: null } }]
        console.log(data)
        setConditions(data)
    }
    const setElementSelectParent = (element: any, location: string, parentId: string) => {
        const data = conditions.map(item => item.id === parentId ? ({
            ...item,
            options: {
                ...item.options,
                [location]: element
            }
        }) : item)
        console.log(data)
        setConditions(data)
    }
    return (
        <div className="w-full mt-4">
            <div className="canva-box flex w-full rounded-md">
                <div className="canva py-2 px-4">
                    {
                        conditions.map((item: any, index) => (
                            <div key={index} className="flex py-2">
                                <CreateBotAlgorithmModelMain setElementSelect={setElementSelectParent} informationsActiveSelected={informationsActiveSelected} data={item} />
                            </div>
                        ))
                    }

                    <div className="flex py-2">
                        <CreateBotAlgorithmSelect title="Adicionar condição" setElementSelect={setElementSelectMain} options={execute} />
                    </div>
                </div>
            </div>
        </div>
    );
}
