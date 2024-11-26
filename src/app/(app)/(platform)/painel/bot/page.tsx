'use client'

import { Pause, Plus, SidebarClose } from "lucide-react";
import { useState } from "react";

export default function Bot() {
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const [modalStage, setModalStage] = useState(1);

  return (
    <div className="w-full min-h-screen bg-background-primary">
      
      <nav className="border-b border-green-500 shadow-sm p-4 flex justify-center items-center">
      <div className="flex gap-1">
          <button
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            style={{
              clipPath: "polygon(0% 0%, 100% 0%, 90% 1590%, 10% 100%)",
              transition: "background-color 0.3s",
            }}
          >
            Modo Simulado
          </button>

          <button
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            style={{
              clipPath: "polygon(0% 0%, 100% 0%, 90% 100%, 10% 1590%)",
              transition: "background-color 0.3s",
            }}
         
          >
            Modo Real
          </button>
        </div>
      </nav>

      <nav className="border-b border-green-500 shadow-sm p-4 flex justify-center items-center">
        <div className="flex gap-4">
          <button className="px-4 py-2">
            Execultando
          </button>
          <button className="px-4 py-2">
            Parados
          </button>
          <button className="px-4 py-2">
            Arquivados
          </button>
       </div>
      </nav>

     

      <div style={{ position: "relative", height: "100px" }}>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          style={{ position: "absolute", top: "10px", right: "0" }}
          onClick={() => setModalIsOpen(!modalIsOpen)}
        >
          <Plus/>
        </button>
      </div>
    

      <main className="px-8 flex gap-3 items-center flex-wrap justify-center ">
      
      <div className={`${modalIsOpen ? "block" : "hidden"} w-full fixed inset-0 bg-background-primary bg-opacity-50 flex justify-center items-center z-50`}>
          <div className="bg-background-secondary text-white rounded-lg p-6 w-96">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Criar Novo Bot</h2>
            </div>
            <form >
              <div className="mb-4">
                <label htmlFor="botName" className="block text-sm font-medium">
                  Nome do Bot
                </label>
                <input
                  type="text"
                  id="botName"
                  name="botName"
                  value={"lauricio teste"}
                  className="mt-1 block w-full p-2 bg-transparent border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="strategy" className="block text-sm font-medium">
                  Estratégia
                </label>
                <select
                  id="strategy"
                  name="strategy"
                    className="mt-1 block w-full p-2 bg-background-secondary border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                >
                  <option value="fibonacci">Fibonacci</option>
                  <option value="martingale">Martingale</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="riskProfile" className="block text-sm font-medium">
                  Perfil de Risco
                </label>
                <select
                  id="riskProfile"
                  name="riskProfile"
                  value={"sim"}
                                     
                   className="mt-1 block w-full p-2 bg-background-secondary  border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                >
                  <option value="conservador">Conservador</option>
                  <option value="moderado">Moderado</option>
                  <option value="agressivo">Agressivo</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="initialValue" className="block text-sm font-medium">
                  Valor Inicial (R$)
                </label>
                <input
                  type="number"
                  id="initialValue"
                  name="initialValue"
                  value={"5432"}
                  className="mt-1 block w-full p-2 bg-background-secondary border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  min="1"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md transition"
              >
                Criar Bot
              </button>
            </form>
          </div>
        </div>

        <div className="w-full max-w-[300px] bg-background-secondary shadow rounded p-6">
          <div className="flex justify-between items-center">
            <h2 className="text-green-500 font-bold">#3945605</h2>
            <p className="text-gray-500">Pessimista</p>
          </div>
          <h3 className="text-lg font-semibold text-white-600">Alcan-fibonacci</h3>
          <p className="text-gray-400">Fibonacci</p>

          <div className="h-32 bg-background-primary mt-4 rounded flex items-center justify-center">
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
            <p className="text-green-600 text-lg font-semibold">R$260,50</p>
            <p className="text-red-600 text-lg font-semibold">R$-49,00</p>
          </div>

            <div className="mt-4 flex items-center justify-between">
              <button className="text-gray-500 flex items-center">
                MAIS INFO
              </button>
              <button className="flex items-center">
                <span className="text-gray-500 mr-2">Executando</span>
                <span className="p-1 border border-green-500 hover:bg-green-500">
                  <Pause width={20} height={20}/>
                </span>
              </button>
           </div>
        </div>

        <div className="w-full max-w-[300px] bg-background-secondary shadow rounded p-6">
          <div className="flex justify-between items-center">
            <h2 className="text-green-500 font-bold">#3945605</h2>
            <p className="text-gray-500">Pessimista</p>
          </div>
          <h3 className="text-lg font-semibold text-white-600">Alcan-fibonacci</h3>
          <p className="text-gray-400">Fibonacci</p>

          <div className="h-32 bg-background-primary mt-4 rounded flex items-center justify-center">
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
            <p className="text-green-600 text-lg font-semibold">R$260,50</p>
            <p className="text-red-600 text-lg font-semibold">R$-49,00</p>
          </div>

            <div className="mt-4 flex items-center justify-between">
              <button className="text-gray-500 flex items-center">
                MAIS INFO
              </button>
              <button className="flex items-center">
                <span className="text-gray-500 mr-2">Executando</span>
                <span className="p-1 border border-green-500 hover:bg-green-500">
                  <Pause width={20} height={20}/>
                </span>
              </button>
           </div>
        </div>

        <div className="w-full max-w-[300px] bg-background-secondary shadow rounded p-6">
          <div className="flex justify-between items-center">
            <h2 className="text-green-500 font-bold">#3945605</h2>
            <p className="text-gray-500">Pessimista</p>
          </div>
          <h3 className="text-lg font-semibold text-white-600">Alcan-fibonacci</h3>
          <p className="text-gray-400">Fibonacci</p>

          <div className="h-32 bg-background-primary mt-4 rounded flex items-center justify-center">
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
            <p className="text-green-600 text-lg font-semibold">R$260,50</p>
            <p className="text-red-600 text-lg font-semibold">R$-49,00</p>
          </div>

            <div className="mt-4 flex items-center justify-between">
              <button className="text-gray-500 flex items-center">
                MAIS INFO
              </button>
              <button className="flex items-center">
                <span className="text-gray-500 mr-2">Executando</span>
                <span className="p-1 border border-green-500 hover:bg-green-500">
                  <Pause width={20} height={20}/>
                </span>
              </button>
           </div>
        </div>

        <div className="w-full max-w-[300px] bg-background-secondary shadow rounded p-6">
          <div className="flex justify-between items-center">
            <h2 className="text-green-500 font-bold">#3945605</h2>
            <p className="text-gray-500">Pessimista</p>
          </div>
          <h3 className="text-lg font-semibold text-white-600">Alcan-fibonacci</h3>
          <p className="text-gray-400">Fibonacci</p>

          <div className="h-32 bg-background-primary mt-4 rounded flex items-center justify-center">
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
            <p className="text-green-600 text-lg font-semibold">R$260,50</p>
            <p className="text-red-600 text-lg font-semibold">R$-49,00</p>
          </div>

            <div className="mt-4 flex items-center justify-between">
              <button className="text-gray-500 flex items-center">
                MAIS INFO
              </button>
              <button className="flex items-center">
                <span className="text-gray-500 mr-2">Executando</span>
                <span className="p-1 border border-green-500 hover:bg-green-500">
                  <Pause width={20} height={20}/>
                </span>
              </button>
           </div>
        </div>

        <div className="w-full max-w-[300px] bg-background-secondary shadow rounded p-6">
          <div className="flex justify-between items-center">
            <h2 className="text-green-500 font-bold">#3945605</h2>
            <p className="text-gray-500">Pessimista</p>
          </div>
          <h3 className="text-lg font-semibold text-white-600">Alcan-fibonacci</h3>
          <p className="text-gray-400">Fibonacci</p>

          <div className="h-32 bg-background-primary mt-4 rounded flex items-center justify-center">
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
            <p className="text-green-600 text-lg font-semibold">R$260,50</p>
            <p className="text-red-600 text-lg font-semibold">R$-49,00</p>
          </div>

            <div className="mt-4 flex items-center justify-between">
              <button className="text-gray-500 flex items-center">
                MAIS INFO
              </button>
              <button className="flex items-center">
                <span className="text-gray-500 mr-2">Executando</span>
                <span className="p-1 border border-green-500 hover:bg-green-500">
                  <Pause width={20} height={20}/>
                </span>
              </button>
           </div>
        </div>

        <div className="w-full max-w-[300px] bg-background-secondary shadow rounded p-6">
          <div className="flex justify-between items-center">
            <h2 className="text-green-500 font-bold">#3945605</h2>
            <p className="text-gray-500">Pessimista</p>
          </div>
          <h3 className="text-lg font-semibold text-white-600">Alcan-fibonacci</h3>
          <p className="text-gray-400">Fibonacci</p>

          <div className="h-32 bg-background-primary mt-4 rounded flex items-center justify-center">
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
            <p className="text-green-600 text-lg font-semibold">R$260,50</p>
            <p className="text-red-600 text-lg font-semibold">R$-49,00</p>
          </div>

            <div className="mt-4 flex items-center justify-between">
              <button className="text-gray-500 flex items-center">
                MAIS INFO
              </button>
              <button className="flex items-center">
                <span className="text-gray-500 mr-2">Executando</span>
                <span className="p-1 border border-green-500 hover:bg-green-500">
                  <Pause width={20} height={20}/>
                </span>
              </button>
           </div>
        </div>
      </main>

    </div>
  );
}

