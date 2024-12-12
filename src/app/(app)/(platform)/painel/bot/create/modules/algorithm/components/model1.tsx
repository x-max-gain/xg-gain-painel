"use client";

type CreateBotAlgorithmModel1Type = {
    style?: {
        color?: string;
        backgroundColor?: string;
    };
    children: {
        left: any;
        right: any;
    };
    continueExec: any
}
export default function CreateBotAlgorithmModel1({ children, continueExec, style }: CreateBotAlgorithmModel1Type) {
    return <div 
        style={{ backgroundColor: style?.backgroundColor || 'white'}}
        className="text-text-primary px-4 py-4 rounded-md cursor-pointer"
    >
        <div className="grid grid-cols-11 gap-4 mb-2">
            <div className="col-span-1 flex items-center">
                <p 
                    style={{ color: style?.color || 'white'}}
                    className="font-bold"
                >Se</p>
            </div>
            <div className="col-span-4 flex">
                {children.left}
            </div>
            <div className="col-span-2 flex items-center justify-center">
                <select name="" id="" className="rounded-md cursor-pointer w-full py-2 text-center">
                    <option value="">Igual</option>
                </select>
            </div>
            <div className="col-span-4 flex">
                {children.right}
            </div>
        </div>
        <div className="grid grid-cols-11 gap-4">
            <div 
                style={{ color: style?.color || 'white'}} 
                className="col-span-1 font-bold flex items-center"
            >Faz</div>
            <div className="col-span-10">{continueExec}</div>
        </div>
    </div>
}
