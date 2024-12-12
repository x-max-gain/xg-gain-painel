"use client";

type CreateBotAlgorithmModel1Type = {
    config?: {
        text?: boolean;
    };
    style?: {
        color?: string;
        backgroundColor?: string;
    };
    children: {
        left: any;
        right: any;
    };
    options: Array<{signal: string, name: string}>;
    continueExec?: any
}
export default function CreateBotAlgorithmModel1(
    { options, children, continueExec, style, config = { text: true } }: CreateBotAlgorithmModel1Type
) {
    console.log(options);
    return <div 
        style={{ backgroundColor: style?.backgroundColor || 'white'}}
        className={`text-text-primary ${config?.text ? "p-4" : "py-2 px-3"} rounded-md cursor-pointer`}
    >
        <div className={`flex items-center ${config?.text ? "mb-4" : ""} `}>
            {
                config?.text && <div className="col-span-1 flex items-center">
                    <p 
                        style={{ color: style?.color || 'white'}}
                        className="font-bold w-10"
                    >Se</p>
                </div>
            }
            <div className="col-span-4 flex">
                {children.left}
            </div>
            <div className="col-span-2 flex items-center justify-center mx-2">
                <select name="" id="" className="rounded-md cursor-pointer w-full py-2 px-4 text-center">
                    {
                        options.map((item, index) => (
                            <option value={item.signal} key={index}>{item.name}</option>
                        ))
                    }
                </select>
            </div>
            <div className="col-span-4 flex">
                {children.right}
            </div>
        </div>
        {
            continueExec && config?.text && <div className="flex">
                <div 
                    style={{ color: style?.color || 'white'}} 
                    className="w-10 col-span-1 font-bold flex items-center"
                >Faz</div>
                <div className="col-span-10 w-full">{continueExec}</div>
            </div>
        }
    </div>
}
