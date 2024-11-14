import { Cards } from "./(components)/cards";
import { Sales } from "./(components)/sales";

export default function MySales() {
  return (
    <div className="flex flex-col gap-4 mt-4 lg:mt-0">
      <div className="flex gap-3 items-center">
        <h3 className="text-2xl font-semibold">Minhas vendas</h3>
        <span className="border border-border-primary text-icons-active bg-background-primary bg-opacity-50 px-4 py-1 flex items-center justify-center rounded-lg">2</span>
      </div>

      <Cards />

      <Sales />
    </div>
  )
}