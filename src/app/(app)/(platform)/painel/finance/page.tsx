import { Link } from "lucide-react";

export default function Finnance() {
  return (
    <div className="w-full min-h-screen">
      {/* Cabeçalho */}
      <header className="bg-background-primary text-gray-700 p-6 shadow-md">
        <h1 className="text-2xl font-bold">Relatório Financeiro</h1>
        <p className="text-sm">Resumo dos resultados financeiros do período</p>
      </header>

      {/* Filtros */}
      <section className="p-6 bg-background-primary shadow-md">
        <h2 className="text-lg font-bold text-gray-500 mb-4">Filtros</h2>
        <div className="flex gap-1 md:gap-4 justify-center md:justify-start">
          <select className="border text-xs md:text-base bg-background-primary text-gray-500 border-green-500 rounded px-2 py-2 appearance-none">
            <option>Selecionar período</option>
            <option>Última semana</option>
            <option>Último mês</option>
            <option>Último ano</option>
          </select>
          <select className="border text-xs md:text-base bg-background-primary text-gray-500 border-green-500 rounded px-2 py-2 appearance-none">
            <option>Tipo de Bot</option>
            <option>Fibonacci</option>
            <option>Laurício-Bitcoin</option>
          </select>
          <button className="bg-green-500 text-xs md:text-base text-gray px-4 py-2 rounded hover:bg-green-600">
            Aplicar
          </button>
        </div>
      </section>

      {/* Resumo do Relatório */}
      <section className="p-6 bg-background-primary shadow-md mt-4">
        <h2 className="text-lg font-bold text-gray-500 mb-4">Resumo do Período</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-4 bg-background-secondary rounded shadow">
            <p className="text-sm text-gray-500">Total de Lucro</p>
            <p className="text-green-600 text-2xl font-bold">R$ 1.530,00</p>
          </div>
          <div className="p-4 bg-background-secondary rounded shadow">
            <p className="text-sm text-gray-500">Lucro Diário Médio</p>
            <p className="text-green-600 text-2xl font-bold">R$ 200,00</p>
          </div>
          <div className="p-4 bg-background-secondary rounded shadow">
            <p className="text-sm text-gray-500">Transações</p>
            <p className="text-green-500 text-2xl font-bold">25</p>
          </div>
          <div className="p-4 bg-background-secondary rounded shadow">
            <p className="text-sm text-gray-500">Bots Ativos</p>
            <p className="text-green-500 text-2xl font-bold">4</p>
          </div>
        </div>
      </section>

      {/* Detalhes do Relatório */}
      <section className="p-6 bg-background-primary shadow-md mt-4">
        <h2 className="text-lg font-bold text-gray-500 mb-4">Detalhes por Bot</h2>
        <table className="w-full border-collapse border border-green-500 text-sm">
          <thead>
            <tr className="bg-background-deep">
              <th className="border border-green-500 text-gray-500 p-2 text-xs md:text-base">Nome</th>
              <th className="border border-green-500 text-gray-500 p-2 text-xs md:text-base">Lucro</th>
              <th className="border border-green-500 text-gray-500 p-2 text-xs md:text-base">Lucro Diário</th>
              <th className="border border-green-500 text-gray-500 p-2 text-xs md:text-base">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td className="border border-green-500 p-2 text-xs md:text-base text-gray-500">Laurício-Bitcoin</td>
              <td className="border border-green-500 p-2 text-xs md:text-base text-green-600">R$ 320,00</td>
              <td className="border border-green-500 p-2 text-xs md:text-base text-green-600">R$ 999,00</td>
              <td className="border border-green-500 p-2 text-xs md:text-base text-green-500">ATIVO</td>
            </tr>
            <tr className="text-center">
              <td className="border border-green-500 p-2 text-xs md:text-base text-gray-500">Alcan-Fibonacci</td>
              <td className="border border-green-500 p-2 text-xs md:text-base text-green-600">R$ 310,00</td>
              <td className="border border-green-500 p-2 text-xs md:text-base text-green-600">R$ 199,00</td>
              <td className="border border-green-500 p-2 text-xs md:text-base text-red-500">PARADO</td>
            </tr>
            <tr className="text-center">
              <td className="border border-green-500 p-2 text-xs md:text-base text-gray-500">Laurício-Bitcoin</td>
              <td className="border border-green-500 p-2 text-xs md:text-base text-green-600">R$ 320,00</td>
              <td className="border border-green-500 p-2 text-xs md:text-base text-green-600">R$ 999,00</td>
              <td className="border border-green-500 p-2 text-xs md:text-base text-green-500">ATIVO</td>
            </tr>
            <tr className="text-center">
              <td className="border border-green-500 p-2 text-xs md:text-base text-gray-500">Laurício-Bitcoin</td>
              <td className="border border-green-500 p-2 text-xs md:text-base text-green-600">R$ 320,00</td>
              <td className="border border-green-500 p-2 text-xs md:text-base text-green-600">R$ 999,00</td>
              <td className="border border-green-500 p-2 text-xs md:text-base text-green-500">ATIVO</td>
            </tr>
            <tr className="text-center">
              <td className="border border-green-500 p-2 text-xs md:text-base text-gray-500">Alcan-Fibonacci</td>
              <td className="border border-green-500 p-2 text-xs md:text-base text-green-600">R$ 310,00</td>
              <td className="border border-green-500 p-2 text-xs md:text-base text-green-600">R$ 199,00</td>
              <td className="border border-green-500 p-2 text-xs md:text-base text-red-500">PARADO</td>
            </tr>
            <tr className="text-center">
              <td className="border border-green-500 p-2 text-xs md:text-base text-gray-500">Laurício-Bitcoin</td>
              <td className="border border-green-500 p-2 text-xs md:text-base text-green-600">R$ 320,00</td>
              <td className="border border-green-500 p-2 text-xs md:text-base text-green-600">R$ 999,00</td>
              <td className="border border-green-500 p-2 text-xs md:text-base text-green-500">ATIVO</td>
            </tr>
            <tr className="text-center">
              <td className="border border-green-500 p-2 text-xs md:text-base text-gray-500">Alcan-Fibonacci</td>
              <td className="border border-green-500 p-2 text-xs md:text-base text-green-600">R$ 310,00</td>
              <td className="border border-green-500 p-2 text-xs md:text-base text-green-600">R$ 199,00</td>
              <td className="border border-green-500 p-2 text-xs md:text-base text-red-500">PARADO</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}

