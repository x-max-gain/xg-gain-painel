"use client";
import { Card } from "@/components/card";
import { Table } from "@/components/table";
import { useEffect, useState } from "react";

export default function Reports() {
  const formHeader = [
    {label: "DATA", children: (row: any) => row.date_sales}, 
    {label: "STATUS", children: (row: any) => row.status}, 
    {label: "PRODUTO", children: (row: any) => row.product}, 
    {label: "ORDERBUMPS", children: (row: any) => row.orderbumps}, 
    {label: "CLIENTE", children: (row: any) => row.client},
    {label: "EMAIL", children: (row: any) => row.email},
    {label: "VALOR", children: (row: any) => row.value},
    {label: "TRANSAÇÃO", children: (row: any) => row.transactino},
    {label: "AÇÕES", children: (row: any) => <></>},
  ];

  const [sales, setSales] = useState<Array<any>>([]);

  useEffect(() => {
    setSales([]);
  }, [])

  return (
    <div className="flex flex-col gap-4 mt-4 mt-0">
      <div className="flex justify-between max-[640px]:block">
        <div className="flex gap-3 items-center">
          <h3 className="text-2xl font-semibold">Relatórios</h3>
        </div>
        <div className="flex">
          <button 
            className="mr-4 w-80 flex justify-center inline-flex items-center px-4 py-0 text-sm font-medium text-white bg-green-700 rounded-lg">
            Link de reembolso
          </button>
          <select name="" className="bg-transparent py-2 focus:outline-none pl-2 text-white w-full border border-gray-700 rounded-md">
            <option value="">Hoje</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4 max-[640px]:grid-cols-1">
        <div>
          <div className="mb-5"><Card title="Faturamento bruto" type="money" value="0" /></div>
          <Card title="Total comissão" type="money" value="0" />
        </div>
        <div className="p-5 border border-border-primary rounded-md">
          <p className="text-text-secondary mb-4">Formas de pagamento</p>
          <ul>
            <li className="flex justify-between w-full mb-2">
              <p>Cartão de crédito</p>
              <p>0%</p>
            </li>
            <li className="flex justify-between w-full mb-2">
              <p>Pix</p>
              <p>0%</p>
            </li>
            <li className="flex justify-between w-full mb-2">
              <p>Boleto</p>
              <p>0%</p>
            </li>
          </ul>
        </div>
      </div>
      <Table header={formHeader} body={sales} notfoundMessage="Você não tem nenhuma venda" title="Vendas" />
    </div>
  )
}