"use client"

import { useState } from "react";
import Image from "next/image";

export default function Account() {
  const [activeTab, setActiveTab] = useState("Perfil");

  return (
    <div className="bg-background-primary">
      <nav className="shadow-sm p-4 border-b border-stone-500 flex justify-center items-center">
        <div className="flex gap-4">
          {["Perfil", "Plano", "Preferências"].map((tab) => (
            <button
              key={tab}
              className={`px-1 sm:px-4 py-2 ${
                activeTab === tab ? "bg-green-500 font-bold rounded" : " text-gray-500"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </nav>

      <div className="flex justify-center">
        <div className="p-4 flex flex-col flex-wrap w-full justify-between sm:flex-row sm:w-full">
          {activeTab === "Perfil" && (
            <div className="h-auto w-full max-w-[100%] sm:max-w-[74.5%] ">
              <div className="bg-background-deep rounded-md p-4 shadow">
                <div className="flex flex-col gap-2 sm:gap-4 sm:flex-row">
                  <Image
                    src="https://logicc-tecnologia-s3.s3.amazonaws.com/system/user_default.webp"
                    alt="User"
                    className="object-cover mr-4 w-[100px] h-[100px] sm:w-[200px] sm:h-[200px]"
                    width={200}
                    height={200}
                  />
                  <div className="flex flex-col text-gray-500">
                    <h1 className="text-5md sm:text-2xl font-bold">
                      Lauricio De Sousa Oliveira
                    </h1>
                    <p className="text-xs sm:text-base">CPF: 043.921.432.01</p>
                    <p className="text-xs sm:text-base">
                      EMAIL: developerwebmasterpro@gmail.com
                    </p>
                    <p className="text-xs sm:text-base">
                      TELEFONE: (63) 99999-9090
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-background-deep rounded-md mt-4 text-gray-500 shadow">
                <h2 className="px-4 py-2">
                  <strong>Resumo do período</strong>
                </h2>
              </div>
              <div className="bg-background-deep rounded-md mt-4 flex flex-col p-4 gap-2 text-gray-500 shadow">
                <h2 className="px-4 py-2">
                  <strong>Detalhes do bots</strong>
                </h2>
              </div>
            </div>
          )}

          {activeTab === "Plano" && (
            <div className="h-auto w-full max-w-[100%] sm:max-w-[74.5%] text-gray-500 ">
              <div className="bg-background-deep rounded-md p-4 shadow">
                <h2 className="text-xl">Plano Atual</h2>
                <p>Detalhes sobre o plano serão exibidos aqui.</p>
              </div>
            </div>
          )}

          {activeTab === "Preferências" && (
            <div className="h-auto w-full max-w-[100%] sm:max-w-[74.5%] text-gray-500 ">
              <div className="bg-background-deep rounded-md p-4 shadow">
                <h2 className="text-xl">Preferências</h2>
                <p>Configurações de preferências do usuário.</p>
              </div>
            </div>
          )}

          <div className="w-full h-auto max-w-1/4 sm:max-w-[24.5%] text-gray-500 ">
            <div className="bg-background-deep rounded-md p-4 mt-4 shadow">
              <h2 className="px-4 py-2 ">
                <strong>Lista de depósitos</strong>
              </h2>
            </div>
            <div className="bg-background-deep rounded-md p-4 mt-4 text-gray-500 shadow">
              <h2 className="px-4 py-2">
                <strong>Lista de saques</strong>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
