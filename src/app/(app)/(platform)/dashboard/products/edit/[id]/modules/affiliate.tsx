"use client"
import { useState } from "react"

/* eslint-disable @next/next/no-img-element */

export default function AffiliateProductEdit() {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);

  return (
    <div className="grid grid-cols-2 gap-4 max-[640px]:grid-cols-1">
      <div>
        <h3 className="font-bold">Afiliação</h3>
        <p className="text-text-secondary mt-1 mb-4">Configurando o produto</p>

        <div className="border border-gray-700 p-5 rounded-md">
          <div className="grid grid-cols-1 gap-4">
            <div>
              <p className="mb-1">Permitir afiliados</p>
              <div onClick={() => setIsChecked1(!isChecked1)}>
                <input
                  type="checkbox"
                  id="toggle"
                  className="toggle-checkbox hidden"
                />
                <label
                  htmlFor="toggle"
                  className={`toggle-label block w-12 h-6 ${isChecked2 ? 'bg-green-300' : 'bg-gray-300'} rounded-full cursor-pointer relative`}
                >
                  <span
                    className={`block w-6 h-6 bg-white rounded-full shadow transform transition-transform duration-200 ease-in-out absolute left-0 ${isChecked1 ? 'translate-x-full' : ''}`}
                  ></span>
                </label>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 mt-4">
            <div onClick={() => setIsChecked2(!isChecked2)}>
              <p className="mb-1">Aprovação automática de afiliados</p>
              <div>
                <input
                  type="checkbox"
                  id="toggle"
                  className="toggle-checkbox hidden"
                />
                <label
                  htmlFor="toggle"
                  className={`toggle-label block w-12 h-6 ${isChecked2 ? 'bg-green-300' : 'bg-gray-300'} rounded-full cursor-pointer relative`}
                >
                  <span
                    className={`block w-6 h-6 bg-white rounded-full shadow transform transition-transform duration-200 ease-in-out absolute left-0 ${isChecked2 ? 'translate-x-full' : ''}`}
                  ></span>
                </label>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 mt-4">
            <div>
              <p className="mb-1">Comissão padrão para afiliados</p>
              <div className="flex border border-gray-700 py-2 rounded-md px-2">
                <input className="bg-transparent focus:outline-none  text-white w-full" type="text" placeholder="10" /> 
                <p>%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}