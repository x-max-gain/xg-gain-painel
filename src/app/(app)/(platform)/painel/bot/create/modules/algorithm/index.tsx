/* eslint-disable react/no-children-prop */
"use client";
import { useState } from "react";
import "./algorithm.css";
import CreateBotAlgorithmModel1 from "./components/model1";

// MODULES
import CreateBotAlgorithmSelect from "./components/select";
import { execute } from "./data";

export default function CreateBotAlgorithm() {
    const [conditions, setConditions] = useState<typeof execute>([]);

    const optionsStart = execute.map(item => ({ label: item.name, value: item.type }));

    const setElementSelect = (element: any) => {
        setConditions([
            ...conditions,
            element
        ])
    }
    return (
        <div className="w-full mt-4">
            <div className="flex w-full">
                <div className="canva">
                    {
                        conditions.map((item: any, index) => (
                            <div key={index} className="flex p-4">
                                <CreateBotAlgorithmModel1 
                                    options={item.signais}
                                    style={{
                                        backgroundColor: item.type === "logic" ? 'blueviolet' : "#ff00d4",
                                        color: '#fff'
                                    }}
                                    children={{
                                        left: <CreateBotAlgorithmSelect setElementSelect={setElementSelect} options={optionsStart} />,
                                        right: <CreateBotAlgorithmSelect setElementSelect={setElementSelect} options={optionsStart} />
                                    }}
                                    continueExec={<CreateBotAlgorithmSelect setElementSelect={setElementSelect} options={optionsStart} />}
                                />
                            </div>
                        ))
                    }

                    <div className="flex p-4">
                        <CreateBotAlgorithmSelect setElementSelect={setElementSelect} options={optionsStart} />
                    </div>
                </div>
            </div>
        </div>
    );
}
