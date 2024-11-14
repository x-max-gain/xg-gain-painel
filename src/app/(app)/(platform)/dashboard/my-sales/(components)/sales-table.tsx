import Image from "next/image";

export function SalesTable({ sales }: { sales?: any }) {
  return (
    <div className="overflow-x-auto p-4 border border-border-secondary rounded mt-4">
      {sales ? (
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left text-sm font-semibold text-text-secondary">Status</th>
              <th className="text-left text-sm font-semibold text-text-secondary">Tipo do produto</th>
              <th className="text-left text-sm font-semibold text-text-secondary">Data</th>
              <th className="text-left text-sm font-semibold text-text-secondary">Comprador</th>
              <th className="text-left text-sm font-semibold text-text-secondary">Produto</th>
              <th className="text-left text-sm font-semibold text-text-secondary">Vendido como orderbump</th>
              <th className="text-left text-sm font-semibold text-text-secondary">Utm</th>
              <th className="text-left text-sm font-semibold text-text-secondary">Endereço</th>
              <th className="text-left text-sm font-semibold text-text-secondary">Valor</th>
              <th className="text-left text-sm font-semibold text-text-secondary">Sua comissão</th>
              <th className="text-left text-sm font-semibold text-text-secondary">Forma pgto.</th>
              <th className="text-left text-sm font-semibold text-text-secondary">Transação</th>
            </tr>
          </thead>
          <tbody>

          </tbody>
        </table>
      ) : (
        <div className="flex items-center justify-center my-12 flex-col gap-2">
          <Image src="/no-sells.svg" width={200} height={200} alt="Nenhuma venda" />
          <p className="text-text-secondary">Você ainda não fez nenhuma venda...</p>
        </div>
      )}
    </div>
  )
}