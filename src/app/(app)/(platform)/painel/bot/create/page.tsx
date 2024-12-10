"use client";

import { useState } from "react";
import Plans from "../../plans/page";
import CreateBotInformations from "./modules/informations";

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

      case "Plano":
        return (
          <Plans />
        );

      case "Corretoras":
        return (
          <div className="bg-background-deep rounded-md p-4 shadow m-6">
            <h2 className="text-lg font-bold mb-4 text-gray-500">Corretoras Vinculadas</h2>
            <p className="text-gray-500">Nenhuma corretora vinculada no momento.</p>
            <button className="bg-green-500 text-white px-4 py-2 rounded mt-4">
              Vincular Corretora
            </button>
          </div>
        );

      case "Configurações":
        return (
            <div className="bg-background-deep rounded-md p-6 shadow-md max-w-xl mx-auto">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">Preferências</h2>
              <div className="space-y-4">
                {/* Lista de Preferências */}
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-3 h-5 w-5 text-blue-600 focus:ring focus:ring-blue-400 rounded"
                    defaultChecked
                  />
                  <span className="text-gray-700 text-sm">Exibir parâmetros abertos.</span>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-3 h-5 w-5 text-blue-600 focus:ring focus:ring-blue-400 rounded"
                    defaultChecked
                  />
                  <span className="text-gray-700 text-sm">
                    Exibir mensagem de confirmação ao Salvar parâmetros de um robô.
                  </span>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-3 h-5 w-5 text-blue-600 focus:ring focus:ring-blue-400 rounded"
                    defaultChecked
                  />
                  <span className="text-gray-700 text-sm">
                    Exibir mensagem de confirmação ao Parar um robô.
                  </span>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-3 h-5 w-5 text-blue-600 focus:ring focus:ring-blue-400 rounded"
                    defaultChecked
                  />
                  <span className="text-gray-700 text-sm">
                    Exibir mensagem de confirmação ao Zerar a carteira de um robô.
                  </span>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-3 h-5 w-5 text-blue-600 focus:ring focus:ring-blue-400 rounded"
                    defaultChecked
                  />
                  <span className="text-gray-700 text-sm">
                    Exigir senha para Parar robôs em conta real.
                  </span>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-3 h-5 w-5 text-blue-600 focus:ring focus:ring-blue-400 rounded"
                    defaultChecked
                  />
                  <span className="text-gray-700 text-sm">
                    Exigir senha para Zerar a carteira de robôs em conta real.
                  </span>
                </div>
              </div>
          
              {/* Campo de Seleção */}
              <div className="mt-6">
                <label
                  htmlFor="simulatorMode"
                  className="block text-sm font-medium text-gray-600"
                >
                  Ao criar um robô, predefinir o simulador como:
                </label>
                <select
                  id="simulatorMode"
                  className="mt-2 block w-full rounded border-b border-gray-500 shadow-sm focus:border-gray-500 focus:outline-none bg-background-deep text-gray-500"
                >
                  <option>Pessimista</option>
                  <option>Otimista</option>
                  <option>Neutro</option>
                </select>
              </div>
            </div>
        );

      case "Financeiro":
        return (
          <div className="bg-background-deep rounded-md p-4 shadow">
            <h2 className="text-lg font-bold mb-4 text-gray-500">Relatório Financeiro</h2>
            <p className="text-gray-500">Aqui você poderá acessar seus relatórios financeiros.</p>
          </div>
        );

      case "Últimos Acessos":
        return (
          <div className="bg-background-deep rounded-md p-4 shadow">
            <h2 className="text-lg font-bold mb-4 text-gray-500">Histórico de Últimos Acessos</h2>
            <p className="text-gray-500">Último acesso em: <strong>04/12/2024 às 14:30</strong></p>
          </div>
        );

      default:
        return <p className="text-gray-500">Selecione uma aba para começar.</p>;
    }
  };

  return (
    <div className="bg-background-primary min-h-screen">
      {/* Navegação */}
      <nav className="shadow-sm p-4 border-b border-gray-200 flex justify-center items-center">
        <div className="flex gap-4">
          {["Informações", "Plano", "Corretoras", "Configurações", "Financeiro", "Últimos Acessos"].map((tab) => (
            <button
              key={tab}
              className={`px-2 sm:px-4 py-2 ${
                activeTab === tab
                  ? "bg-green-500 font-bold rounded text-white"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </nav>

      {/* Conteúdo dinâmico */}
      <div>{renderContent()}</div>
    </div>
  );
}
