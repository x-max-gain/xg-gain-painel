"use client";

import { useState } from "react";
import CreateBotInformations from "./modules/informations";
import CreateBotAlgorithm from "./modules/algorithm/index";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Account() {
  const [activeTab, setActiveTab] = useState("Informações");

  const renderContent = () => {

    const planos = [
      {
        nome: "Aprendiz",
        preco: "Grátis",
        descricao: "Plano Atual",
        beneficios: ["Simulado", "Nenhum risco", "01 robô", "Delay de 15 min.", "Whiteboxes"],
        destaque: false,
      },
      {
        nome: "Iniciante",
        preco: "R$109,00/mês",
        descricao: "Upgrade",
        beneficios: ["Simulado e real", "Risco baixo", "03 robôs", "R$10.000/trade"],
        destaque: false,
      },
      {
        nome: "Entusiasta",
        preco: "R$349,00/mês",
        descricao: "Upgrade",
        beneficios: ["Simulado e real", "Risco intermediário", "09 robôs", "R$100.000/trade"],
        destaque: true,
      },
      {
        nome: "Estrategista",
        preco: "R$1.249,00/mês",
        descricao: "Upgrade",
        beneficios: ["Simulado e real", "Risco alto", "30 robôs", "R$300.000/trade"],
        destaque: false,
      },
    ];

    switch (activeTab) {
      case "Informações":
        return <CreateBotInformations />;

      case "Algorítmo":
        return <CreateBotAlgorithm />;

      default:
        return <p className="text-gray-500">Selecione uma aba para começar.</p>;
    }
  };

  return (
    <div className="bg-background-deep min-h-screen">
      {/* Navegação */}
      <nav className="bg-background-primary shadow-sm p-4 border-b border-gray-200 flex justify-center items-center">
        <div className="w-full flex justify-between">
          <div>
            <button className="px-1 sm:px-4 py-2 bg-gray-400 rounded-md flex items-center justify-center">
              <ArrowLeft className="mr-2" size={18} />
              Voltar
            </button>
          </div>
          <div>
            {["Informações", "Algorítmo", "Simulações"].map((tab) => (
              <button
                key={tab}
                className={`px-2 sm:px-4 py-2 ${activeTab === tab
                  ? "bg-background-main font-bold rounded text-white"
                  : "text-gray-500"
                  }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <div>
            <button className="px-1 sm:px-4 py-2 bg-background-green rounded-md flex items-center justify-center">
              Proseguir
              <ArrowRight className="ml-2" size={18} />
            </button>
          </div>
        </div>
      </nav>

      {/* Conteúdo dinâmico */}
      <div>{renderContent()}</div>
    </div>
  );
}
