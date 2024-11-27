import { Link } from "lucide-react";

export default function Finnance() {
  return (
    <div className="w-full min-h-screen bg-primary">
      {/* Cabeçalho */}
      <header className="bg-background-primary text-white p-6 shadow-md">
        <h1 className="text-2xl font-bold">Relatório Financeiro</h1>
        <p className="text-sm">Resumo dos resultados financeiros do período</p>
      </header>

      {/* Filtros */}
      <section className="p-6 bg-background-primary shadow-md">
        <h2 className="text-lg font-bold text-white-700 mb-4">Filtros</h2>
        <div className="flex gap-4">
          <select className="border bg-background-primary text-white border-green-500 rounded px-2 py-2 appearance-none">
            <option>Selecionar período</option>
            <option>Última semana</option>
            <option>Último mês</option>
            <option>Último ano</option>
          </select>
          <select className="border bg-background-primary text-white border-green-500 rounded px-2 py-2 appearance-none">
            <option>Tipo de Bot</option>
            <option>Fibonacci</option>
            <option>Laurício-Bitcoin</option>
          </select>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Aplicar
          </button>
        </div>
      </section>

      {/* Resumo do Relatório */}
      <section className="p-6 bg-background-primary shadow-md mt-4">
        <h2 className="text-lg font-bold text-white-700 mb-4">Resumo do Período</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-4 bg-background-secondary rounded shadow">
            <p className="text-sm text-white">Total de Lucro</p>
            <p className="text-green-600 text-2xl font-bold">R$ 1.530,00</p>
          </div>
          <div className="p-4 bg-background-secondary rounded shadow">
            <p className="text-sm text-white">Lucro Diário Médio</p>
            <p className="text-green-600 text-2xl font-bold">R$ 200,00</p>
          </div>
          <div className="p-4 bg-background-secondary rounded shadow">
            <p className="text-sm text-white">Transações</p>
            <p className="text-green-500 text-2xl font-bold">25</p>
          </div>
          <div className="p-4 bg-background-secondary rounded shadow">
            <p className="text-sm text-white">Bots Ativos</p>
            <p className="text-green-500 text-2xl font-bold">4</p>
          </div>
        </div>
      </section>

      {/* Detalhes do Relatório */}
      <section className="p-6 bg-background-primary shadow-md mt-4">
        <h2 className="text-lg font-bold text-white-700 mb-4">Detalhes por Bot</h2>
        <table className="w-full border-collapse border border-green-500 text-sm">
          <thead>
            <tr className="bg-background-deep">
              <th className="border border-green-500 p-2">Nome</th>
              <th className="border border-green-500 p-2">Lucro</th>
              <th className="border border-green-500 p-2">Lucro Diário</th>
              <th className="border border-green-500 p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td className="border border-green-500 p-2">Laurício-Bitcoin</td>
              <td className="border border-green-500 p-2 text-green-600">R$ 320,00</td>
              <td className="border border-green-500 p-2 text-green-600">R$ 999,00</td>
              <td className="border border-green-500 p-2 text-green-500">ATIVO</td>
            </tr>
            <tr className="text-center">
              <td className="border border-green-500 p-2">Alcan-Fibonacci</td>
              <td className="border border-green-500 p-2 text-green-600">R$ 310,00</td>
              <td className="border border-green-500 p-2 text-green-600">R$ 199,00</td>
              <td className="border border-green-500 p-2 text-red-500">PARADO</td>
            </tr>
            <tr className="text-center">
              <td className="border border-green-500 p-2">Laurício-Bitcoin</td>
              <td className="border border-green-500 p-2 text-green-600">R$ 320,00</td>
              <td className="border border-green-500 p-2 text-green-600">R$ 999,00</td>
              <td className="border border-green-500 p-2 text-green-500">ATIVO</td>
            </tr>
            <tr className="text-center">
              <td className="border border-green-500 p-2">Alcan-Fibonacci</td>
              <td className="border border-green-500 p-2 text-green-600">R$ 310,00</td>
              <td className="border border-green-500 p-2 text-green-600">R$ 199,00</td>
              <td className="border border-green-500 p-2 text-red-500">PARADO</td>
            </tr>
            <tr className="text-center">
              <td className="border border-green-500 p-2">Laurício-Bitcoin</td>
              <td className="border border-green-500 p-2 text-green-600">R$ 320,00</td>
              <td className="border border-green-500 p-2 text-green-600">R$ 999,00</td>
              <td className="border border-green-500 p-2 text-green-500">ATIVO</td>
            </tr>
            <tr className="text-center">
              <td className="border border-green-500 p-2">Alcan-Fibonacci</td>
              <td className="border border-green-500 p-2 text-green-600">R$ 310,00</td>
              <td className="border border-green-500 p-2 text-green-600">R$ 199,00</td>
              <td className="border border-green-500 p-2 text-red-500">PARADO</td>
            </tr>
            <tr className="text-center">
              <td className="border border-green-500 p-2">Laurício-Bitcoin</td>
              <td className="border border-green-500 p-2 text-green-600">R$ 320,00</td>
              <td className="border border-green-500 p-2 text-green-600">R$ 999,00</td>
              <td className="border border-green-500 p-2 text-green-500">ATIVO</td>
            </tr>
            <tr className="text-center">
              <td className="border border-green-500 p-2">Alcan-Fibonacci</td>
              <td className="border border-green-500 p-2 text-green-600">R$ 310,00</td>
              <td className="border border-green-500 p-2 text-green-600">R$ 199,00</td>
              <td className="border border-green-500 p-2 text-red-500">PARADO</td>
            </tr>
            <tr className="text-center">
              <td className="border border-green-500 p-2">Laurício-Bitcoin</td>
              <td className="border border-green-500 p-2 text-green-600">R$ 320,00</td>
              <td className="border border-green-500 p-2 text-green-600">R$ 999,00</td>
              <td className="border border-green-500 p-2 text-green-500">ATIVO</td>
            </tr>
            <tr className="text-center">
              <td className="border border-green-500 p-2">Alcan-Fibonacci</td>
              <td className="border border-green-500 p-2 text-green-600">R$ 310,00</td>
              <td className="border border-green-500 p-2 text-green-600">R$ 199,00</td>
              <td className="border border-green-500 p-2 text-red-500">PARADO</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}

