"use client";

import { useState } from "react";
import CreateBotInformations from "./modules/informations";
import CreateBotAlgorithm from "./modules/algorithm/index";
import { ArrowLeft, ArrowRight } from "lucide-react";
import CreateBotSimulations from "./modules/simulations";

export default function BotCreate() {
  const [conditions, setConditions] = useState<Array<any>>([]);
  const [page, setPage] = useState('informations')

  const submitBotAlgorithm = () => {
    console.log('save object', conditions)
  }

  // Mudar página
  const handlePage = (name: string) => {
    if (page !== name) {
      setPage(name)
    }
  }
  const nextPage = () => {
    if (page === "algorithm") {
      submitBotAlgorithm();
      setPage('simulations')
    }
  }
  const backPage = () => {
    if (page === "algorithm") {
      submitBotAlgorithm();
      setPage('informations')
    }
  }

  return (
    <div className="bg-background-deep min-h-screen">
      <nav className="bg-background-primary shadow-sm p-4 border-b border-gray-200 flex justify-center items-center">
        <div className="w-full flex justify-between">
          <div>
            <button onClick={backPage} className="px-1 sm:px-4 py-2 bg-gray-400 rounded-md flex items-center justify-center">
              <ArrowLeft className="mr-2" size={18} />
              Salvar e Voltar
            </button>
          </div>
          <div>
            <button
              onClick={() => handlePage('informations')}
              className={`px-2 sm:px-4 py-2 ${page === "informations" ? "bg-background-main font-bold rounded text-white" : "text-gray-500"}`}>
              Informações
            </button>
            <button
              onClick={() => handlePage('algorithm')}
              className={`px-2 sm:px-4 py-2 ${page === "algorithm" ? "bg-background-main font-bold rounded text-white" : "text-gray-500"}`}>
              Algorítmo
            </button>
            <button
              onClick={() => handlePage('simulations')}
              className={`px-2 sm:px-4 py-2 ${page === "simulations" ? "bg-background-main font-bold rounded text-white" : "text-gray-500"}`}>
              Simulações
            </button>
          </div>
          <div>
            <button onClick={nextPage} className="px-1 sm:px-4 py-2 bg-background-green rounded-md flex items-center justify-center">
              Salvar e Proseguir
              <ArrowRight className="ml-2" size={18} />
            </button>
          </div>
        </div>
      </nav>

      <div>
        {page === "informations" && <CreateBotInformations />}
        {page === "algorithm" && <CreateBotAlgorithm setConditionsReturn={setConditions} />}
        {page === "simulations" && <CreateBotSimulations />}
      </div>
    </div>
  );
}
