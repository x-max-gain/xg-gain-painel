'use client'

import { Pause, Plus, SidebarClose } from "lucide-react";
import Link from "next/link";

export default function Bot() {

  return (
    <div className="w-full min-h-screen bg-background-primary">
      
      <nav className="border-b border-slate-800	 shadow-sm pb-3 flex justify-center items-center">
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

      <nav className="shadow-sm p-4 flex justify-center items-center">
        <div className="flex gap-4">
          <button className="px-1 sm:px-4 py-2">
            Execultando
          </button>
          <button className="px-1 sm:px-4 py-2">
            Parados
          </button>
          <button className="px-1 sm:px-4 py-2">
            Arquivados
          </button>
       </div>
      </nav>

     

      <div style={{ position: "relative", height: "100px" }}>
        <Link href="#"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          style={{ position: "absolute", top: "10px", right: "10px" }}
        >
          <Plus/>
        </Link >
      </div>
    

      <main className="pr-8 pl-8 pb-8 flex gap-3 items-center flex-wrap justify-center ">
        <div className="w-full max-w-[340px] w-full bg-background-secondary shadow rounded">
            <Link href="#">
             <div className="p-4">
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
             </div>
            </Link>

            <div className="mt-4 w-full bg-zinc-800	 p-2 flex items-center justify-between">
              <button className="text-stone-300 flex items-center underline">
                VER MAIS
              </button>
              <button className="flex items-center">
                <span className="text-gray-500 mr-2">Executando</span>
                <span className="p-1 border border-green-500 hover:bg-green-500">
                  <Pause width={20} height={20}/>
                </span>
              </button>
           </div>
        </div>

        <div className="w-full max-w-[340px] w-full bg-background-secondary shadow rounded">
            <Link href="#">
             <div className="p-4">
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
             </div>
            </Link>

            <div className="mt-4 w-full bg-zinc-800	 p-2 flex items-center justify-between">
              <button className="text-stone-300 flex items-center underline">
                VER MAIS
              </button>
              <button className="flex items-center">
                <span className="text-gray-500 mr-2">Executando</span>
                <span className="p-1 border border-green-500 hover:bg-green-500">
                  <Pause width={20} height={20}/>
                </span>
              </button>
           </div>
        </div>

        <div className="w-full max-w-[340px] w-full bg-background-secondary shadow rounded">
            <Link href="#">
             <div className="p-4">
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
             </div>
            </Link>

            <div className="mt-4 w-full bg-zinc-800	 p-2 flex items-center justify-between">
              <button className="text-stone-300 flex items-center underline">
                VER MAIS
              </button>
              <button className="flex items-center">
                <span className="text-gray-500 mr-2">Executando</span>
                <span className="p-1 border border-green-500 hover:bg-green-500">
                  <Pause width={20} height={20}/>
                </span>
              </button>
           </div>
        </div>

        <div className="w-full max-w-[340px] w-full bg-background-secondary shadow rounded">
            <Link href="#">
             <div className="p-4">
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
             </div>
            </Link>

            <div className="mt-4 w-full bg-zinc-800	 p-2 flex items-center justify-between">
              <button className="text-stone-300 flex items-center underline">
                VER MAIS
              </button>
              <button className="flex items-center">
                <span className="text-gray-500 mr-2">Executando</span>
                <span className="p-1 border border-green-500 hover:bg-green-500">
                  <Pause width={20} height={20}/>
                </span>
              </button>
           </div>
        </div>

        <div className="w-full max-w-[340px] w-full bg-background-secondary shadow rounded">
            <Link href="#">
             <div className="p-4">
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
             </div>
            </Link>

            <div className="mt-4 w-full bg-zinc-800	 p-2 flex items-center justify-between">
              <button className="text-stone-300 flex items-center underline">
                VER MAIS
              </button>
              <button className="flex items-center">
                <span className="text-gray-500 mr-2">Executando</span>
                <span className="p-1 border border-green-500 hover:bg-green-500">
                  <Pause width={20} height={20}/>
                </span>
              </button>
           </div>
        </div>

        <div className="w-full max-w-[340px] w-full bg-background-secondary shadow rounded">
            <Link href="#">
             <div className="p-4">
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
             </div>
            </Link>

            <div className="mt-4 w-full bg-zinc-800	 p-2 flex items-center justify-between">
              <button className="text-stone-300 flex items-center underline">
                VER MAIS
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

