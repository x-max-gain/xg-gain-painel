"use client";
import { PopUp } from "@/components/popup";
import { useState } from "react";
import CheckoutBuilder from "./checkout-builder";

export default function Products() {
  const [editor, setEditor] = useState(false);
  const [closePopUp, setClosePopUp] = useState(false);

  const openEdition = () => {
    setClosePopUp(false)
    setEditor(true);
  }

  return (
    <div className="flex flex-col gap-4 mt-4 mt-0">
      <div className="min-[640px]:flex justify-between">
        <div>
          <h3 className="text-2xl font-semibold">Funil de upsell 1 click</h3>
          <p className="text-text-secondary">Crie e gerencie os seus funis de upsell 1 click com cartão de crédito.</p>
        </div>
        <button 
          onClick={() => setClosePopUp(true)}
          className="max-[640px]:py-4 mt-4 flex justify-center inline-flex items-center px-10 py-0 text-sm font-medium text-white bg-green-400 rounded-lg">
          Novo funil de upsell
        </button>
      </div>

      <PopUp 
        title="Novo funil de upsell 1 click" 
        closed={closePopUp} 
        setClosed={setClosePopUp} 
        body={
          <div>
            <div className="mb-4">
              <p className="text-text-secondary">Nome do Funil (só você pode ver)</p>
              <input className="border border-gray-700 rounded-md bg-transparent py-2 focus:outline-none pl-2 text-white w-full" type="text" />
            </div>
            <div>
              <p className="text-text-secondary">Nome do Funil (só você pode ver)</p>
              <select name="" id="" className="border border-gray-700 rounded-md bg-transparent py-2 focus:outline-none pl-2 text-white w-full">
                <option value=""></option>
              </select>
            </div>

            <button 
              onClick={openEdition}
              className="w-full mt-4 flex justify-center inline-flex items-center py-3 text-sm font-medium text-white bg-green-400 rounded-lg">
                Criar upsell
            </button>
          </div>
        }
      />

      {
        editor && (<CheckoutBuilder closed={editor} setClosed={setEditor} />)
      }
    </div>
  )
}