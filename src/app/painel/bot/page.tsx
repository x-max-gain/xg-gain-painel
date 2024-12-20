"use client";

import { Pause, Plus, SidebarClose } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Bot() {
  const [bots, setBots] = useState<Array<any>>();

  useEffect(() => {
    setBots([
      { name: 'Primeiro bot' },
      { name: 'Primeiro bot' },
      { name: 'Primeiro bot' },
      { name: 'Primeiro bot' },
      { name: 'Primeiro bot' },
      { name: 'Primeiro bot' },
      { name: 'Primeiro bot' },
      { name: 'Primeiro bot' }
    ])
  }, [])

  return (
    <div className="w-full min-h-screen bg-background-primary">
      <nav className="shadow p-4 flex justify-center items-center">
        <div className="flex gap-4 text-gray-500">
          <button className="px-1 sm:px-4 py-2">Execultando</button>
          <button className="px-1 sm:px-4 py-2">Parados</button>
          <button className="px-1 sm:px-4 py-2">Arquivados</button>
        </div>
      </nav>

      <div className="flex flex-col p-4">
        <div className="flex justify-end pb-4">
          <Link
            href="/painel/bot/create"
            className="flex bg-background-main text-white px-4 py-2 rounded hover:bg-background-main"
          >
            <p>Criar bot</p>
            <Plus className="ml-3" />
          </Link>
        </div>

        <div className="w-full grid grid-cols-4 gap-4">
          {bots?.map((item, index) => <div 
            key={index} 
            className="bg-background-secondary border border-gray-200 shadow rounded"
            >
              <Link href="/painel/bot/22">
                <div className="p-4">
                  <div className="flex justify-between items-center">
                    <h2 className="text-green-500 font-bold">#3945605</h2>
                    <p className="text-gray-500">Pessimista</p>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-600">{item.name}</h3>
                  <p className="text-gray-400">Fibonacci</p>

                  <div className="h-32 bg-gray-200 mt-4 rounded flex items-center justify-center">
                    <p className="text-gray-500">[Gráfico Aqui]</p>
                  </div>

                  <div className="flex justify-between mt-4">
                    <div>
                      <p className="text-gray-500">2</p>
                      <p className="text-gray-700 font-semibold">WINZ24</p>
                      <p className="text-green-600">R$134,00</p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-400">240,00</p>
                      <p className="text-gray-500">Venda</p>
                    </div>
                  </div>

                  <div className="flex justify-between mt-4">
                    <p className="text-green-600 text-lg font-semibold">
                      R$260,50
                    </p>
                    <p className="text-red-600 text-lg font-semibold">
                      R$-49,00
                    </p>
                  </div>
                </div>
              </Link>

              <div className="mt-4 w-full bg-gray-200	 p-2 flex items-center justify-between">
                <button className="text-gray-500 font-bold flex items-center underline">
                  VER MAIS
                </button>
                <button className="flex items-center">
                  <span className="text-green-500 mr-2 font-bold">
                    Executando
                  </span>
                  <span className="p-1 border border-green-500 hover:bg-green-500">
                    <Pause width={20} height={20} />
                  </span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
