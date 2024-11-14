import { Search } from "lucide-react";
import { SalesTable } from "./sales-table";

export function Sales() {
  return (
    <div>

      <div className="flex items-center bg-background-primary bg-opacity-50 border border-border-primary text-white rounded-md">
        <div className="pl-3">
          <Search size={20} />
        </div>
        <input className="bg-transparent py-4 focus:outline-none pl-2 text-white w-full" type="text" placeholder="Pesquise por CPF, e-mail ou nome" />
        <button className="bg-button-primary hover:bg-button-hover text-white font-bold py-4 px-4 lg:py-4 lg:px-8 rounded-r-md">
          Pesquisar
        </button>
      </div>

      <div>
        <SalesTable />
      </div>

    </div>
  )
}