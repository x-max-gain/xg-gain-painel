"use client";

import Link from "next/link";
import { useState } from "react";

export default function Account() {
  const [activeTab, setActiveTab] = useState("Perfil");

  // Função para renderizar o conteúdo com base na aba ativa
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
      case "Perfil":
        return (
          <div className="grid grid-cols-4 gap-4">
            {/* Informações Pessoais */}
            <div className="bg-background-deep border border-gray-200  rounded-md p-4 shadow">
              <h2 className="text-lg font-bold mb-4 text-gray-500">Informações Pessoais</h2>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Nome</label>
                  <input
                    type="text"
                    value="Laurício de Sousa de Oliveira"
                    className="mt-1 block w-full border-b text-sm border-gray-300 text-gray-500  focus:border-gray-400 focus:outline-none bg-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">CPF</label>
                  <input
                    type="text"
                    value="046.897.063-01"
                     className="mt-1 block w-full border-b text-sm border-gray-300 text-gray-500 bg-transparent focus:border-gray-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Sexo</label>
                  <select
                     className="mt-1 block w-full border-b text-sm border-gray-300 text-gray-500 bg-transparent focus:border-gray-400 focus:outline-none"
                    defaultValue="Masculino"
                  >
                    <option>Masculino</option>
                    <option>Feminino</option>
                    <option>Outro</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Nascimento</label>
                  <input
                    type="date"
                    value="2000-08-27"
                     className="mt-1 block w-full border-b text-sm border-gray-300 text-gray-500 bg-transparent focus:border-gray-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Empresa</label>
                  <input
                    type="text"
                    value="Logicc Tecnologia"
                     className="mt-1 block w-full border-b text-sm border-gray-300 text-gray-500 bg-transparent focus:border-gray-400 focus:outline-none"
                  />
                </div>
              </div>
            </div>
  
            {/* Endereço */}
            <div className="bg-background-deep border border-gray-200 rounded-md p-4 shadow">
              <h2 className="text-lg font-bold mb-4 text-gray-500">Endereço</h2>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">CEP</label>
                  <input
                    type="text"
                    value="65 320 000"
                     className="mt-1 block w-full border-b text-sm border-gray-300 text-gray-500 bg-transparent focus:border-gray-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Rua/Avenida</label>
                  <input
                    type="text"
                    value="Rua Getúlio Vargas"
                     className="mt-1 block w-full border-b text-sm border-gray-300 text-gray-500 bg-transparent focus:border-gray-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Número</label>
                  <input
                    type="text"
                    value="12"
                     className="mt-1 block w-full border-b text-sm border-gray-300 text-gray-500 bg-transparent focus:border-gray-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Bairro</label>
                  <input
                    type="text"
                    value="Centro"
                     className="mt-1 block w-full border-b text-sm border-gray-300 text-gray-500 bg-transparent focus:border-gray-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Cidade</label>
                  <input
                    type="text"
                    value="Vitorino Freire"
                     className="mt-1 block w-full border-b text-sm border-gray-300 text-gray-500 bg-transparent focus:border-gray-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Estado</label>
                  <input
                    type="text"
                    value="Maranhão"
                     className="mt-1 block w-full border-b text-sm border-gray-300 text-gray-500 bg-transparent focus:border-gray-400 focus:outline-none"
                  />
                </div>
              </div>
            </div>
  
            {/* Contato */}
            <div className="bg-background-deep border border-gray-200 rounded-md p-4 shadow">
              <h2 className="text-lg font-bold mb-4 text-gray-500">Contato</h2>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">E-mail</label>
                  <input
                    type="email"
                    value="developerwebmasterpro@gmail.com"
                     className="mt-1 block w-full border-b text-sm border-gray-300 text-gray-500 bg-transparent focus:border-gray-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Telefone</label>
                  <input
                    type="text"
                    value="(63) 99248-3896"
                     className="mt-1 block w-full border-b text-sm border-gray-300 text-gray-500 bg-transparent focus:border-gray-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Telefone Secundário</label>
                  <input
                    type="text"
                    placeholder="(__) _____-____"
                     className="mt-1 block w-full border-b text-sm border-gray-300 text-gray-500 bg-transparent focus:border-gray-400 focus:outline-none"
                  />
                </div>
              </div>
            </div>
  
            {/* Conta */}
            <div className="bg-background-deep border border-gray-200 rounded-md p-4 shadow">
              <h2 className="text-lg font-bold mb-4 text-gray-500">Conta</h2>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Login</label>
                  <input
                    type="email"
                    value="developerwebmasterpro@gmail.com"
                     className="mt-1 block w-full border-b text-sm border-gray-300 text-gray-500 bg-transparent focus:border-gray-400 focus:outline-none"
                  />
                </div>
                <div>
                  <button className="bg-green-500 text-white px-4 py-2 rounded w-full">
                    Alterar Senha
                  </button>
                </div>
                <div>
                  <button className="bg-green-500 text-white px-4 py-2 rounded w-full">
                    Fazer Teste
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      case "Plano":
        return (
            <div
              className={"w-full max-w-[300px] mx-auto rounded-lg p-6 border shadow border-green-500"}
            >
              <h2 className="text-xl font-bold mb-2 text-center text-gray-500">Aprendiz</h2>
              <p className="text-2xl font-semibold text-center text-green-600">Grátis</p>
            

              <Link href={`/painel/plans/checkout/`}>
              <button
                className={`mt-4 w-full py-2 rounded text bg-green-500`}
              >
               Alterar Plano
              </button>
              </Link>

              <ul className="mt-6 space-y-2">
                  <li  className="text-sm text-gray-500">
                  Simulado
                  </li>
                  <li  className="text-sm text-gray-500">
                  Nenhum risco
                  </li>
                  <li  className="text-sm text-gray-500">
                  01 robô
                  </li>
                  <li  className="text-sm text-gray-500">
                  Delay de 15 min.
                  </li>
                  <li  className="text-sm text-gray-500">
                  Whiteboxes
                  </li>
              </ul>
            </div>
        );

      case "Corretoras":
        return (
          <div className="bg-background-deep rounded-md p-4 shadow">
            <h2 className="text-lg font-bold mb-4 text-gray-500">Corretoras Vinculadas</h2>
            <p className="text-gray-500">Nenhuma corretora vinculada no momento.</p>
            <button className="bg-green-500 text-white px-4 py-2 rounded mt-4">
              Vincular Corretora
            </button>
          </div>
        );

      case "Preferências":
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
    <div className="bg-background-primary min-h-screen p-4">
      {/* Navegação */}
      <nav className="shadow-sm p-4 border-b border-stone-500 flex justify-center items-center mb-6">
        <div className="flex gap-4">
          {["Perfil", "Plano", "Corretoras", "Preferências", "Financeiro", "Últimos Acessos"].map((tab) => (
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
