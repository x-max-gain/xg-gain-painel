"use client";

export default function HomeDashboard() {
  return (
    <div className="flex flex-col gap-4 mt-4 bg-background-primary  p-4 min-h-screen">
       <nav className="border-b border-slate-800	 shadow-sm pb-3 flex justify-center items-center">
      <div className="flex gap-1">
          <button
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            style={{
              clipPath: "polygon(0% 0%, 100% 0%, 90% 1590%, 10% 100%)",
              transition: "background-color 0.3s",
            }}
          >
            Modo Simulado
          </button>

          <button
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            style={{
              clipPath: "polygon(0% 0%, 100% 0%, 90% 100%, 10% 1590%)",
              transition: "background-color 0.3s",
            }}
         
          >
            Modo Real
          </button>
        </div>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-background-secondary p-4 rounded shadow">
          <h2 className="text-md font-bold">Histórico do dia</h2>
          <div className="mt-2 text-green-500 text-xl font-bold">R$ 0,00</div>
          <div className="mt-4">
            <p className="text-sm text-gray-500">Última atualização: 09:00</p>
          </div>
        </div>

        <div className="bg-background-secondary p-4 rounded shadow flex flex-col items-center justify-center">
          <h2 className="text-md font-bold">Robôs executando</h2>
          <p className="text-gray-500 text-sm mt-2 text-center">
            Você ainda não possui nenhum robô em execução.
          </p>
          <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded">
            Criar robô
          </button>
        </div>

        {/* Posições abertas */}
        <div className="bg-background-secondary p-4 rounded shadow">
          <h2 className="text-md font-bold">Posições abertas</h2>
          <div className="mt-2 text-gray-500">
            <p className="text-xl font-bold">R$ 0.000,00</p>
            <p>Aguardando operações</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        <div className="bg-background-secondary p-4 rounded shadow">
          <h2 className="text-md font-bold">Estratégias de analistas de sucesso</h2>
          <div className="mt-4 flex flex-col gap-2">
            <div className="flex items-center justify-between bg-background-primary rounded p-3">
              <div>
                <p className="font-bold">Stonehenge</p>
                <p className="text-sm text-gray-500">Butterfly</p>
              </div>
              <div className="text-green-500 font-bold">165,6%</div>
            </div>
            <div className="flex items-center justify-between bg-background-primary rounded p-3">
              <div>
                <p className="font-bold">Deuteronômio</p>
                <p className="text-sm text-gray-500">Consistência Trader</p>
              </div>
              <div className="text-green-500 font-bold">138,2%</div>
            </div>
            <div className="flex items-center justify-between bg-background-primary rounded p-3">
              <div>
                <p className="font-bold">Stonehenge</p>
                <p className="text-sm text-gray-500">Butterfly</p>
              </div>
              <div className="text-green-500 font-bold">165,6%</div>
            </div>
            <div className="flex items-center justify-between bg-background-primary rounded p-3">
              <div>
                <p className="font-bold">Deuteronômio</p>
                <p className="text-sm text-gray-500">Consistência Trader</p>
              </div>
              <div className="text-green-500 font-bold">138,2%</div>
            </div>
           
            <div className="flex items-center justify-between bg-background-primary rounded p-3">
              <div>
                <p className="font-bold">Deuteronômio</p>
                <p className="text-sm text-gray-500">Consistência Trader</p>
              </div>
              <div className="text-green-500 font-bold">138,2%</div>
            </div>
          </div>
        </div>

        {/* Notícias da plataforma */}
        <div className="bg-background-secondary p-4 rounded shadow">
          <h2 className="text-md font-bold">Notícias da plataforma</h2>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center justify-between bg-background-primary rounded p-3 hover:bg-green-500">PLANOS BLACK: Até R$ 47 mil...</li>
            <li className="flex items-center justify-between bg-background-primary rounded p-3 hover:bg-green-500">TOP ROBÔS com 30% OFF 🔥...</li>
            <li className="flex items-center justify-between bg-background-primary rounded p-3 hover:bg-green-500">Novos Planos BLACK com DES...</li>
          </ul>
        </div>

        <div className="bg-background-secondary p-4 rounded shadow">
          <h2 className="text-md font-bold">Top robôs da semana</h2>
          <div className="mt-4 space-y-4">
            <div className="flex items-center justify-between bg-background-primary rounded p-3 hover:bg-green-500">
              <p className="font-bold">Bullbear Win Lite</p>
              <p className="text-green-500 font-bold">88.85%</p>
            </div>
            <div className="flex items-center justify-between bg-background-primary rounded p-3 hover:bg-green-500">
              <p className="font-bold">Bullbear Premium Lite</p>
              <p className="text-green-500 font-bold">65.95%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
