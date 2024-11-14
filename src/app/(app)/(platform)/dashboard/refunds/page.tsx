"use client";
import { Card } from "@/components/card";
import { Table } from "@/components/table";
import { useEffect, useState } from "react";

export default function Refunds() {
  const formHeader1 = [
    {label: "DATA DE VENDA", children: (row: any) => row.date_sales}, 
    {label: "DATA DE REEMBOLSO", children: (row: any) => row.date_reim}, 
    {label: "STATUS", children: (row: any) => row.status}, 
    {label: "PRODUTO", children: (row: any) => row.product}, 
    {label: "ORDERBUMPS", children: (row: any) => row.orderbumps}, 
    {label: "CLIENTE", children: (row: any) => row.client},
    {label: "EMAIL", children: (row: any) => row.email},
    {label: "VALOR", children: (row: any) => row.value},
  ];
  const formHeader2 = [
    {label: "DATA", children: (row: any) => row.date}, 
    {label: "STATUS", children: (row: any) => row.status}, 
    {label: "PRODUTO", children: (row: any) => row.product}, 
    {label: "ORDERBUMPS", children: (row: any) => row.orderbumps}, 
    {label: "CLIENTE", children: (row: any) => row.client}, 
    {label: "EMAIL", children: (row: any) => row.email},
    {label: "VALOR", children: (row: any) => row.value},
    {label: "TRANSAÇÃO", children: (row: any) => row.transation},
    {label: "AÇÔES", children: (row: any) => <><a href="">EDITAR</a></>},
  ];
  const [reimbursement1, setReimbursement1] = useState<Array<any>>([]);
  const [reimbursement2, setReimbursement2] = useState<Array<any>>([]);

  useEffect(() => {
    setReimbursement1([]);
    setReimbursement2([])
  }, [])
  return (
    <div className="flex flex-col gap-4 mt-4 lg:mt-0">
      <div className="flex lg:justify-between">
        <div className="flex gap-3 items-center">
          <h3 className="text-2xl font-semibold">Reembolsos</h3>
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
        <Card title="Total reembolsado/chargeback" type="money" value="0" />
        <Card title="Transações reembolsadas" type="number" value="0" />
      </div>
      <Table header={formHeader1} body={reimbursement1} notfoundMessage="Você não tem nenhum reembolso efetuado" />
      <Table header={formHeader2} body={reimbursement2} notfoundMessage="Você não tem nenhum reembolso solicitado" />
    </div>
  )
}