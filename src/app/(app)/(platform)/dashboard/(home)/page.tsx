import { Cards } from "./(components)/cards";
import { ChartInvoicing } from "./(components)/chart";

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:mt-4">
        <h3 className="text-2xl mb-4 font-semibold">Boa tarde, Gabriel</h3>

        <select className="bg-background-primary border border-border-primary px-4 py-3 rounded-lg text-text-secondary">
          <option value="30">Últimos 30 dias</option>
          <option value="15">Últimos 15 dias</option>
          <option value="7">Últimos 7 dias</option>
        </select>
      </div>

      <Cards />

      <div className="bg-background-primary bg-opacity-50 border border-border-primary rounded-md p-6 flex flex-col gap-4">
        <p className="text-text-secondary">Gráfico de faturamento/venda</p>

        <div className="w-full h-96">
          <ChartInvoicing />
        </div>
      </div>
    </div>
  )
}