"use client";

import Image from "next/image";

// ICONS
import { Images } from 'lucide-react';
import { Timer } from 'lucide-react';
import { CaseUpper } from 'lucide-react';

type CheckoutBuilderType = {
  closed: boolean,
  setClosed: (value: boolean) => void,
}
export default function CheckoutBuilder({ setClosed, closed }: CheckoutBuilderType) {
  return (
    <>
      {
        closed && <div className="bg-[#000] fixed w-full h-screen left-0 top-0 z-50 max-[1024px]:overflow-y-auto	">
          <div className="w-full">
            <div className="max-[1024px]:block w-full sticky top-0 z-40 flex px-8 pt-4 border-b border-green-700 pb-6 mt-2 justify-between items-center">
              <Image src={"/logo.svg"} alt="Logo EscalaPay 2.0" width={220} height={40} />
              <h1 className="max-[1024px]:py-4 font-bold text-2xl">CHECKOUT BUILDER</h1>
              <div className="flex items-center max-[1024px]:block">
                <p className="mx-2">Visualizar:</p>
                <button 
                  className="max-[1024px]:mb-4 mr-4 flex justify-center inline-flex items-center py-3 px-3 text-sm font-medium text-green-400 border border-green-400 rounded-lg">
                    Desktop
                </button>
                <p className="mx-2">Mobile:</p>
                <button 
                  onClick={() => setClosed(false)}
                  className="flex justify-center inline-flex items-center py-3 px-3 text-sm font-medium text-green-400 border border-green-400 rounded-lg">
                    Voltar para o painel
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-4 min-[1024px]:h-screen max-[1024px]:grid-cols-1">
            <div className="min-[1024px]:col-span-3 max-[1024px]:border-b min-[1024px]:border-r border-green-700 p-5 mb-1 min-[1024px]:h-screen">
              <p className="mb-2 font-bold">Template de checkout</p>
              <select name="" id="" className="mb-4 border border-gray-700 rounded-md bg-transparent py-2 focus:outline-none pl-2 text-white w-full">
                <option value="">Checkout Padrão</option>
              </select>
              <p className="mb-2 font-bold">Configurações e Widgets</p>
              <ul className="grid grid-cols-2 gap-4 mb-6">
                <li className="border border-gray-700 p-3 flex justify-center py-6 rounded-lg flex-col items-center">
                  <Images />
                  <p className="mt-2">Capa</p>
                </li>
                <li className="border border-gray-700 p-3 flex justify-center py-6 rounded-lg flex-col items-center">
                  <Timer />
                  <p className="mt-2">Contador</p>
                </li>
                <li className="border border-gray-700 p-3 flex justify-center py-6 rounded-lg flex-col items-center">
                  <Images />
                  <p className="mt-2">WhatsApp</p>
                </li>
                <li className="border border-gray-700 p-3 flex justify-center py-6 rounded-lg flex-col items-center">
                  <CaseUpper />
                  <p className="mt-2">Texto</p>
                </li>
              </ul>
              <button 
                  className="font-bold w-full flex justify-center inline-flex items-center py-3 px-3 text-sm font-medium text-white bg-green-400 rounded-lg">
                    Voltar para o painel
                </button>
            </div>
            <div className="min-[1024px]:col-span-9 h-screen">
              <div className="flex justify-center items-center min-[1024px]:h-screen">
                Conteúdo aqui
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}