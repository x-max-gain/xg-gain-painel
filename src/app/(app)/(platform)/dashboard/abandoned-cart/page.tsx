import { Card } from "@/components/card";

export default function AbandonedCart() {
  return (
    <div className="flex flex-col gap-4 mt-4 lg:mt-0">
      <div className="flex gap-3 items-center">
        <h3 className="text-2xl font-semibold">Carrinho abandonado</h3>
      </div>
      
      <Card title="Total de carrinhos abandonados" type="number" value="0" />



      <p className="mt-4">Carrinhos abandonados</p>
      <div className="relative overflow-x-auto rounded-md">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-white uppercase border border-gray-700">
                  <tr>
                      <th scope="col" className="px-6 py-3">
                        DARA E HORA
                      </th>
                      <th scope="col" className="px-6 py-3">
                        PRODUTO
                      </th>
                      <th scope="col" className="px-6 py-3">
                        VALOR DO CARRINHO
                      </th>
                      <th scope="col" className="px-6 py-3">
                        NOME
                      </th>
                      <th scope="col" className="px-6 py-3">
                        EMAIL
                      </th>
                      <th scope="col" className="px-6 py-3">
                        TELEFONE
                      </th>
                      <th scope="col" className="px-6 py-3">
                        CPF
                      </th>
                  </tr>
              </thead>
              <tbody>
                  <tr className="border border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      17/12/2023
                    </th>
                    <td className="px-6 py-4">
                      CHINELO DA NIKE
                    </td>
                    <td className="px-6 py-4">
                      R$340,00
                    </td>
                    <td className="px-6 py-4">
                      CARLINHOS
                    </td>
                    <td className="px-6 py-4">
                      carlinhos@gmail.com
                    </td>
                    <td className="px-6 py-4">
                      +55 (11) 99190-0000
                    </td>
                    <td className="px-6 py-4">
                      809.899.172-09
                    </td>
                  </tr>
              </tbody>
          </table>
      </div>

    </div>
  )
}