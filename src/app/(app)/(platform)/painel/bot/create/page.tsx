"use client"
import { Plus } from "lucide-react";
import { useState } from "react";

export default function CreateBoot(){
 const [botSteps, setBotSteps] = useState(1);
 
  return(
      <div>
         <nav className="shadow-sm p-4 flex justify-center items-center">
        <div className="flex gap-4">
          <button onClick={() => setBotSteps(1)} className={`${botSteps == 1 ? "bg-green-500" : ""} rounded px-1 sm:px-4 py-2`}>
            Informações
          </button>
          <button onClick={() => setBotSteps(2)} className={`${botSteps == 2 ? "bg-green-500" : ""} rounded px-1 sm:px-4 py-2`}>
            Configurações
          </button>
       </div>
      </nav>

       <div className={`${botSteps == 1 ? "flex flex-col items-center justify-center bg-background-primary rounded-lg shadow-md p-6 max-w-md mx-auto mt-10" : "hidden"}`}>
        <h2 className="text-xl font-semibold mb-4">Configuração</h2>
        <div className="w-full mb-4">
          <label htmlFor="roboName" className="block text-white font-medium mb-1">Nome do Robô</label>
          <input
            type="text"
            id="roboName"
            className="w-full p-2 border border-gray-300 rounded bg-background-secondary focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
       
        <div className="w-full mb-4">
          <label htmlFor="capital" className="block text-gray-700 font-medium mb-1">Capital:</label>
          <p className="text-gray-800"></p>
          <input
            type="text"
            id="roboName"
            className="w-full p-2 border border-gray-300 rounded bg-background-secondary focus:outline-none focus:ring-2 focus:ring-green-500"
            value="R$ 5.000,00"
          />
        </div>
        <div className="w-full mb-4">
          <label htmlFor="simulador" className="block text-gray-700 font-medium mb-1">Simulador:</label>
          <select
            id="simulador"
            className="w-full p-2 border border-gray-300 rounded bg-background-secondary focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="pessimista">Pessimista (Recomendado)</option>
            <option value="otimista">Otimista</option>
          </select>
        </div>
       
      </div>

        <div className={`${botSteps == 2 ? "flex" : "hidden"} h-auto min-h-44 border p-3 border-green-500 rounded w-full bg-background-primary flex flex-col gap-3`}>

        <div className="flex align-start w-auto gap-3">
            <span className=" p-2 bg-green-500 rounded">SE</span>
            <span className=" p-2 bg-background-secondary rounded"><Plus width={20}/></span>
            <span className=" p-2 bg-green-500 rounded">
            <select className="border text-xs md:text-base bg-green-500 text-white border-green-500 rounded px-2 focus:outline-none">
                <option value="igual">IGUAL</option>
                <option value="igual">MAIOR</option>
                <option value="igual">MENOR</option>
              </select>
            </span>
            <span className="p-2 bg-background-secondary rounded"><Plus width={20}/></span>
        </div>
        <div className="flex align-start w-auto gap-3">
            <span className=" p-2 bg-green-500 rounded">SE</span>
            <span className=" p-2 bg-background-secondary rounded"><Plus width={20}/></span>
            <span className=" p-2 bg-green-500 rounded">
             
              <select className="border text-xs md:text-base bg-green-500 text-white border-green-500 rounded px-2 focus:outline-none">
                <option value="igual">IGUAL</option>
                <option value="igual">MAIOR</option>
                <option value="igual">MENOR</option>
              </select>
            </span>
            <span className="p-2 bg-background-secondary rounded"><Plus width={20}/></span>
        </div>
        
        <div className="flex align-start w-auto gap-3 0">
            <span className=" p-2 bg-green-500 rounded">FAZ</span>
            <span className=" p-2 w-44 bg-background-secondary rounded center"><Plus width={20} className="mx-auto"/></span>
          </div>
          <button className="w-44 bg-background-secondary rounded p-3"><Plus width={20} className="mx-auto"/></button>
        </div>

     
      </div>
  )
}