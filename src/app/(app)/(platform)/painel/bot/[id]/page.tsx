import { AudioLines, EllipsisVertical, ListCollapse, LucideMenuSquare, Option, Parentheses, Pause } from "lucide-react";

export default function InfoBot() {
  return (
    <div className="min-h-screen pr-6 pl-6 pb-6 mb-6 bg-background-primary">
      <nav className="flex align-center justify-between ">
        <div className="w-full flex gap-1 align-center justify-center ">
          <button
            className="bg-green-500 flex gap-3 text-white px-4 py-2 rounded hover:bg-green-600"
            style={{
              clipPath: "polygon(0% 0%, 100% 0%, 90% 1590%, 10% 100%)",
              transition: "background-color 0.3s",
            }}
          >
           <ListCollapse/> <span>SUMÁRIO</span>
          </button>

          <button
            className="flex gap-3 text-white px-4 py-2 rounded hover:bg-green-600"
          >
           <AudioLines /> <span>GRÁFICO</span>
          </button>
          
          <button
            className="flex gap-3 text-white px-4 py-2 rounded hover:bg-green-600"
            style={{
              clipPath: "polygon(0% 0%, 100% 0%, 90% 100%, 10% 1590%)",
              transition: "background-color 0.3s",
            }}
          >
            <Parentheses/><span>PARÂMETROS</span>
          </button>
        </div>
      </nav>
      <nav className="flex align-center justify-between border-b border-gray-600">
        <div className="flex py-5">
          <h1 className="text-xl font-bold">Alcan-Fibonacci</h1>
        </div>

        <div>
        <button className="p-2 rounded-full">
          <Pause/>
        </button>
        <button className="p-2 rounded-full">
          <EllipsisVertical/>
        </button>
        </div>

      </nav>

      <header className="flex pt-4 justify-between items-center ">
      </header>

      <div className="flex flex-wrap align-center justify-center gap-4 mt-6 rounded">

       <div className="w-full flex align-center flex-col justify-center gap-4 flex-col max-w-[330px]">
          <div className="p-4 rounded-lg bg-background-deep">
            <p>Retorno líquido</p>
            <h2 className="text-2xl font-bold text-customGreen text-green-500">R$372,00</h2>
          </div>
          
          <div className="p-4 rounded-lg bg-background-deep">
            <p>Retorno líquido</p>
            <h2 className="text-2xl font-bold text-customGreen text-green-500">R$372,00</h2>
          </div>

          <div className="p-4 rounded-lg bg-background-deep">
            <p>Patrimônio</p>
            <h2 className="text-2xl font-bold text-green-500">R$5.372,00</h2>
          </div>
       </div>

       <div className="w-full flex align-center flex-col justify-center gap-4 flex-col max-w-[330px]">
         <div className="p-4 rounded-lg bg-background-deep">
            <p>Drawdown máximo</p>
            <h2 className="text-2xl font-bold text-green-500">2,31%</h2>
          </div>
         
          <div className="p-4 rounded-lg bg-background-deep">
            <p>Drawdown máximo</p>
            <h2 className="text-2xl font-bold text-green-500">2,31%</h2>
          </div>

          <div className="p-4 rounded-lg bg-background-deep">
            <p>Trades com lucro</p>
            <h2 className="text-2xl font-bold text-green-500">33,33%</h2>
          </div>
       </div>

       <div className="bg-background-secondary w-full max-w-[600px]">
          <div className="mt-6 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Evolução do Patrimônio</h3>
            <div className="h-44 bg-background-deep rounded-lg flex items-center justify-center">
              <p>Gráfico aqui</p>
            </div>
          </div>
       </div>
       
      </div>

      {/* Tabela de Ordens */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-4">Lista de ordens</h3>
        <table className="w-full border-collapse border border-green-500 text-sm">
          <thead>
            <tr className="bg-background-deep">
              <th className="px-4 border border-green-500 p-2 py-2">Data/Hora</th>
              <th className="px-4 border border-green-500 p-2 py-2">Ativo</th>
              <th className="px-4 border border-green-500 p-2 py-2">Resultado</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td className="px-4 border border-green-500 p-2 py-2">19/11/2024</td>
              <td className="px-4 border border-green-500 p-2 py-2">WINZ24</td>
              <td className="px-4 border border-green-500 p-2 py-2 text-customGreen">+R$50</td>
            </tr>
            <tr className="text-center">
              <td className="px-4 border border-green-500 p-2 py-2">19/11/2024</td>
              <td className="px-4 border border-green-500 p-2 py-2">WINZ24</td>
              <td className="px-4 border border-green-500 p-2 py-2 text-customGreen">+R$50</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
