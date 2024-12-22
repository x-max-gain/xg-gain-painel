"use client";

import { useState } from "react";
import CreateBotAlgorithmSelect from "./select";
import CreateBotAlgorithmModelFunc from "./model-func";

type CreateBotAlgorithmModelMainType = {
    data: any
}
export default function CreateBotAlgorithmModelMain(
    { data }: CreateBotAlgorithmModelMainType
) {
    const [selectLeft, setSelectLeft] = useState<any>(null);
    const [selectRight, setSelectRight] = useState<any>(null);
    const [selectContinue, setSelectContinue] = useState<any>(null);
    const continueObj = data?.continue ? data.continue() : null;

    const selectOptionLeft = (select: any) => {
        console.log(select);
        setSelectLeft(select)
    }
    const selectOptionRight = (select: any) => {
        setSelectRight(select)
    }
    const selectOptionContinue = (select: any) => {
        setSelectContinue(select)
    }

    return <div 
        style={{ backgroundColor: data.style.backgroundColor || 'white'}}
        className={`text-text-primary p-4 rounded-md cursor-pointer`}
    >
        <div className="flex items-start mb-4">
            {
                continueObj && <div className="col-span-1 flex items-center">
                    <p 
                        style={{ color: data.style.color || 'white'}}
                        className="font-bold w-10"
                    >Se</p>
                </div>
            }
            <div className="col-span-4 flex">
                {
                    selectLeft && selectLeft.type === "func" && (
                        <CreateBotAlgorithmModelFunc startOpen={true} data={selectLeft.params} />
                    )
                }
                {
                    selectLeft && selectLeft.type === "data" && (
                        <CreateBotAlgorithmModelFunc data={selectLeft} />
                    )
                }
                {
                    selectLeft && selectLeft.type !== "func" && selectLeft.type !== "data" && (
                        <CreateBotAlgorithmModelMain data={selectLeft} />
                    )
                }
                {
                    !selectLeft && (
                        <CreateBotAlgorithmSelect title="Selecione um opção" options={data.params} setElementSelect={selectOptionLeft} />
                    )
                }
            </div>
            <div className="col-span-2 flex items-center justify-center mx-2">
                <select name="" id="" className="rounded-md cursor-pointer w-full py-2 px-4 text-center min-w-36">
                    {
                        data.signals.map((item: any, index: number) => (
                            <option value={item.type} key={index}>{item.name}</option>
                        ))
                    }
                </select>
            </div>
            <div className="col-span-4 flex">
                {
                    selectRight && selectRight.type === "func" && (
                        <CreateBotAlgorithmModelFunc data={selectRight.params} startOpen={true}  />
                    )
                }
                {
                    selectRight && selectRight.type === "data" && (
                        <CreateBotAlgorithmModelFunc data={selectRight} />
                    )
                }
                {
                   selectRight && selectRight.type !!== "func" && selectRight.type !== "data" &&  (
                        <CreateBotAlgorithmModelMain data={selectRight} />
                    ) 
                }
                {
                    !selectRight && (
                        <CreateBotAlgorithmSelect title="Selecione um opção" options={data.params} setElementSelect={selectOptionRight} />
                    )
                }
            </div>
        </div>
        {
            continueObj && <div className="flex">
                <div 
                    style={{ color: data.style.color}} 
                    className="w-10 col-span-1 font-bold flex items-center"
                >Faz</div>
                <div className="col-span-10 w-full">
                    {
                        selectContinue ? (
                            <CreateBotAlgorithmModelMain data={selectContinue} />
                        ) : (
                            <CreateBotAlgorithmSelect title="Selecione um opção" options={continueObj} setElementSelect={selectOptionContinue} />
                        )
                    }
                </div>
            </div>
        }
    </div>
}
