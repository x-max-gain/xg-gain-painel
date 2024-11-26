import { SidebarClose } from "lucide-react";

export function FirstStep(){
  return(
    <div className="bg-background-secondary text-white rounded-lg p-6 w-96">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-semibold">Criar Novo Bot</h2>
      <button
        onClick={() => setModalIsOpen(!modalIsOpen)}
        className="text-gray-400 hover:text-white"
      >
        <SidebarClose/>
      </button>
    </div>
    <form >
      <div className="mb-4">
        <label htmlFor="botName" className="block text-sm font-medium">
          Nome do Bot
        </label>
        <input
          type="text"
          id="botName"
          name="botName"
          value={"lauricio teste"}
          className="mt-1 block w-full p-2 bg-transparent border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="strategy" className="block text-sm font-medium">
          Estratégia
        </label>
        <select
          id="strategy"
          name="strategy"
            className="mt-1 block w-full p-2 bg-background-secondary border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        >
          <option value="fibonacci">Fibonacci</option>
          <option value="martingale">Martingale</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="riskProfile" className="block text-sm font-medium">
          Perfil de Risco
        </label>
        <select
          id="riskProfile"
          name="riskProfile"
          value={"sim"}
                             
           className="mt-1 block w-full p-2 bg-background-secondary  border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        >
          <option value="conservador">Conservador</option>
          <option value="moderado">Moderado</option>
          <option value="agressivo">Agressivo</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="initialValue" className="block text-sm font-medium">
          Valor Inicial (R$)
        </label>
        <input
          type="number"
          id="initialValue"
          name="initialValue"
          value={"5432"}
          className="mt-1 block w-full p-2 bg-background-secondary border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          min="1"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md transition"
      >
        Criar Bot
      </button>
    </form>
  </div>
  )
}