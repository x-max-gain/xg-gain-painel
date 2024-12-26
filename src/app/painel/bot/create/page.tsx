"use client";

import { useState } from "react";
import CreateBotInformations from "./modules/informations";
import CreateBotAlgorithm from "./modules/algorithm/index";
import { ArrowLeft, ArrowRight } from "lucide-react";

type BotCreateType = { id: number, name: string, page: any }

export default function BotCreate() {
  const menu: Array<BotCreateType> = [
    { id: 1, name: 'Informações', page: <CreateBotInformations /> },
    { id: 2, name: 'Algorítmo', page: <CreateBotAlgorithm /> },
    { id: 3, name: 'Simulações', page: <p>Simulações</p> }
  ];
  const [selectPage, setselectPage] = useState<BotCreateType>(menu[0]);

  const handlePage = (select: BotCreateType) => {
    setselectPage(select)
  }

  return (
    <div className="bg-background-deep min-h-screen">
      <nav className="bg-background-primary shadow-sm p-4 border-b border-gray-200 flex justify-center items-center">
        <div className="w-full flex justify-between">
          <div>
            <button className="px-1 sm:px-4 py-2 bg-gray-400 rounded-md flex items-center justify-center">
              <ArrowLeft className="mr-2" size={18} />
              Voltar
            </button>
          </div>
          <div>
            {menu.map((mn, index) => (
              <button
                key={index}
                className={`px-2 sm:px-4 py-2 ${selectPage.id === mn.id
                  ? "bg-background-main font-bold rounded text-white"
                  : "text-gray-500"
                  }`}
                onClick={() => handlePage(mn)}
              >
                {mn.name}
              </button>
            ))}
          </div>
          <div>
            <button onClick={() => { }} className="px-1 sm:px-4 py-2 bg-background-green rounded-md flex items-center justify-center">
              Proseguir
              <ArrowRight className="ml-2" size={18} />
            </button>
          </div>
        </div>
      </nav>

      <div>{selectPage.page}</div>
    </div>
  );
}
