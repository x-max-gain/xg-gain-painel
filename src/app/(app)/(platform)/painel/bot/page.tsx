export default function Bot() {
  return (
    <div className="w-full min-h-screen bg-background-primary">
      <nav className="border-b border-green-500 shadow-sm p-4 flex justify-between items-center">
        <div className="flex gap-4">
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Execultando
          </button>
          <button className="bg-red-500 px-4 py-2 rounded hover:bg-red-700">
            Parados
          </button>
          <button className="bg-stone-600 text-white px-4 py-2 rounded hover:bg-stone-700">
            Arquivados
          </button>
       </div>

        <div> 
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            NOVO BOT
          </button>
        </div>
      </nav>

      <nav className="border-b border-green-500 shadow-sm p-4 flex justify-between items-center">
        <div className="flex gap-4">
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Modo Simulado
          </button>
          <button className="px-4 py-2 rounded hover:bg-green-500">
            Modo Real
          </button>
        </div>
      </nav>

      {/* Conteúdo principal */}
      <main className="p-8">
        {/* Filtro e gráfico */}
        <div className="mt-1 bg-background-secondary p-6 shadow rounded flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold">#3945605</h2>
            <p className="text-gray-600">Lauricio-Bitcoin</p>
          </div>
          <div>
            <p className="text-green-600 text-xl">R$320,00</p>
            <p className="text-gray-500">Saldo diário: R$999,00</p>
          </div>
        </div>
        <div className="mt-1 bg-background-secondary p-6 shadow rounded flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold">#3945605</h2>
            <p className="text-gray-600">Alcan-Fibonacci</p>
          </div>
          <div>
            <p className="text-green-600 text-xl">R$310,00</p>
            <p className="text-gray-500">Saldo diário: R$199,00</p>
          </div>
        </div>
      </main>
    </div>
  );
}

