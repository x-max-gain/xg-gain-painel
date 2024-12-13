/* eslint-disable react/no-children-prop */
"use client";
import { useState } from "react";
import "./algorithm.css";
import CreateBotAlgorithmModel1 from "./components/model1";

// MODULES
import CreateBotAlgorithmSelect from "./components/select";
import { execute } from "./data";

export default function CreateBotAlgorithm() {
    const [conditions, setConditions] = useState<Array<any>>([]);

    const setElementSelect = (element: any) => {
        console.log(element);
        setConditions([
            ...conditions,
            {
                ...element,
                options: [],
            }
        ])
    }
    return (
        <div className="w-full mt-4">
            <div className="canva-box flex w-full rounded-md">
                <div className="canva py-2 px-4">
                    {
                        conditions.map((item: any, index) => (
                            <div key={index} className="flex py-2">
                                <CreateBotAlgorithmModel1 data={item} />
                            </div>
                        ))
                    }

                    <div className="flex py-2">
                        <CreateBotAlgorithmSelect title="Adicionar condição" setElementSelect={setElementSelect} options={execute} />
                    </div>
                </div>
            </div>
        </div>
    );
}
