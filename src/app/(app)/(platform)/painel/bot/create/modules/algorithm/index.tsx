/* eslint-disable react/no-children-prop */
"use client";
import "./algorithm.css";
import CreateBotAlgorithmModel1 from "./components/model1";

// MODULES
import CreateBotAlgorithmSelect from "./components/select";
import { execute } from "./data";

export default function CreateBotAlgorithm() {
    const optionsStart = execute.map(item => ({ label: item.name, value: item.type }));

    return (
        <div className="w-full mt-4">
            <div className="flex w-full">
                <div className="canva">
                    <div className="flex p-4">
                        <CreateBotAlgorithmSelect options={optionsStart} />
                    </div>
                    <div className="flex p-4">
                        <CreateBotAlgorithmModel1 
                            style={{
                                color: "#ffffff",
                                backgroundColor: "blueviolet"
                            }}
                            children={{ 
                                left: <CreateBotAlgorithmSelect options={optionsStart} />,
                                right: <CreateBotAlgorithmSelect options={optionsStart} />,
                            }}
                            continueExec={<CreateBotAlgorithmSelect options={optionsStart} />} 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
